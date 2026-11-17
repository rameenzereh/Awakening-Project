# Email ladder: Lost in the Movie campaign

Copy only. Nothing has been created in GHL. Each file is self-contained, inline-styled HTML (600px max, mobile-friendly, one primary button, signed "Rameen").

## Index

| id | send | segment | purpose | subject A | subject B | preheader |
|---|---|---|---|---|---|---|
| `blast-a-nonbuyers` | Blast: Tue 2026-11-24, 6:30 AM PT (after the Nov 22 cart close) | A: never bought (custom_segment, exclusions applied) | Segmented blast to non-buyers: gift Lost in the Movie, soft mention of Remembering Your True Self. | A short book for people who did everything right | You're not broken. You're lost in a movie. | It's free, it's short, and it doesn't ask you to believe anything. |
| `blast-b-bookbuyers` | Blast: Tue 2026-11-24, 6:30 AM PT (segment currently ~0 contacts; keep ready) | B: book buyers without the course (buyer-book / book-buyer, not buyer-course / ap-enrolled / pc-enrolled) | Segmented blast to book buyers: invite to the $297 Awakening Your True Self course. | You read the book. Want company for the next part? | The part I couldn't put in a book | Awakening Your True Self: 12 weeks, one payment, and a room of people looking at the same thing. |
| `blast-c-practitioner` | Blast: Tue 2026-11-24, 6:30 AM PT | C: course buyers / enrolled / graduates (buyer-course, ap-enrolled, pc-enrolled, graduate, pc-course-completed) | Segmented blast to course buyers: honest Certified Practitioner invitation (no earnings figures, auto-renew disclosed, free Ambassador option). | Can I ask you something about what's next? | An invitation, with the honest fine print | For people who've walked the course and want to share this work. No promises, no hype. |
| `nurture-d00-delivery` | Day 0 (immediately on opt-in) | New social opt-ins (source-social-media / ap-lead), exclude crisis-escalation, do-not-sell, ccpa-delete-request | Deliver the Lost in the Movie PDF, introduce Rameen, set expectations, crisis resources. | Here's your book (Lost in the Movie) | Your copy of Lost in the Movie is inside | Read it in one sitting. Then notice one thing. |
| `nurture-d01-balcony` | Day 1 | New social opt-ins | Relationship + first noticing: the balcony. CTA to the Balcony Breath page. | Something in you was watching | The balcony (a two-minute idea) | When a reaction is bigger than its cause, a movie just started. |
| `nurture-d03-sacred-pause` | Day 3 | New social opt-ins | Practice: the Sacred Pause, with the hosted Sacred Pause video. | One breath, before you answer | The space between the thing and your reaction | The Sacred Pause takes about as long as a sip of coffee. |
| `nurture-d05-remembering` | Day 5 | New social opt-ins (skip if tagged buyer-book / book-buyer) | Story (the costume, his wife) + paid book: Remembering Your True Self, Unconditional Happiness as a secondary link. | The person you became to survive | What the free book couldn't fit | Where the diagnosis becomes a map, and the map becomes a move. |
| `nurture-d08-course-intro` | Day 8 | New social opt-ins (skip if tagged buyer-course / ap-enrolled / pc-enrolled) | Introduce the $297 Awakening Your True Self course: the withheld 'move', honest framing. | 4:40 on a Tuesday | The move the book doesn't teach | Why I built a course instead of writing another book. |
| `nurture-d12-course-company` | Day 12 | New social opt-ins (skip course buyers) | Course, angle: loneliness movie and doing this with company. Non-clinical, crisis resources in P.S. | Who could you call at 2am? | Doing this alone is the hard way | A quiet word about company, and why it matters more than technique. |
| `nurture-d16-course-honest` | Day 16 | New social opt-ins (skip course buyers) | Course, angle: honest reasons not to join + the 'easier or harder to be around' measure. | The honest reasons not to take my course | Easier or harder to be around? | A few reasons to wait, and one question that tells you if you're ready. |
| `nurture-d21-practitioner` | Day 21 | Engaged readers (opened/clicked 3+ nurture emails) and course buyers (buyer-course, ap-enrolled); others may skip | Final email: invite engaged readers and course buyers toward the Ambassador (free) or Certified Practitioner path. Honest, no earnings figures, auto-renew disclosed. | For the ones who keep telling friends about the movie | What happens when you start sharing this | An honest look at sharing this work, fine print included. |

## Merge tags used
- Greeting: `{{default contact.first_name "friend"}}` (Handlebars, already used in existing templates). Do not use Liquid filters, which block the send.
- Unsubscribe: `<a href="{{unsubscribe_link}}">Unsubscribe</a>`. Verify in a test send that GHL renders `{{unsubscribe_link}}` as a bare URL. If it renders a full anchor tag, replace the anchor with the bare merge tag.
- Physical address is written out literally (1408 11th Ave, Oakland, CA 94606) so the footer never depends on a custom value resolving.

## Links used (all from the verified GHL inventory)
- Lost in the Movie PDF: https://files.leadconnectorhq.com/file/6ae4dda209f888e023f6d9e0/lost-in-the-movie-free-ebook.pdf
- Remembering Your True Self page (step path, not yet loaded in a browser): https://mindmatterspirituality.com/remembering-your-true-self
- Shop books: https://mindmatterspirituality.com/shop-books
- Course checkout ($297): https://mindmatterspirituality.com/awakening-your-true-self-checkout
- Partner programs (Practitioner/Ambassador details): https://mindmatterspirituality.com/partner-programs
- Balcony Breath (opt-in page; existing leads re-entering is harmless): https://partner.mindmatterspirituality.com/balcony-breath
- Sacred Pause video (hosted MP4): https://files.leadconnectorhq.com/file/6ad7bb31f9a985d42c42dfb9/the-sacred-pause-video.mp4
- Privacy policy: https://mindmatterspirituality.com/privacy-policy
- No link was missing, so no home-page fallback was needed.

## Flags for Rameen before sending
1. **PDF version.** The hosted PDF (115 KB, Oct 30) is not the final 370 KB book. Use "Replace" on that file in GHL Media Storage so this URL serves the final version.
2. **Sender.** Only support.mindmatterspirituality.com is a verified sending domain. Run validate-email-campaign. If rameen@mindmatterspirituality.com is flagged, send from an address on support.mindmatterspirituality.com and set reply-to rameen@mindmatterspirituality.com. Several emails ask people to hit reply, so reply-to must reach a monitored inbox.
3. **Timing.** A campaign is live now (masterclass Nov 18, cart close Sun Nov 22 midnight PT). Suggested blast send is Tue 2026-11-24, 6:30 AM PT, before Thanksgiving week gets busy. No fake deadlines are used anywhere.
4. **A/B testing.** Subject B is written for every email, but GHL requires 10+ contacts per variation, so a true A/B split is not possible with this list. Use subject B as the resend-to-unopened subject (resend.enabled, waitHours 48) or for future sends.
5. **Practitioner terms.** Copy states $497 + $97/mo from day 30, auto-renewing "until you cancel", 90%/50% commission rates and the free 30% Ambassador tier, with no earnings figures and an explicit "it's possible to earn nothing" disclaimer. Confirm the cancellation terms match the checkout page before sending, and have someone confirm the commission description matches the partner agreement.
6. **Nurture wiring.** Workflows are locked via API. A human must build the workflow in the GHL UI: trigger on the home-page form (gORzh2r3ipTiJvDVHjZv) or a source-social-media / ap-lead tag, wait steps for days 0, 1, 3, 5, 8, 12, 16, 21, exit or skip on buyer tags as noted per email, and always exclude crisis-escalation, do-not-sell and ccpa-delete-request.
7. **Day 21 audience.** Send to course buyers and engaged readers. If engagement filters are not practical in the workflow, it is written to be safe for everyone ("If it isn't, you can skip it").
8. **Crisis line.** Every footer includes 988 / 116 123 / findahelpline.com. Day 0 and Day 12 repeat it in the P.S.
9. Remembering Your True Self price is not stated anywhere because it was not verified.
