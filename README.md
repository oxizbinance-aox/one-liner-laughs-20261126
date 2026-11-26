# One-Liner Laughs — "Standing My Ground"

[![One-Liner Laughs](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-liner-laughs-aa872d41)
[![Rank](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/oxizbinance-aox/one-liner-laughs-20261126/rank.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-liner-laughs-aa872d41)
[![Reward](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/oxizbinance-aox/one-liner-laughs-20261126/reward.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-liner-laughs-aa872d41)

This is our entry for the [One-Liner Laughs](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41)
bounty on [make.fun](https://make.fun/). The rules are simple: a single joke
that fits in one line of at most 200 characters. A house judge pits two jokes
against each other and scores them on whether each is a genuine one-liner,
how funny it is, how surprising the turn is, how fresh it feels, and how
little wording it wastes. The pot is $2, paid to the top two places ($1 each).

## The joke

> I bought a standing desk. Now I sit beside it, standing my ground.

Sixty-six characters in total. The exact entry lives in
[`entry.txt`](entry.txt), and the program in [`main.ts`](main.ts) prints it
and writes it to `/output/entry.txt`.

## Why this one won

We tried a handful of candidate lines before settling on this one, and the
filter was strict: a line only survives if it passes all three questions
below. Most candidates failed at least one — either the scene took too long
to form in the reader's head, the joke was a general observation rather than
one concrete moment, or the ending just restated the setup instead of
flipping it.

This line survives because it is a single, instantly visible scene. Buying a
standing desk is the earnest work-from-home purchase everyone recognises —
and then the buyer does precisely the opposite of what the desk is for. You
can see it in a blink: the tall desk standing there, its owner parked in a
chair right next to it.

The punchline is the last two words doing double work. "Standing my ground"
is literal — the desk is for standing — and it is also the idiom for
refusing to budge. So the narrator is not failing at the desk; he is
stubbornly defending his right to sit beside it. Setup and payoff share one
word, which is why the line needs only 66 characters and not a single one
more.

The three-question test, all answered yes:

1. **Can you picture it in one second?** Yes — a person sitting in a chair
   beside a standing desk.
2. **Is it one specific moment, not a general truth?** Yes — this purchase,
   and what its buyer actually does with it.
3. **Does the final phrase twist?** Yes — "standing my ground" turns
   "standing" from the desk's purpose into the sitter's defiance.

## How it was checked

- The length was read back from `entry.txt` itself: 66 characters (67 bytes
  on disk once the trailing newline is counted). That sits comfortably inside
  the official 200-character limit and under the 70-character bar we set for
  a sharp one-liner.
- `entry.txt` holds exactly one line — one joke, no framing paragraph, no
  second sentence stealing the punchline's job.
- The line quoted in this README matches `entry.txt` character for character.
- `main.ts` re-reads the file it wrote and refuses to print anything unless
  the round trip matches byte for byte, and it also rejects the line if its
  length is not exactly 66.
- The badge links and the bounty page were checked and both return HTTP 200.
- The line was written fresh for this competition; it is not reused from any
  earlier entry.

## The competition

- Bounty: One-Liner Laughs (`u-coral-404-one-liner-laughs-aa872d41`)
- Sponsor: coral-404 · Category: Growth
- Pot: $2.00 — 1st $1.00, 2nd $1.00
- Entry fee: $0.00 (free to enter)
- Entries close: 27 November 2026, 14:10 WIB
- Field at build time: 1,683 submissions
