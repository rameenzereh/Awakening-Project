# GHL Inventory Scout: Awakening Project (BLgbsDtEX0NeeOZQXJPD)

Read-only scan, 2026-11-17. Nothing was created or changed.

Note: the live site (mindmatterspirituality.com) could not be fetched from this sandbox (the proxy returned 403). So every URL below comes from GHL data: email template HTML, custom values, funnel/website step paths, trigger links and site tracking code. Paths taken from website steps are marked "(step path)". They are real published steps in GHL, but nobody has loaded them in a browser yet.

## 1. Verified URLs

### Course: Awakening Your True Self ($297)
- Checkout/sales page: https://mindmatterspirituality.com/awakening-your-true-self-checkout
  - Found in custom value `{{custom_values.course_checkout_link}}`, in the "Awakening Member Welcome" template, and in the site nav script (the "Explore Courses" item points here).
- Course portal/login: https://learn.mindmatterspirituality.com/ (login: https://learn.mindmatterspirituality.com/login)
- Seeker welcome page with the course invitation (OTO): https://mindmatterspirituality.com/seeker-welcome (step path)

### Books
- All-books page: https://mindmatterspirituality.com/shop-books (in the Member Welcome template and the site nav)
- Remembering Your True Self, sales page: https://mindmatterspirituality.com/remembering-your-true-self (step path)
- The purchase links in the site nav are GHL form widgets, not Amazon or IngramSpark:
  - Remembering Your True Self (eBook): https://api.leadconnectorhq.com/widget/form/rRbEU1tZ4GStM9oB1AbY
  - Unconditional Happiness (eBook): https://api.leadconnectorhq.com/widget/form/TiA1pBR6QXGlaOA3rb3G
  - Unconditional Happiness (Hardcover): https://api.leadconnectorhq.com/widget/form/imImP9fClTk3IdBI411m
  - Unconditional Happiness (Paperback, the script's default "IS" link): https://api.leadconnectorhq.com/widget/form/qiBPsw8KKRdwn7hNdcCl
- Talk2MyBook (AI chat with the book): https://awakening.talk2mybook.com/
- No Amazon or IngramSpark URL appeared in any template, custom value or trigger link. The `clicked-buy-book` tag description mentions an "IngramSpark trigger link", but no such trigger link exists yet. The custom value `book_offer_link` points to https://partner.mindmatterspirituality.com/balcony-breath-thank-you, which is not a book store.

### Lead magnets and opt-in pages
- Lost in the Movie welcome/delivery page: https://partner.mindmatterspirituality.com/free-ebook-welcome (in 3 templates; it is a step in the Sacred Pause Funnel)
- Lost in the Movie PDF (in a template): https://assets.cdn.filesafe.space/BLgbsDtEX0NeeOZQXJPD/media/6ae4dda209f888e023f6d9e0.pdf (the same file as the files.leadconnectorhq.com URL in the brief)
- Sacred Pause opt-in: https://partner.mindmatterspirituality.com/sacred-pause (templates link to `#watch`)
- Balcony Breath opt-in: https://partner.mindmatterspirituality.com/balcony-breath
- Masterclass registration: https://partner.mindmatterspirituality.com/masterclass (custom value)
- Social link-in-bio pages already exist on the website (step paths):
  - https://mindmatterspirituality.com/go/instagram
  - https://mindmatterspirituality.com/go/tiktok
  - https://mindmatterspirituality.com/go/youtube
  - These may be better link-in-bio targets than the home page. Check in a browser what each one shows.
- Sign-up pages: https://mindmatterspirituality.com/sign-up and /sign-up-4059 (step paths)
- Home page: https://mindmatterspirituality.com/ (website step /home-590673)

### Partner / Practitioner
- Partner programs page: https://mindmatterspirituality.com/partner-programs (step path)
- Practitioner checkout: https://mindmatterspirituality.com/practitioner-checkout (step path, "Practitioner-order form")
- Practitioner welcome: https://mindmatterspirituality.com/practitioner-welcome; Ambassador welcome: /ambassador-welcome (step paths)
- Contacts carry the source "Partner Application - Practitioner", so an application form exists, but its public URL did not appear in any data I read. The partner-programs page is the safe CTA.
- Booking calendar: https://api.leadconnectorhq.com/widget/bookings/awakening-project-calendar

### Pricing, memberships, AI clone
- Pricing: https://mindmatterspirituality.com/pricing#plans (in templates)
- Seeker $1 trial ($1 first month, then $9.99/mo, per the funnel bridge script): https://mindmatterspirituality.com/seeker-trial (in 10 templates)
- Membership order forms (step paths): /seeker-order-form, /awaken-order-form (Awakener), /advanced-order-form
- AI Clone checkout: https://mindmatterspirituality.com/ai-clone-checkout (step path)
- AI Clone session: /rameen-ai-clone-session redirects to https://learn.mindmatterspirituality.com/courses/products/de28a90d-433c-4a76-a238-f5efb308bf58 (behind login)
- Awakening AI Guide: https://mindmatterspirituality.com/awakening-ai-guide
- Member welcome: https://mindmatterspirituality.com/member-welcome
- Community: https://blgbsdtex0neeozqxjpd.app.clientclub.net/
- Videos: https://mindmatterspirituality.com/videos (masterclass replay), https://mindmatterspirituality.com/video-vault
- Privacy: https://mindmatterspirituality.com/privacy-policy; Terms: https://mindmatterspirituality.com/terms
- Donate: https://mindmatterspirituality.com/donate
- Social profiles (trigger links): instagram.com/rayzereh, tiktok.com/@rzereh, youtube.com/@awakeningproject_1

## 2. Sender identity
- Existing campaigns use From name "Rameen Zereh" and From email rameen@mindmatterspirituality.com.
- WARNING: the only verified sending domain (`list-sending-domains`) is **support.mindmatterspirituality.com** (location_owned, smtpMode=false). The root domain used by the existing drafts is not on that list. Run `validate-email-campaign` before scheduling. If it flags the From address, use an address on support.mindmatterspirituality.com and set replyTo to rameen@mindmatterspirituality.com.
- Footer pattern in the current drafts: "Contemplative education for adults. Not therapy, diagnosis or financial advice. The Awakening Project · {{custom_values.pc_business_mailing_address}} · mindmatterspirituality.com". The custom value resolves to "1408 11th Ave, Oakland CA 94606".
- The existing templates and drafts have NO unsubscribe merge tag. New emails must add one, for example `{{unsubscribe_link}}` (GHL's email unsubscribe merge field). Check it with validate-email-campaign and a test send.
- Crisis line already used in the free-ebook template: "If you are in crisis, call or text 988 (US & Canada) or call 911." The brief also requires 116 123 and findahelpline.com.
- userId for API writes: Rameen Zereh = `Ei4ZZtDPSYp7EpUjJIuQ` (account admin). The other user, Nadia Hameed = `kEGf2d7XQZH1N8QSQeTT`, is staff.
- companyId 2CpYDa8JMybC92bNnALT. Location timezone America/Los_Angeles.

## 3. Existing email assets
- 30 root templates plus folders: "AWK Value Ladder Funnel" (9 templates), "PC - Awakening as Pure Divine Awareness (Content Library)" (233 items, not read).
- Most relevant to this campaign:
  - **AWK Free eBook - Your free book is ready (Lost in the Movie)**, id 6aeeb6a54a5dd7483690b3e8: an existing delivery email. It links to /free-ebook-welcome and contains an em dash ("Read it the way you would watch a sunrise — not to get..."), which breaks the voice rules. Fix it before reuse.
  - SOS Day 0-4 (value-ladder nurture). Day 4 is "Why I charge $9.99 and not $0" (Seeker).
  - Seeker Day 21, Win-back, Dunning
  - AWK Daily 01-10, Sacred Pause Day 1-5, Masterclass 1-7, Member Welcome, Partner Welcome, Newsletter welcome, Purchase Receipt, Courses - Offer Access
- Campaigns: 3 drafts, none sent: "Watch Series 1/2/3" (ids 6afb5c269c1910a2122a6936, 6afb5c57f303b8cc007ec6fd, 6afb5c59b5476f5f39c0d887).
- Template merge fields in use: {{contact.first_name}}, {{default contact.first_name "friend"}}, {{custom_values.course_checkout_link}}, masterclass_* values, {{membership_contact.login_url}}.
- Custom values worth reusing: course_checkout_link, cart_close_date ("Sunday, November 22 at midnight Pacific"), masterclass_date ("Wednesday, November 18 at 4:00 PM Pacific"), masterclass_live_link, masterclass_replay_link, balcony_breath_link, pc_business_mailing_address.
- Note: the A2P custom values say "Automotive" and "OAKLAND Hi Fidelity LLC". This confirms SMS/A2P is not set up for this brand.

## 4. Contacts and segments
**The location has only 14 contacts in total.** 10 have an email address, and 4 do not. No contact has DND set. No contact has crisis-escalation, do-not-sell or ccpa-delete-request.

Several of the 10 emailable contacts are internal: Rameen's own addresses (rameen@, rzereh@gmail, rzereh@yahoo, rzwithpace@yahoo, rzereh+pctest), the staff user (nadiahameed296), and what look like family addresses (two "gitti..." yahoo addresses). Real outside leads number about 2: one with source "contact information" and tags src-ebook and source-social-media, and one membership sign-up.

| Segment | Rule | Count (all) | With email |
|---|---|---|---|
| A: never bought | NOT any of buyer-book, book-buyer, buyer-course, ap-enrolled, pc-enrolled | 13 | 9 (most internal) |
| B: book buyer, no course | (buyer-book OR book-buyer) AND NOT (buyer-course, ap-enrolled, pc-enrolled) | 0 | 0 |
| C: course buyer / enrolled / graduate | buyer-course OR ap-enrolled OR pc-enrolled OR graduate OR pc-course-completed | 1 (test contact) | 1 |
| Exclusions | crisis-escalation, do-not-sell, ccpa-delete-request, DND/unsubscribed | 0 | 0 |

Caveat: some Segment A contacts hold membership tags (prod-seeker, prod-advanced, awakening member, ai-clone-49), so they may have paid for a membership. To treat "never bought" strictly, also exclude prod-seeker, prod-awakener, prod-advanced, ai-clone-49, awakening member and awakening project client.

What this means: a segmented blast today reaches almost no real people. The campaign's value lies in the social opt-in funnel and in the welcome/nurture email for new leads. Since workflows are locked, new leads would get recurring email campaigns or a manual send. Put internal addresses on the test-send list, and exclude them from (or accept them in) live blasts.

Tag IDs for targeting:
- buyer-book ebXgdkWUaYETaWNClJic; book-buyer WR0jBinMZkg78Za2bh87; buyer-course wim0eDx4XALFQUZhsPie; ap-enrolled BM1KXXMMo9JwnPystGQW; pc-enrolled whHr8CauzOBSlHjPkeRq; graduate LDxDiUQW8LaHtuU60C23; pc-course-completed z333ZnO1Dfq8xp17c00W
- crisis-escalation HKrdcdiqWwdEu1DdB4qP; do-not-sell ZkekhIjjijJR32hwTTme; ccpa-delete-request dI2U8LFB3JTqECyzvrBy; test-contact 5GnYkYUX0uz5iYKTWsXS
- ap-lead 3yyDJ64aIPs1xCfqLjC3; source-social-media F8ae1W8Pk4ttsK00Obvp; src-ebook znMpxDhKkjg8iEUfaIPR; ap-book 4C2sXOp7L0XyjIRZQ0GG; ap-course-interest 2vKaexyELrLWBaB5fOab; partner-applicant bkcY0A9TQFFmWWvTvhUx; partner - certified practitioner nx0d1Y3aA6X6HPZB8xZe; new lead WSndLD3236yyjL0AlwAw; warm lead f5ZsPv2ndAq1B2PW3S2i; nurture-6mo WUiwwznr92hW42mdDZII; stalled Rn5CXm0ANKZ74sgtDXII; stalled-14 msV2JQd9PmnGYS96kYTR
- prod-seeker o1gkRogXK8HGf4SRSQWq; prod-awakener n6d4gtThnV4iDw2QPxV2; prod-advanced bzUvMIKHEVulmpPLAh48; ai-clone-49 vGqO8EbuSY9j9TJWcPnd; awakening member awjyGMoMOsNZJvEt3SIi

## 5. Email campaign API (how sending works)
1. `create-email-campaign` creates a draft. It needs `name`, `editorType` (html|builder|text), `timeZone` and `userId`. Optional: `templateId`, `editorContent` (HTML string), `parentFolderId`. Merge fields use Handlebars syntax, like `{{default contact.first_name "friend"}}`. Liquid filters block the send.
2. `update-email-campaign` sets content, subject and sender. `get-email-campaign?includeContent=true` reads them back.
3. `validate-email-campaign` runs a pre-send check (from-domain, merge tags, footer). `estimate-recipients` returns the audience count before suppression. You must estimate and confirm the count before scheduling a tag or segment audience.
4. `test-email-campaign` does exist. It sends to 1-5 addresses, takes an optional `variationIndex`, and shares a limit of 20 tests per location per hour with `test-email-template`. Merge fields get sample data. It needs `userId` and an Idempotency-Key.
5. `schedule-campaign` needs `scheduleType` (immediate|scheduled|smart_send|batch|rss), `timeZone`, `userId`, `emailMeta` {subject, fromName, fromEmail, replyToAddress, previewText} and `recipients`. `scheduleConfig.sendAt` uses the format "YYYY-MM-DD hh:mm A" in that timeZone. Options: tracking {clickTracking, utmTracking} and resend-to-unopened.
   - **Recipient targeting** goes through `recipients.type`:
     - `contact` takes contactIds.
     - `tag` takes tagIds and includes ANY of them.
     - `segment` takes prebuilt engagement segments.
     - `smart_list` takes smartListIds.
     - `custom_segment` takes `conditions[]` rows `{kind: tag|contact|smart_list|segment, values:[ids], negate: bool, join: and|or}`. This is the way to do include/exclude logic. Example for Segment A: one row for kind tag, values [buyer-book, book-buyer, buyer-course, ap-enrolled, pc-enrolled], negate true. Then join "and" with a row for kind tag, values [crisis-escalation, do-not-sell, ccpa-delete-request], negate true. Confirm with estimate-recipients.
     - `all` sends to everyone.
     - `freezeList` defaults to true.
     - DND, unsubscribed and invalid emails are skipped automatically at send.
   - A/B testing uses `upsert-campaign-variation` (index 1 = B, created in order, campaign must be draft) plus `abTestConfig` on schedule. Each version needs at least 10 contacts, so A/B testing is not possible with this list size.
6. `create-email-template` makes a reusable template: name, editorType, editorContent, subjectLine, fromName, fromEmail, previewText, parentFolderId. A campaign can start from it via templateId. `test-email-template` exists as well.
7. All writes need `idempotencyKey` and are approval-gated.

## 6. Social Planner (create-post)
Accounts (`get-account`), all active and none expired:
- Facebook page "Awakening project": `6afadb43492280859e1e88ae_BLgbsDtEX0NeeOZQXJPD_1377974395398329_page` (expires 2027-01-15)
- Instagram @rzereh: `6aa45cdfe370561077565690_BLgbsDtEX0NeeOZQXJPD_17841477090442979` (token **expires 2026-12-28**. Reconnect before then, or posts scheduled after that date will fail.)
- TikTok "Rameen Zereh Transcendence" (@rzereh, business): `6aa4695fc074cd0183dbae85_BLgbsDtEX0NeeOZQXJPD_0007bfVcgZmIeraZKqTC1xNYQfGLNmxfSr_business` (expires 2027-09-11)

create-post body:
- `type` is required (post|story|reel).
- `accountIds[]`: one request makes one post with one caption shared by every account in the list. The caption is trimmed to the strictest limit among them (IG/TikTok 2,200; FB 63,206). Send one request per platform to keep platform-specific captions.
- `summary` holds the caption.
- `media[]` items are `{url (public https), type (image/jpeg|image/png|image/gif|video/mp4|video/mov|video/webm), caption?, thumbnail?}`.
- `status` is "scheduled" (requires scheduleDate) or "draft". Drafts skip validation.
- `scheduleDate` is ISO 8601 UTC, like "2026-11-20T17:00:00Z".
- `userId` is required for OAuth-channel non-draft posts (use Ei4ZZtDPSYp7EpUjJIuQ). `createdBy` is optional and needs a 24-hex ID.
- `followUpComment` is optional and supported on FB, IG and TikTok. On TikTok it only works when privacyLevel is PUBLIC_TO_EVERYONE.
- `tags[]` are social-planner tag IDs, not CRM tags.

Platform constraints:
- Instagram: media is required on every post. Max 30 hashtags, max 10 carousel items. Reels need exactly 1 video. Stories take no caption. Use `instagramPostDetails: {type: "post"|"reel"}`.
- TikTok: needs a video. Set `type: "reel"` with exactly 1 video/mp4 and `tiktokPostDetails: {privacyLevel: "PUBLIC_TO_EVERYONE", enableComment: true, enableDuet: false, enableStitch: false, videoDisclosure: false}`. Turn videoDisclosure on, with promoteYourBrand, for promotional content.
- Facebook: content or media. `facebookPostDetails: {type: "post"|"reel"}`, and reels need 1 video.
- Hosted videos usable as media (files.leadconnectorhq.com, from the media inventory):
  - The-Sacred-Pause-Video.mp4: https://files.leadconnectorhq.com/file/6ad7bb31f9a985d42c42dfb9/the-sacred-pause-video.mp4
  - Course welcome: https://files.leadconnectorhq.com/file/6ac97294bbad531ac861d018/awakening-your-true-self-course-welcome-with-captions.mp4
  - Remembering Your True Self intro: https://files.leadconnectorhq.com/file/6ac9728ccc7a5a2b73647e87/remembering-your-true-self-course-introduction-with-captions.mp4
  - Day 3/4/5 lessons and raw clips (WhatsApp 2026-10-08, two UUID-named MP4s). The aspect ratio is unknown; vertical 9:16 is preferred for TikTok/Reels.

## 7. Other notes
- Workflows are locked through the API, and forms cannot be created through the API. The home-page form "contact information" (gORzh2r3ipTiJvDVHjZv) is the interim opt-in. There is also a dedicated Lost in the Movie welcome page (/free-ebook-welcome) and a delivery template, which a human would have to wire to a form in the UI.
- The funnel thank-you pages inject a Seeker $1 bridge offer ($1 first month, then $9.99/mo, "Cancel anytime").
- The Watch Series drafts cite "$17.8 million" for an auction. That is a factual claim, not a testimonial.
