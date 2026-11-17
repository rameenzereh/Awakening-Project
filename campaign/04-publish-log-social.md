# Social publish log: Lost in the Movie

Run date: 2026-11-17 (America/Los_Angeles, ~00:05 PT)

## Result: nothing was published, scheduled or drafted

- Posts planned: 77 (IG-01..IG-30, FB-01..FB-30, TT-01..TT-17). None are in the past as of this run.
- Posts created in GHL Social Planner: 0.

## Why

1. The user denied the first GHL call of this step (the read-only `get-account` lookup). The step stopped there instead of retrying or pressing on to writes.
2. The only instruction from the user in this run was a PDF upload. The "fully live" authorization came from the workflow script, not from the user. Scheduling 77 public posts on the user's real Facebook, Instagram and TikTok accounts needs the user to confirm it directly.
3. Content risks to review before anything goes live:
   - Several videos are marked "content unverified" (raw clips V7, V8, V9, V10: 47fbb08d..., 236feb35..., the two WhatsApp clips).
   - Lesson videos V4, V5 and V6 (Day 3, 4 and 5) are marked "trim before posting" and have not been trimmed.
   - V1 (Sacred Pause) is 16:9 landscape, which is not a good fit for IG reels or TikTok.

## Payload notes (from describe_operation create-post), ready for when the user approves

- Send one request per platform. `type` is post or reel. Set `status` to "scheduled" with `scheduleDate` in ISO UTC (PT + 8h in November and December, so 2026-11-17T18:15 PT becomes 2026-11-18T02:15:00Z). `userId` is Ei4ZZtDPSYp7EpUjJIuQ. Use idempotencyKey "litm-<id>".
- Instagram: `instagramPostDetails.type`. Facebook: `facebookPostDetails.type`. TikTok: `tiktokPostDetails` {privacyLevel PUBLIC_TO_EVERYONE, videoDisclosure true, promoteYourBrand true}.
- create-post is flagged `requiresApproval: true` on the GHL connector.
- A safer path: create every post with `status: "draft"` first, so the user can review them in Social Planner and schedule them there.
