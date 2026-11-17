# GHL Build Sheet: Lost in the Movie Opt-in Campaign

Location: **Awakening Project**, `BLgbsDtEX0NeeOZQXJPD`. Do not build any of this in "Awakening Partner Template" (`HafeO7m4IkaAmWY1lx4q`).
Prepared 2026-11-17. Time zone America/Los_Angeles.

This sheet covers the parts the API cannot create: the form, the home-page swap, the workflows, the agency request and QA. A person builds them in the GHL UI, or the agency builds them once the Workflow and Forms APIs are on. GHL renames menu items from time to time. If a label below doesn't match exactly, search the trigger or action picker for the key word (for example "Comment", "Form Submitted", "Customer Replied").

---

## 0. Already done via API (2026-11-17)

| Object | Name | ID | Notes |
|---|---|---|---|
| Tag | `lm-lost-in-movie` | `EPZoVsrgNJHZlpozOzO2` | New. Means "opted in for Lost in the Movie". |
| Contact custom field (TEXT) | `utm_source` | `aTvB9pqjcmTJvNoclibI` | Key `contact.utm_source`. Was missing. |
| Contact custom field (TEXT) | `utm_campaign` | `GdBs0AiTOLtLL5JEasRt` | Key `contact.utm_campaign`. Was missing. |

Nothing else was created. There is no `utm_medium` custom field, because this task allowed only the two above. GHL's built-in attribution (Contact > Attribution, "First/Latest Attribution") still records utm_medium and utm_content from the page URL.

### Existing IDs used in this sheet (verified 2026-11-17)

| Tag | ID | Role here |
|---|---|---|
| source-social-media | `F8ae1W8Pk4ttsK00Obvp` | added on opt-in when utm_source is a social network |
| source-website | `IoWekNROr2Kd5Iaur4UA` | added on opt-in when there's no social utm_source |
| ap-lead | `3yyDJ64aIPs1xCfqLjC3` | added on every opt-in |
| src-ebook | `znMpxDhKkjg8iEUfaIPR` | already in use for e-book leads, added for continuity |
| ebook-sms-pending | `2wTfBiwCrlrlA9xtlq59` | added only if the SMS box is ticked (SMS is not live) |
| buyer-book / book-buyer | `ebXgdkWUaYETaWNClJic` / `WR0jBinMZkg78Za2bh87` | goal: bought a book |
| buyer-course / ap-enrolled / pc-enrolled | `wim0eDx4XALFQUZhsPie` / `BM1KXXMMo9JwnPystGQW` / `whHr8CauzOBSlHjPkeRq` | goal: bought or enrolled in the course |
| crisis-escalation | `HKrdcdiqWwdEu1DdB4qP` | HARD STOP. The tag's own description says "W5: stops all marketing and drip, alerts Rameen. Every workflow must check this tag." |
| do-not-sell | `ZkekhIjjijJR32hwTTme` | HARD STOP |
| ccpa-delete-request | `dI2U8LFB3JTqECyzvrBy` | HARD STOP |

| Existing custom field | ID | Use |
|---|---|---|
| lead_source (TEXT) | `EsY12pKSgrpG2Qx1dToh` | hidden field, fixed value `lost-in-the-movie` |
| sms_consent (TEXT) | `pnhnjLe4pZVUxavTLu39` | set to `Yes` by workflow only if the SMS box is ticked |
| PC SMS Consent Timestamp (TEXT) | `KVDLWaGVUavguYBRFP5u` | timestamp of SMS consent (reused, keeps one consent record) |

---

## 1. Form: "AP | Lost in the Movie Opt-in"

### 1a. Build the form (about 10 min)
1. **Sites > Forms > Builder > + Add Form > Start from scratch.**
2. Name it exactly: `AP | Lost in the Movie Opt-in`.
3. Add these fields, in this order:

| # | Element | Label shown | Required | Maps to | Notes |
|---|---|---|---|---|---|
| 1 | Header/Text (HTML) | "Lost in the Movie. A short free book for people who did everything right and still feel like a stranger in their own life." | n/a | n/a | No em dashes. |
| 2 | First Name | First name | Yes | contact.first_name | Placeholder "First name" |
| 3 | Email | Email | Yes | contact.email | |
| 4 | Phone | Phone (optional) | No | contact.phone | Keep it optional. Email is the only live channel. |
| 5 | Custom field `utm_source` | (hidden) | No | contact.utm_source | Open field settings > toggle **Hidden** on > **Query Key** = `utm_source`. Leave the default value blank. |
| 6 | Custom field `utm_campaign` | (hidden) | No | contact.utm_campaign | Hidden on, **Query Key** = `utm_campaign`, **Default value** = `lost-in-the-movie` |
| 7 | Custom field `lead_source` | (hidden) | No | contact.lead_source | Hidden on, Default value = `lost-in-the-movie` |
| 8 | SMS consent checkbox (see 1b) | see 1b | **No** | GHL native SMS consent element | **Unchecked by default.** It must not be required. |
| 9 | Text (HTML) under the button | "You'll get the book by email, plus a few short notes from Rameen over the next three weeks. Unsubscribe anytime. [Privacy Policy](https://mindmatterspirituality.com/privacy-policy) · [Terms](https://mindmatterspirituality.com/terms)" | n/a | n/a | This is the email expectation disclosure. |
| 10 | Submit button | "Send me the book" | n/a | n/a | |

4. **Form Settings (gear icon):**
   - **On Submit:** "Open URL" (redirect) to `https://partner.mindmatterspirituality.com/free-ebook-welcome`. Open the welcome page first and check that it has no em dashes and no outdated PDF link.
   - **Allow duplicate submissions:** ON. Re-submits update the existing contact, so no duplicate contacts are made.
   - **Add tags on submit:** leave EMPTY. The workflow adds the tags so that all the logic lives in one place.
   - **Sticky contact / autofill:** ON.
   - Style it to match the home page: font, the brand button color, 600px max width.
5. **Save.** Write the new form ID here: `______________` (shown in the URL and in Integrate > embed code).

### 1b. SMS consent checkbox (build now, leave off until A2P is approved)
- In the builder, add the native **"SMS Consent" / "Terms & Conditions (SMS)"** element. Don't create a new custom field. If the native element isn't offered, use a plain checkbox element, not a contact field, and let the workflow write `sms_consent = Yes`.
- **Default state: UNCHECKED. Not required. Not pre-ticked. Not bundled with the email opt-in.**
- Label text (TCPA-ready, names one seller, no em dashes):

> Optional: Yes, text me at the number above. The Awakening Project (Rameen Zereh) may send recurring automated text messages about the book, practices and offers. Up to 4 messages a month. Consent is not a condition of any purchase. Msg & data rates may apply. Reply STOP to unsubscribe, HELP for help. See our [Privacy Policy](https://mindmatterspirituality.com/privacy-policy) and [Terms](https://mindmatterspirituality.com/terms).

- **Until A2P 10DLC is approved (section 5):** either hide the element (toggle "Hidden") or leave it visible but make sure NO workflow sends SMS. Ticking the box only adds tag `ebook-sms-pending` and sets `sms_consent`. That records consent for later, and nothing is texted.
- Before turning SMS on, add this line to the Privacy Policy if it isn't there: "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties." Carriers reject A2P campaigns that lack it.

### 1c. Fix the home page so the free book uses this form (about 5 min)
1. **Sites > Websites** (or Funnels) > open the site that serves `mindmatterspirituality.com` > open the **Home** page step > **Edit**.
2. Click the form element now showing **"contact information"** (`gORzh2r3ipTiJvDVHjZv`) in the free-book sign-up section.
3. In the right panel's **Form** dropdown, choose **AP | Lost in the Movie Opt-in**.
4. Make sure the section headline and button copy say it's the free book, Lost in the Movie. Suggested headline: "You are not broken. You are lost in a movie." Sub-line: "A short free book for people who did everything right and still feel like a stranger in their own life."
5. **Save > Publish.** In an incognito window, load `https://mindmatterspirituality.com/?utm_source=instagram&utm_medium=social&utm_campaign=lost-in-the-movie` and check that the new form shows.
6. **Do not delete** the "contact information" form. Other pages or workflows may use it. Check by going to **Automation > Workflows**, then searching or filtering for a trigger "Form Submitted = contact information". Any workflow found that already delivers the free e-book (for example one using the "AWK Free eBook" template `6aeeb6a54a5dd7483690b3e8` or the "SOS Day 0-4" templates) must not fire for the new form, or people get two delivery emails. Since that workflow uses the old form, it stops firing for home-page sign-ups once the swap is done. Write down its name here: `______________`.
7. Optional: point the link-in-bio pages `/go/instagram` and `/go/tiktok` at the same form, keeping their own `utm_source`.

**Interim, before 1a to 1c are done:** W-LITM-NURTURE can temporarily use trigger "Form Submitted = contact information" (see 3a, Trigger C). If you do that, deactivate the old e-book workflow from step 6 so nobody gets two deliveries.

---

## 2. Comment and DM keyword workflows (W-LITM-1, 2, 3)

> **POLICY FLAG, READ FIRST.** The campaign rules say "EMAIL ONLY, no automated DMs", and the social calendar (`social/calendar.md`) says "No auto-DMs and no keyword bait." The workflows below send a DM only because the person asked for it by commenting or messaging the keyword. Meta allows that, but it is still an automated DM. **Build all three as DRAFT and leave them unpublished until Rameen decides in writing.** If he says yes, add the line "Comment MOVIE and I'll send you the free book" to selected posts. Most posts should keep "link in bio". If he says no, delete the drafts and keep answering by hand.

### Prerequisites (all three)
- **Settings > Integrations > Facebook & Instagram:** connect the Facebook Page "Awakening project" and Instagram @rzereh **for Conversations/Messaging**. The Social Planner connection is a separate OAuth and does not give you comment or DM triggers. Grant every page and messaging permission it asks for.
- Instagram must be a Professional (Business or Creator) account linked to that FB Page. In the Instagram app go to **Settings > Messages and story replies > Message controls > Connected tools > Allow access to messages = ON**.
- **Settings > Business Profile:** fill in Messenger/Instagram greeting fields so the inbox isn't blank.
- Meta rules: a comment-triggered private reply is allowed once per comment, within 7 days. A DM reply is allowed within 24 hours of the person's last message. Don't use these workflows to send follow-ups.

### Shared copy (no em dashes)
**Public comment replies.** Rotate the three; GHL "Reply in Comments" supports random or multiple replies:
1. "Just sent it to your messages. Read it when you have ten quiet minutes."
2. "Sent. No rush on it. Thank you for being honest enough to comment."
3. "Check your DMs. It's short, and it doesn't ask you to believe anything."

**DM text** (use the channel's own UTM. The `utm_content` value is optional and is captured by built-in attribution):
> Hey there, it's Rameen. Here's the free book you asked for, Lost in the Movie: https://mindmatterspirituality.com/?utm_source=instagram&utm_medium=social&utm_campaign=lost-in-the-movie&utm_content=dm
>
> Pop your email in and it lands in your inbox in a minute. It's short. If you can, read it in one sitting, and notice what your chest does on the first page. No robes, no belief system. Just a few honest things to look at.

For Facebook, replace `utm_source=instagram` with `utm_source=facebook`.

Keep the person's email collection on the form. Do not ask for an email inside the DM. Email consent and the nurture start must come through the form, so the CAN-SPAM, privacy and source data stay clean.

### W-LITM-1: Instagram comment "MOVIE" -> public reply + DM
1. **Automation > Workflows > + Create Workflow > Start from scratch.** Name: `W-LITM-1 | IG Comment MOVIE -> DM link`. Folder: `Lost in the Movie`.
2. **Trigger:** "Instagram Comment(s) On A Post" (some accounts show it as "Facebook/Instagram Comment On Post", platform Instagram).
   - Page/Account: @rzereh
   - Post: "All posts", or select the posts that carry the MOVIE CTA
   - Filter **Comment contains phrase:** `MOVIE`. Use exact or whole-word match if the option is there; matching is not case-sensitive.
   - "Track first-level comments only": ON (so replies-to-replies don't trigger it)
3. **Action: If/Else "Safety gate":** Contact Tag includes any of `crisis-escalation`, `do-not-sell`, `ccpa-delete-request`.
   - YES branch: **Internal Notification** (email to rameen@mindmatterspirituality.com): "IG comment MOVIE from a flagged contact {{contact.name}}. No auto-reply sent. Please reply by hand." Then **End**.
   - NO branch: continue.
4. **Action: Reply in Comments** (Instagram), the three rotating replies above.
5. **Action: Instagram DM / "Send Instagram Message"** (private reply), the DM text with `utm_source=instagram`.
6. **Action: Add Tag:** `source-social-media`. Do NOT add `lm-lost-in-movie` here. That tag means they actually opted in on the form.
7. **Settings tab:** Allow re-entry OFF. Stop on response OFF. Time window none (instant).
8. **Save. Leave it as DRAFT** (see the policy flag).

### W-LITM-2: Facebook Page comment "MOVIE" -> public reply + Messenger
Same as W-LITM-1, with these changes:
- Name: `W-LITM-2 | FB Comment MOVIE -> Messenger link`
- Trigger: "Facebook Comment(s) On A Post", Page "Awakening project", same keyword filter.
- Reply action: "Reply in Comments" (Facebook).
- DM action: "Facebook Messenger" / "Send Facebook Message" (private reply), DM text with `utm_source=facebook`.
- Add Tag `source-social-media`.

### W-LITM-3: DM keyword "MOVIE" (IG / FB) -> reply with link
1. Name: `W-LITM-3 | DM keyword MOVIE -> link`.
2. **Trigger 1:** "Customer Replied", Reply channel = **Instagram**, filter "Message contains phrase" = `movie`.
   **Trigger 2:** "Customer Replied", Reply channel = **Facebook** (Messenger), same phrase filter.
3. **If/Else "Crisis words"** (check this FIRST): the message body contains any of `suicide`, `kill myself`, `end it all`, `don't want to live`, `dont want to live`, `want to die`, `hurt myself`, `self harm`.
   - YES: **Add Tag** `crisis-escalation`, which hands off to the existing W5 safety workflow. Then **Send IG/FB message**: "I'm really glad you wrote. I'm not a crisis service, and you deserve someone right now. In the US or Canada, call or text 988. In the UK or Ireland, call 116 123. Anywhere else, findahelpline.com lists free local lines. I'll read your message personally." Then **Internal Notification** to Rameen (email): "Possible crisis message from {{contact.name}} on {{contact.source}}. W5 tagged. Please reply personally." Then **End**. No link, no pitch.
   - NO: continue.
4. **If/Else "Safety gate"** (same as W-LITM-1 step 3).
5. **If/Else on channel:** IG branch sends the DM text with `utm_source=instagram`. FB branch sends it with `utm_source=facebook`.
6. **Add Tag** `source-social-media`.
7. **Settings:** Allow re-entry ON (someone may ask twice weeks apart). Stop on response OFF.
8. Save as **DRAFT**.

Note on matching: "contains movie" will also fire when someone says "I loved that movie" in a normal DM. The reply is harmless and on-topic, but whoever handles the inbox should know it can happen. If GHL offers "exact match", use exact `MOVIE` instead.

### TikTok: honest limitations
- In this account, GHL connects TikTok **only through Social Planner (posting)**. GHL has no TikTok comment trigger, DM trigger or TikTok send action, and TikTok does not open DM automation to tools like GHL for ordinary business accounts. **So TikTok comment-to-DM and DM-keyword automation are not possible here.** Don't buy a third-party tool to fake it, because that would also break the no-automated-DM rule.
- What to do on TikTok instead:
  1. Put the link `https://mindmatterspirituality.com/?utm_source=tiktok&utm_medium=social&utm_campaign=lost-in-the-movie` in the bio. The bio link needs the account to be a Business account. If it isn't available, put the plain URL as text in the bio.
  2. On each promo video, pin a comment: "The free book is linked in my bio. It's short, and it doesn't ask you to believe anything."
  3. When someone comments MOVIE or asks for the book, reply by hand: "It's the link in my bio. Thank you for asking." When someone DMs, reply by hand with the same UTM link.
  4. Crisis disclosures get the resource reply (988 / 116 123 / findahelpline.com) by hand, with no pitch, and the person gets tagged `crisis-escalation` in GHL if they're a contact.

---

## 3. Workflow W-LITM-NURTURE

### 3a. Create the email templates first (about 20 min)
**Marketing > Emails > Templates > + New > Code editor (HTML) > Paste** the file contents. Folder: `Lost in the Movie`. Use these exact names:

| Day | Template name | Source file | Subject (A) | Preheader | Skip rule |
|---|---|---|---|---|---|
| 0 | `LITM D00 | Delivery` | `emails/nurture-d00-delivery.html` | Here's your book (Lost in the Movie) | Read it in one sitting. Then notice one thing. | none |
| 1 | `LITM D01 | Balcony` | `emails/nurture-d01-balcony.html` | Something in you was watching | When a reaction is bigger than its cause, a movie just started. | none |
| 3 | `LITM D03 | Sacred Pause` | `emails/nurture-d03-sacred-pause.html` | One breath, before you answer | The Sacred Pause takes about as long as a sip of coffee. | none |
| 5 | `LITM D05 | Remembering` | `emails/nurture-d05-remembering.html` | The person you became to survive | Where the diagnosis becomes a map, and the map becomes a move. | skip if tag buyer-book or book-buyer |
| 8 | `LITM D08 | Course intro` | `emails/nurture-d08-course-intro.html` | 4:40 on a Tuesday | Why I built a course instead of writing another book. | skip if course tags (goal exits anyway) |
| 12 | `LITM D12 | Course company` | `emails/nurture-d12-course-company.html` | Who could you call at 2am? | A quiet word about company, and why it matters more than technique. | same |
| 16 | `LITM D16 | Course honest` | `emails/nurture-d16-course-honest.html` | The honest reasons not to take my course | A few reasons to wait, and one question that tells you if you're ready. | same |
| 21 | `LITM D21 | Practitioner` | `emails/nurture-d21-practitioner.html` | For the ones who keep telling friends about the movie | An honest look at sharing this work, fine print included. | none (written to be safe for everyone) |

Template settings for every email:
- **From name:** Rameen Zereh.
- **From email:** an address on the verified domain `support.mindmatterspirituality.com` (for example `rameen@support.mindmatterspirituality.com`). The root domain is not a verified sending domain. Only use `rameen@mindmatterspirituality.com` as the From if a test send shows it passes.
- **Reply-to:** `rameen@mindmatterspirituality.com`. Several emails invite replies, so someone must read this inbox.
- Write the template IDs here when they're created: D00 `____` D01 `____` D03 `____` D05 `____` D08 `____` D12 `____` D16 `____` D21 `____`
- Do **not** use the old template "AWK Free eBook - Your free book is ready" (`6aeeb6a54a5dd7483690b3e8`). It has an em dash and no unsubscribe tag. D00 replaces it.
- Before going live, Rameen should use **Media Storage > the file > Replace** on `lost-in-the-movie-free-ebook.pdf`. The hosted copy (115 KB, Oct 30) is not the final 370 KB book, and replacing it keeps the URL the same.

### 3b. Build the workflow
1. **Automation > Workflows > + Create Workflow > Start from scratch.** Name: `W-LITM-NURTURE | Lost in the Movie opt-in + 21-day email`. Folder: `Lost in the Movie`.

2. **Triggers** (contacts enter once, because re-entry is OFF):
   - **Trigger A:** "Form Submitted", Form = `AP | Lost in the Movie Opt-in`.
   - **Trigger B:** "Contact Tag", Tag Added = `lm-lost-in-movie`. This covers manual adds, imports and the future Forms API.
   - **Trigger C (interim only, delete after section 1c):** "Form Submitted", Form = `contact information`.
   - On **each** trigger add the filters: Tag **does not include** `crisis-escalation`; Tag does not include `do-not-sell`; Tag does not include `ccpa-delete-request`.

3. **Settings tab:**
   - Allow re-entry: **OFF**
   - Stop on response: **OFF** (replies go to Rameen's inbox; we don't want "thank you" replies to cut the book delivery short)
   - Time window: none at workflow level (windows are set per wait step below)
   - Sender: From name Rameen Zereh, From email per 3a, Reply-to rameen@mindmatterspirituality.com
   - Conversations: "Mark as read" OFF

4. **Actions, in this order:**

```
[1]  Add Tag: lm-lost-in-movie, ap-lead, src-ebook
[2]  If/Else "Source": contact.utm_source is any of instagram, facebook, tiktok, youtube, threads, reddit, linkedin, pinterest, x
        YES -> Add Tag: source-social-media
        NO  -> Add Tag: source-website
[3]  Update Contact Field: utm_campaign = lost-in-the-movie   (only if empty; use If/Else "utm_campaign is empty")
[4]  If/Else "SMS box ticked": SMS consent field / checkbox is checked
        YES -> Add Tag: ebook-sms-pending
               Update Contact Field: sms_consent = Yes
               Update Contact Field: PC SMS Consent Timestamp = {{right_now.date_time}}   (or the date merge field GHL offers)
               (NO SMS is sent. A2P is not approved.)
        NO  -> continue
[5]  Internal Notification (Email) to rameen@mindmatterspirituality.com:
        Subject: "New Lost in the Movie reader: {{contact.first_name}} ({{contact.utm_source}})"
        (optional; turn off if it's too noisy)

---- SAFETY GATE G0 ----
[6]  If/Else "Safety gate": Tag includes any of crisis-escalation, do-not-sell, ccpa-delete-request
        YES -> Remove from workflow / End
        NO  -> continue
[7]  Send Email: LITM D00 | Delivery           (immediately)

[8]  Wait: 1 day, then wait until time window 6:00-8:00 AM, contact's time zone (fallback America/Los_Angeles), any day
[9]  Safety gate G1 (same as [6])
[10] Send Email: LITM D01 | Balcony

[11] Wait: 2 days + window 6:00-8:00 AM
[12] Safety gate G3
[13] Send Email: LITM D03 | Sacred Pause

[14] Wait: 2 days + window 6:00-8:00 AM
[15] Safety gate G5
[16] If/Else "Has book": Tag includes buyer-book OR book-buyer
        YES -> skip (go to [18])
        NO  -> Send Email: LITM D05 | Remembering

[18] Wait: 3 days + window 6:00-8:00 AM
[19] Safety gate G8
[20] Send Email: LITM D08 | Course intro

[21] Wait: 4 days + window 6:00-8:00 AM
[22] Safety gate G12
[23] Send Email: LITM D12 | Course company

[24] Wait: 4 days + window 6:00-8:00 AM
[25] Safety gate G16
[26] Send Email: LITM D16 | Course honest

[27] Wait: 5 days + window 6:00-8:00 AM
[28] Safety gate G21
[29] Send Email: LITM D21 | Practitioner
[30] Add Tag: nurture-6mo    (hands off to the long-term newsletter or nurture; leave it out if nothing uses that tag)
[31] End

---- GOAL EVENTS (placed after [31]; contacts who meet a goal anywhere jump here) ----
[G-A] Goal Event "Course purchase": Added Contact Tag is any of buyer-course, ap-enrolled, pc-enrolled
        (also add goal type "Order Submitted / Payment Received" for the $297 course product, as a backup)
        -> End (contact exits nurture; course onboarding takes over)
[G-B] Goal Event "Book purchase": Added Contact Tag is any of buyer-book, book-buyer
        -> End (as the brief says: exit on purchase)
```

   Day check: D0 -> +1 = D1 -> +2 = D3 -> +2 = D5 -> +3 = D8 -> +4 = D12 -> +4 = D16 -> +5 = D21.

   **Goal B variant (recommended, Rameen to decide):** today no book-buyer workflow leads into the course, so a book buyer who exits at G-B never hears about the course. The alternative is to set G-B to "Go to step [18]" (the D08 course emails) instead of End. Then book buyers skip D05 and still get the course invitation. G-A always ends.

   **Goal setting:** in each Goal Event choose "If contact meets the goal: jump to this goal". For "If contact does not meet the goal", choose **End** (they've already finished the sequence by then).

5. **Hard stop wherever someone is in the sequence:** open the existing **W5** crisis workflow (the one triggered by tag `crisis-escalation`) and add the action **Remove from Workflow > W-LITM-NURTURE** (plus W-LITM-1/2/3). Do the same in any workflow that adds `do-not-sell` or `ccpa-delete-request`. The safety gates before every email are the backup if this is missed.

6. **Save > Test** (see QA, section 5) > **Publish**.

### 3c. Notes
- The DND/unsubscribe setting is honored automatically by the Send Email action. Leave the "Send to DND contacts" option OFF.
- Every template already has the CAN-SPAM footer: 1408 11th Ave, Oakland, CA 94606, `{{unsubscribe_link}}`, Privacy Policy, and the crisis line 988 / 116 123 / findahelpline.com. Check in a test that `{{unsubscribe_link}}` renders as a working URL inside the `href`. If GHL outputs a full anchor tag, replace the anchor with the bare merge tag.
- Merge fields: Handlebars only (`{{default contact.first_name "friend"}}`). Liquid filters block the send.
- Practitioner copy (D21) says $497 + $97/mo starting day 30, auto-renews until cancelled, with no earnings figures. Confirm it matches the checkout page before publishing.

---

## 4. Message to the agency / HighLevel support

**To:** GHL agency admin (or HighLevel Support at help.gohighlevel.com > Submit a ticket)
**Subject:** Please enable Workflows API and Forms API for sub-account BLgbsDtEX0NeeOZQXJPD (Awakening Project)

> Hi,
>
> Could you enable API access to **Workflows** and **Forms** for our sub-account?
>
> - Sub-account name: **Awakening Project**
> - Location ID: **BLgbsDtEX0NeeOZQXJPD**
> - Current error: workflow endpoints return **403 WORKFLOW_API_NOT_ENABLED_FOR_LOCATION**. Forms can't be created or edited through the API.
> - Please do NOT change anything on our other location, "Awakening Partner Template" (HafeO7m4IkaAmWY1lx4q).
>
> **Why we need it:** we run a small education business (contemplative courses and books) and manage our marketing through an authorized integration on our own sub-account. We're launching a lead campaign for a free e-book. The campaign needs a dedicated opt-in form and a 21-day email welcome workflow. Every workflow also has to carry the same safety and privacy rules: it must stop for contacts tagged crisis-escalation, do-not-sell or ccpa-delete-request, and exit when someone buys. Building and checking those rules by hand in each workflow is slow and easy to get wrong. With API access we can create them the same way every time, version them, and audit them for the opt-out and CCPA rules we must follow.
>
> **Scopes requested:** workflows (read and write, including create and publish if available) and forms (read and write, including create and submissions read) for this location only. We are happy to keep write calls approval-gated on our side.
>
> If enabling this needs a plan change, a feature flag, or a request from the agency owner, please tell us what's needed and roughly how long it takes. If it isn't possible, please confirm so we can build these by hand in the UI.
>
> Thank you,
> Rameen Zereh
> The Awakening Project, 1408 11th Ave, Oakland, CA 94606
> rameen@mindmatterspirituality.com

---

## 5. 15-minute QA checklist

Use a test inbox you control, plus a second address on another provider (Gmail and Outlook or Yahoo). The test-send limit is 20 per location per hour.

**Form and page (4 min)**
- [ ] Incognito: load `https://mindmatterspirituality.com/?utm_source=instagram&utm_medium=social&utm_campaign=lost-in-the-movie`. The new form appears and the copy names Lost in the Movie.
- [ ] Mobile width (phone or devtools at 375px): the form fits, the button is tappable, nothing scrolls sideways.
- [ ] The SMS box is **unchecked** on load, and the form submits without ticking it.
- [ ] Submit with first name and email only. You're redirected to `/free-ebook-welcome`, and that page has no em dashes and links the current PDF.
- [ ] Open the contact: `utm_source = instagram`, `utm_campaign = lost-in-the-movie`, `lead_source = lost-in-the-movie`, and the Attribution panel shows utm_medium = social.

**Workflow (5 min)**
- [ ] Contact has tags `lm-lost-in-movie`, `ap-lead`, `src-ebook`, `source-social-media`. It does NOT have `ebook-sms-pending`.
- [ ] Workflow history shows it entered once, even though Trigger A and Trigger B both match.
- [ ] D00 arrives within 2 minutes, from a support.mindmatterspirituality.com address with reply-to rameen@. It's not in spam, or note the spam placement.
- [ ] D00: the PDF link opens the **final 370 KB** book, `{{unsubscribe_link}}` works, the Oakland address is in the footer, the crisis line shows, and the first name merged (or shows "friend").
- [ ] Submit a second test with no UTM. It gets `source-website`, not `source-social-media`.
- [ ] Tick the SMS box on a third test. It gets `ebook-sms-pending` and `sms_consent = Yes`, and **no text is sent**.

**Stops and exits (4 min)**
- [ ] Add `crisis-escalation` to test contact 1 while it waits at D01. In the workflow history it leaves at the next gate (or at once via W5). No D01 arrives.
- [ ] Add `do-not-sell` to another test contact. It's removed.
- [ ] Add `buyer-course` to a test contact. It jumps to goal G-A and ends.
- [ ] Add `buyer-book` to a test contact. It goes to G-B and ends, or jumps to D08 if the variant was chosen.
- [ ] Use the workflow's "Skip wait / Test" or the contact's "Move to step" to fire D01 to D21 once each. Click every button in every email: balcony-breath, Sacred Pause MP4, remembering-your-true-self, shop-books, course checkout, partner-programs. None return 404.

**Social (2 min, only if W-LITM-1/2/3 were approved)**
- [ ] From a personal IG account, comment `MOVIE` on a test post. You get a public reply and a DM with the `utm_source=instagram` link.
- [ ] Repeat on the FB Page. You get a Messenger link with `utm_source=facebook`.
- [ ] DM "movie" to IG. You get the link reply. DM a crisis phrase from a test account. You get the resource message, the contact is tagged `crisis-escalation`, Rameen gets an email, and no link is sent.
- [ ] Afterwards: delete the test contacts, or tag them `test-contact`.

---

## 6. Adding SMS later: A2P 10DLC steps

SMS stays OFF until all of these are done. The A2P custom values in this account currently say "Automotive", which is wrong and has to be fixed before registering.

1. **Fix the custom values.** In **Settings > Custom Values**, replace the "Automotive" A2P values with the real business: The Awakening Project, contemplative education (courses, books, community). Address 1408 11th Ave, Oakland, CA 94606. Website mindmatterspirituality.com. Support email rameen@mindmatterspirituality.com.
2. **Website readiness.** The carrier reviewer checks:
   - Privacy Policy includes the "no mobile information will be shared with third parties..." line (see 1b).
   - Terms page has an SMS section: program name, message frequency (up to 4 a month), "Msg & data rates may apply", "Reply STOP to opt out, HELP for help", support contact.
   - The opt-in form shows the unchecked consent box with the 1b wording.
3. **Phone number.** **Settings > Phone Numbers > Add Number.** Buy a local number (an Oakland or Bay Area code is fine). Don't use a toll-free number for this. Toll-free has its own verification.
4. **Brand registration.** **Settings > Phone Numbers > Trust Center > A2P 10DLC > Register Brand.**
   - Legal business name and EIN exactly as on the IRS letter (CP 575 or 147C). A sole proprietor without an EIN must pick "Sole Proprietor", which allows only 1 number and lower throughput.
   - Business type, industry "Education", website, address, and an authorized contact (Rameen). The authorized contact's email domain should match the website.
   - Submit, then wait for brand approval (usually minutes to a few days).
5. **Campaign registration.** **Trust Center > A2P > Add Campaign.**
   - Use case: **Marketing** (or "Mixed" if receipts and reminders will also go out).
   - Campaign description: "The Awakening Project sends practice reminders, short reflections from founder Rameen Zereh, and occasional offers for books and courses to people who opted in on mindmatterspirituality.com."
   - Opt-in description: "Users opt in on the web form at https://mindmatterspirituality.com/ by checking an optional, unchecked-by-default SMS consent box that discloses brand name, frequency, msg & data rates, STOP/HELP and links to the Privacy Policy and Terms. Consent is not required to receive the free e-book." Attach a screenshot URL of the form.
   - Sample messages (2 to 5; brand name, opt-out text, no em dashes, no URL shorteners):
     - "The Awakening Project: Your free book Lost in the Movie is in your inbox. Notice one movie today. Reply STOP to opt out."
     - "The Awakening Project: Rameen here. One breath before you answer today. That's the Sacred Pause. Reply STOP to opt out, HELP for help."
     - "The Awakening Project: The Awakening Your True Self course opens soon. Details: https://mindmatterspirituality.com/awakening-your-true-self-checkout Reply STOP to opt out."
   - Check: embedded links YES, phone numbers NO, age-gated NO, direct lending NO.
   - Opt-out keywords STOP, UNSUBSCRIBE, CANCEL, END, QUIT. Help keyword HELP, with the response: "The Awakening Project: help at rameen@mindmatterspirituality.com. Msg & data rates may apply. Reply STOP to opt out."
   - Opt-in confirmation: "The Awakening Project: You're subscribed to up to 4 msgs/mo. Msg & data rates may apply. Reply HELP for help, STOP to opt out."
   - Fees: there are one-time brand and campaign vetting fees plus a monthly campaign fee. Check current pricing in the Trust Center before submitting.
6. **Wait for campaign approval** (often 1 to 3 weeks). If it's rejected, fix exactly what the rejection reason says and resubmit.
7. **After approval:**
   - Unhide the SMS consent element on the form (1b).
   - Send the opt-in confirmation SMS only to contacts tagged `ebook-sms-pending` whose `sms_consent = Yes`, then swap that tag for an SMS-active tag in that workflow.
   - Every SMS step must sit behind the same safety gate (crisis-escalation, do-not-sell, ccpa-delete-request) and a time window of **9:00 AM to 8:00 PM in the contact's local time**. That fits inside federal TCPA hours and the stricter state rules (for example Florida and Oklahoma).
   - Keep frequency at or below the registered "up to 4 a month".
   - Never text people who did not tick the box. Phone numbers from old forms are not consent.
