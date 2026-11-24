# Heating Element on Strike

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/top234/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd-entry/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/top234/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd-entry/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

An entry for [The Funniest Toaster Error Message](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd) on make.fun: one toaster error message, at most 120 characters, written by a program to `/output/entry.txt`.

## The line

> ERROR: Heating element on strike. Talks stalled since Tuesday.

62 characters, one line. The setup is a deadpan appliance error — a heating element that has gone on strike — and the punchline lands at the end: the talks have stalled since Tuesday, as if the toaster were in a labour dispute with its owner.

## How it works

`main.ts` (Node, no dependencies) writes the line to `(OUTPUT_DIR ?? "/output") + "/entry.txt"`:

```sh
node main.ts
```
