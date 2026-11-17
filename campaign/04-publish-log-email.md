# Publish log: email (Lost in the Movie campaign)

Run: 2026-11-17 (America/Los_Angeles). Location: Awakening Project `BLgbsDtEX0NeeOZQXJPD`. Acting user: Rameen `Ei4ZZtDPSYp7EpUjJIuQ`.

## Sender decision
- `list-sending-domains` returned only `support.mindmatterspirituality.com` (location_owned, smtpMode false).
- So every template and campaign sends **from `rameen@support.mindmatterspirituality.com`** (display name "Rameen Zereh"). Scheduled campaigns set **reply-to `rameen@mindmatterspirituality.com`**.
- `validate-email-campaign` on all 3 blasts: `ready: true`, no errors, and no SENDER_DOMAIN_NOT_VERIFIED warning. The only "unresolved" merge fields are `{{default contact.first_name "friend"}}` and `{{unsubscribe_link}}`, which GHL fills in at send.

## 1. Email templates (11 of 11 created)
Each template is html editor, uses the from-address above, carries subject A and the preheader as preview text, and has the CAN-SPAM footer (1408 11th Ave, Oakland, CA 94606, plus `{{unsubscribe_link}}`) and the crisis resources. There are no em dashes. Idempotency key: `litm-tpl-<id>`.

| id | template id | subject (A) |
|---|---|---|
| blast-a-nonbuyers | 6afc0b1fa094ee50c89df533 | A short book for people who did everything right |
| blast-b-bookbuyers | 6afc0b3697e6ce5fa4737e29 | You read the book. Want company for the next part? |
| blast-c-practitioner | 6afc0b475973f95b07c83bf0 | Can I ask you something about what's next? |
| nurture-d00-delivery | 6afc0b5e4e81b2ad9a0f0178 | Here's your book (Lost in the Movie) |
| nurture-d01-balcony | 6afc0b6e0b0e27b63a912b04 | Something in you was watching |
| nurture-d03-sacred-pause | 6afc0b81cc2a4ec04dcbd6e4 | One breath, before you answer |
| nurture-d05-remembering | 6afc0b98cc2a4ec04dcbd8e7 | The person you became to survive |
| nurture-d08-course-intro | 6afc0ba94e81b2ad9a0f07d2 | 4:40 on a Tuesday |
| nurture-d12-course-company | 6afc0bba4e81b2ad9a0f09a6 | Who could you call at 2am? |
| nurture-d16-course-honest | 6afc0bd197e6ce5fa4738d0f | The honest reasons not to take my course |
| nurture-d21-practitioner | 6afc0be2cc2a4ec04dcbdf12 | For the ones who keep telling friends about the movie |

The nurture templates wait for the future workflow. The Workflow API is locked, so a person has to build the workflow in the UI. Subject B lines for the nurture emails are in `emails/README.md`.

## 2. Blast campaigns
Each campaign was created from its template, then subject, sender and preview text were set and the campaign was validated. The send time is **2026-11-18 08:30 AM America/Los_Angeles**, as the task's step 2 instructed. Recipients use `custom_segment` tag rows with negate rows for the exclusions. GHL skips DND, unsubscribed and invalid emails automatically at send.

| campaign | id | audience (estimate-recipients) | status |
|---|---|---|---|
| AP LITM \| Blast A \| Non-buyers \| Lost in the Movie gift | 6afc0beb0b0e27b63a913859 | **9 contacts** (count before suppression) | **SCHEDULED** 2026-11-18 08:30 AM PT, freezeList true, click + UTM tracking, no resend (sourceId Ep9iPTfYOAYmHoVjOIXR) |
| AP LITM \| Blast B \| Book buyers \| Course invite | 6afc0bee975818c3a1f28be3 | **0 contacts** | Validated **DRAFT**. Schedule returned 400 "No records were found" because the segment is empty |
| AP LITM \| Blast C \| Course buyers \| Practitioner invite | 6afc0bf25973f95b07c84c80 | **0 contacts** (1 before excluding `partner - certified practitioner`) | Validated **DRAFT**. Same 400 |

### Segment rules used (tag ids)
- **A (scheduled):** NOT buyer-book `ebXgdkWUaYETaWNClJic`, AND NOT book-buyer `WR0jBinMZkg78Za2bh87`, AND NOT buyer-course `wim0eDx4XALFQUZhsPie`, AND NOT ap-enrolled `BM1KXXMMo9JwnPystGQW`, AND NOT pc-enrolled `whHr8CauzOBSlHjPkeRq`, AND NOT crisis-escalation `HKrdcdiqWwdEu1DdB4qP`, AND NOT do-not-sell `ZkekhIjjijJR32hwTTme`, AND NOT ccpa-delete-request `dI2U8LFB3JTqECyzvrBy`.
  - Membership payers were not excluded. That exclusion was optional in the inventory.
- **B (draft):** tag IN [buyer-book, book-buyer] AND NOT buyer-course, AND NOT ap-enrolled, AND NOT pc-enrolled, AND NOT the 3 exclusion tags.
- **C (draft):** tag IN [buyer-course, ap-enrolled, pc-enrolled, graduate `LDxDiUQW8LaHtuU60C23`, pc-course-completed `z333ZnO1Dfq8xp17c00W`] AND NOT the 3 exclusion tags AND NOT partner - certified practitioner `nx0d1Y3aA6X6HPZB8xZe`.

### To send B or C later (UI)
1. Open Marketing > Emails > Campaigns and pick the draft.
2. Click Send/Schedule and choose Recipients > Build segments.
3. Add the rows above: an "is" row for the include tags, then one "is not" row per exclusion tag.
4. Confirm the count is greater than 0, then schedule.

The API can also schedule them with the same `custom_segment` conditions once the segment has contacts.

### A/B subject test: not used
- The API supports it through `abTestConfig` `testType=subjectLine`, but each version needs at least 10 contacts in the test group.
- Blast A has 9 contacts, and B and C have 0, so the test would return 400. All campaigns send subject A.
- The B subjects are kept in `emails/README.md`. Once the list is about 40 or more, use them with abTestConfig, or as `resend.subject` for non-openers.

## 3. Test sends to rzereh@yahoo.com
`test-email-campaign` exists. All 3 test sends were accepted (GHL does not confirm delivery). Merge fields are filled with sample data.
- Blast A, subject "[TEST A] A short book for people who did everything right"
- Blast B, subject "[TEST B] You read the book. Want company for the next part?"
- Blast C, subject "[TEST C] Can I ask you something about what's next?"

The tests used 3 of the 20 test sends allowed per hour.

## Flags for Rameen
- **Timing conflict:** the task said to schedule the blast for 2026-11-18 08:30 PT, but the email brief planned it for Tue 2026-11-24 6:30 AM PT, after the Nov 22 cart close. Nov 18 is also the masterclass day (4 PM PT). If you'd rather wait, pause Blast A (Marketing > Emails > Campaigns > Pause) and reschedule it for Nov 24.
- **Who Blast A reaches:** most of its 9 possible recipients are internal (your own addresses, staff, family, a test contact). Check the contact list before 8:30 AM tomorrow if you don't want them to receive it.
- Nothing was sent immediately to real contacts. No excluded tag is in any audience.
