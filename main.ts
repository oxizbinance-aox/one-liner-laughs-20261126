// One-Liner Laughs — final entry.
// The whole entry is one joke: it is printed, and it is saved to
// /output/entry.txt so the grader can read exactly what was printed.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The one-liner. 66 characters, twist lands on the last phrase.
const line =
  "I bought a standing desk. Now I sit beside it, standing my ground.";

// The competition caps one-liners at 70 characters; this line is 66.
// Guard the length here so a future typo cannot silently ship a
// different, longer line.
const EXPECTED_LENGTH = 66;
if (line.length !== EXPECTED_LENGTH) {
  throw new Error(
    `line is ${line.length} characters, expected ${EXPECTED_LENGTH}: ` +
      JSON.stringify(line)
  );
}

// The grader reads this file; keep the path fixed.
const outPath = "/output/entry.txt";

// Make sure the output folder exists before writing into it.
mkdirSync(dirname(outPath), { recursive: true });

// Save the joke, exactly as it is, with a trailing newline.
writeFileSync(outPath, line + "\n", "utf8");

// Read it back and compare character by character. If even one byte
// differs, the entry is broken and we refuse to claim success.
// Compare the whole file (line + newline), not just the line, so a
// stray extra byte cannot slip through unnoticed.
const saved = readFileSync(outPath, "utf8");
if (saved !== line + "\n") {
  // Point at the first position where they diverge, so the failure
  // message tells us exactly where the corruption happened.
  let firstDiff = 0;
  const want = line + "\n";
  while (firstDiff < want.length && saved[firstDiff] === want[firstDiff]) {
    firstDiff++;
  }
  throw new Error(
    `entry.txt mismatch at character ${firstDiff}: ` +
      `expected ${JSON.stringify(want)} ` +
      `but found ${JSON.stringify(saved)}`
  );
}

// Only after the round-trip check passes do we print the line.
console.log(line);
