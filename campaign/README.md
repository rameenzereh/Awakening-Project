# Lost in the Movie: Launch Report

**For:** Rameen Zereh, Awakening Project (GHL location `BLgbsDtEX0NeeOZQXJPD`)
**Checked:** 2026-11-17, America/Los_Angeles. Every status below was read directly from GHL, not taken from the agent logs.

---

## The short version

- **One thing is live in GHL:** email Blast A is **scheduled** to about **9 contacts**, most of them internal (your own addresses, staff, family, a test contact).
- **Social: nothing is posted or scheduled.** 0 posts in Social Planner. All 77 posts are written and waiting for your OK.
- **11 email templates exist in GHL.** The 8 nurture emails do nothing yet. They need a workflow that someone has to build by hand.
- **Your first decision, before 8:30 AM tomorrow (Wed Nov 18):** let Blast A go out, or pause it.

---

## What is LIVE or SCHEDULED (checked in GHL)

| Item | GHL status | Details |
|---|---|---|
| **Blast A**, "AP LITM \| Blast A \| Non-buyers \| Lost in the Movie gift" (`6afc0beb0b0e27b63a913859`) | **SCHEDULED** | From Rameen Zereh `rameen@support.mindmatterspirituality.com`, reply-to `rameen@mindmatterspirituality.com`. Subject: "A short book for people who did everything right". Logged send time: **Wed 2026-11-18, 8:30 AM PT** (see note below). |
| **11 email templates** ("AP LITM \| ...") | **Created** | blast-a, blast-b, blast-c, plus nurture d00, d01, d03, d05, d08, d12, d16 and d21. Every ID in the log matches GHL. |

**Blast A audience, re-checked today:**
- The logged segment rules still match **9 contacts**. That count is before GHL drops unsubscribed, do-not-disturb and invalid addresses.
- The rules exclude buyer-book, book-buyer, buyer-course, ap-enrolled and pc-enrolled. They also exclude **crisis-escalation, do-not-sell and ccpa-delete-request**.
- **0 contacts** in the account carry any of those 3 suppression tags today, so none of them can get the email.

**What I could not check through the API:**
- GHL's API shows Blast A as "scheduled" but does not return the **send time** or the **saved audience**. The 8:30 AM PT time and the segment come from the agent's log.
- **Open the campaign in the GHL app and look at both** before 8:30 AM tomorrow.

---

## What is NOT live

**Social media: 0 of 77 posts are in GHL**
- I listed every Social Planner post from Nov 1, 2026 to Jan 31, 2027 and found **0**. Nothing was posted, scheduled or saved as a draft.
- Why: you declined the agent's first GHL call in that step, so it stopped. The go-ahead to publish came from the automation script, not from you.
- The 77 posts are ready in `social/calendar.md` and `social/calendar.json`:

| Platform | Posts | Planned window (PT) |
|---|---|---|
| Instagram @rzereh | **30** | Nov 17, 6:15 PM to Dec 16, 6:30 PM |
| Facebook "Awakening project" | **30** | Nov 17, 7:30 PM to Dec 16, 7:30 AM |
| TikTok "Rameen Zereh Transcendence" | **17** | Nov 17, 6:45 PM to Dec 15, 5:30 PM |

- **Five captions spot-checked** (IG-01, IG-19, FB-06, FB-23, TT-11): none has an em dash, and every one ends with a "link in bio" or site call to action. The two Facebook posts carry the full UTM link. The full calendar file has no em dashes.
- The Nov 17 evening posts are now past or close to it, so the calendar needs new dates before anything is scheduled.

**Blasts B and C are paused, not drafts**
- Blast B, book buyers to the course (`6afc0bee975818c3a1f28be3`): GHL status **paused**. The audience has 0 contacts.
- Blast C, course buyers to Certified Practitioner (`6afc0bf25973f95b07c84c80`): GHL status **paused**. The audience has 0 contacts once current practitioners are left out.
- The log calls them "validated drafts", but GHL shows **paused**. Neither will send unless someone resumes or reschedules it.

---

## What failed or was skipped

- **All 77 social posts:** never attempted (see above).
- **Scheduling Blasts B and C:** GHL refused with "No records were found", because both audiences are empty.
- **A/B subject tests:** skipped. GHL needs at least 10 contacts per version, and Blast A has 9. The "B" subject lines are saved in `emails/README.md`.
- **Workflows and forms:** GHL's API is locked for this account (403 WORKFLOW_API_NOT_ENABLED_FOR_LOCATION). Forms can't be created through the API either. Both have to be built by hand.
- **Test emails:** the log says 3 test sends (Blasts A, B and C) went to `rzereh@yahoo.com`. GHL only confirms it accepted them, not that they arrived. Check your inbox.

---

## What YOU do next, in order

1. **Tonight or by 8:15 AM tomorrow: open the 3 test emails in rzereh@yahoo.com.** They have "[TEST A]", "[TEST B]" or "[TEST C]" in the subject. Read them on your phone, and click every link plus the **Unsubscribe** link. If they aren't in your inbox, look in spam.
2. **Before 8:30 AM: decide on Blast A.**
   - **Check:** Marketing > Emails > Campaigns > "AP LITM | Blast A". Confirm the send time is Nov 18, 8:30 AM PT and see who is on the list. Most of the 9 are internal addresses.
   - **Timing conflict:** the email plan had this blast on **Tue Nov 24, 6:30 AM PT**, after the Nov 22 cart close. Nov 18 is also your masterclass day (4 PM PT).
   - **To stop it:** open the campaign and click **Pause**. Pause is reversible, and you can reschedule later. **Cancel** ends it for good.
3. **Approve or reject the social calendar.** Read `social/calendar.md`. Before anything is scheduled:
   - Look at raw clips V7 to V10, which nobody has reviewed yet.
   - Trim the Day 3, 4 and 5 lesson videos.
   - Note that the Sacred Pause video is landscape (16:9), which fits Reels and TikTok poorly.
   - Confirm the $297 course is still open after Nov 22. If not, posts IG-08/16/22/29, FB-08/16/22/29 and TT-05/13/17 need waitlist wording.
   - The safest route is to load all the posts as **drafts** in Social Planner, review them there, then schedule.
4. **Replace the free book PDF.** Go to Media Storage, open `lost-in-the-movie-free-ebook.pdf` and use **Replace**. The hosted copy (115 KB) is not the final book (370 KB). Replacing it keeps the same link.
5. **Work through the build sheet**, `02-ghl-build-sheet.md`:
   - **Section 1:** build the form "AP | Lost in the Movie Opt-in" and swap it into the home page (about 15 minutes).
   - **Section 3:** build workflow **W-LITM-NURTURE**, which sends the 8 nurture emails over 21 days. **Every email step gets the safety gate** (crisis-escalation, do-not-sell, ccpa-delete-request). Then add "Remove from workflow" to the W5 crisis workflow.
   - **Section 5:** run the 15-minute QA checklist, then publish.
   - **Section 2:** the comment and DM keyword workflows are **drafts only**. They break the "no automated DMs" rule, so leave them off unless you approve them in writing.
6. **Send the agency request**, build sheet section 4: ask them to turn on the **Workflows API and Forms API** for `BLgbsDtEX0NeeOZQXJPD` only. Once that's on, future changes can be automated.
7. **Confirm the Practitioner terms.** The partner page and checkout must show **$497 upfront plus $97/month starting on day 30, renewing automatically until you cancel**, and how to cancel. They must make no income promises. This has to match email D21, Blast C and posts IG-19/FB-19.
8. **Keep SMS off** until A2P 10DLC is approved (build sheet section 6). Email is the only channel.

---

## Weekly scorecard (check every Monday)

| KPI | Where to look in GHL | Why it matters |
|---|---|---|
| **1. Social opt-ins:** new contacts tagged `source-social-media` (and `lm-lost-in-movie`) | Contacts > filter by tag, date added = last 7 days | Shows whether the social posts bring readers |
| **2. Course sales:** new `buyer-course` / `ap-enrolled` tags, or $297 orders | Payments > Transactions, or Contacts > tag filter | Shows whether readers move to the course |
| **3. Practitioner applications:** new `partner-applicant` tags (and `partner - certified practitioner`) | Contacts > tag filter, last 7 days | Shows whether the top of the ladder fills |

Write the three numbers down each week. Nothing is measured until the opt-in form and the nurture workflow (steps 5 and 6) are live.

---

## Compliance status (from `03-compliance-review.md`)

- **Social:** 77 posts reviewed and 37 fixes made. They have no em dashes, no income figures and no cure claims, and they carry the crisis lines on the hard-night posts. Nothing was blocked.
- **Email:** 11 emails reviewed and 6 fixed. **All 11** have the Oakland address, the `{{unsubscribe_link}}` and the crisis lines 988 / 116 123 / findahelpline.com, and none has an em dash. I re-checked this in the files today.
- **Still on you:** confirm the Practitioner cancellation terms, confirm the unsubscribe link works in a real test send, and swap in the final PDF.

---

## Files

- `00-book-brief-lost-in-the-movie.md`: source of truth for the avatar and voice
- `01-audience-research.md`: audience and hashtags
- `02-ghl-build-sheet.md`: step-by-step UI build, agency request, QA, SMS later
- `03-compliance-review.md`: what was checked and fixed
- `04-publish-log-email.md` and `04-publish-log-social.md`: what the agents did
- `emails/`: the 11 email HTML files and the B subject lines
- `social/`: the 77-post calendar
