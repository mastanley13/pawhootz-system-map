import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { createSiteData } from "../content/site-data.mjs";
import { renderDocument } from "../lib/render.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const snapshotPath = path.join(projectRoot, "content", "live-ghl-summary.json");
const evidencePath = path.join(projectRoot, "content", "evidence-captures.json");
const indexPath = path.join(projectRoot, "index.html");

async function main() {
  const snapshot = JSON.parse(await readFile(snapshotPath, "utf8"));
  let evidence = {
    verifiedAt: null,
    shots: [],
    backlog: [],
    warnings: [],
  };

  try {
    evidence = JSON.parse(await readFile(evidencePath, "utf8"));
  } catch {
    evidence = {
      verifiedAt: null,
      shots: [],
      backlog: [],
      warnings: [],
    };
  }

  const siteData = createSiteData(snapshot, evidence);
  const html = renderDocument(siteData);

  await writeFile(indexPath, html, "utf8");
  console.log(`Generated ${path.relative(projectRoot, indexPath)}`);
}

main().catch((error) => {
  console.error("Failed to generate the system map page.");
  console.error(error);
  process.exitCode = 1;
});
