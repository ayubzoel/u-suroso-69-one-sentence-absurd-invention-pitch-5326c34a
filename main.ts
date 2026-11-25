import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "A television remote that, whenever it slips between the couch cushions, squeaks for help in a tiny panicked voice until someone fishes it out.";

// The gate allows one sentence of 1 to 220 characters, never blank.
const points = [...PITCH].length;
if (points < 1 || points > 220 || PITCH.trim().length === 0) {
  throw new Error(`pitch fails the gate at ${points} characters`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), PITCH, "utf8");
