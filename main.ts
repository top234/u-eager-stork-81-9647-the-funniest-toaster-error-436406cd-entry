// The Funniest Toaster Error Message — one line, at most 120 characters.
// The program writes a single toaster error message to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "ERROR: Heating element on strike. Talks stalled since Tuesday.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
