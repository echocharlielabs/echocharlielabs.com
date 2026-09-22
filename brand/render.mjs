// Re-render the marks from source.html. Needs Playwright (npx playwright install chromium once).
//   node brand/render.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';
const dir = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1700, height: 1100 } });
await page.goto(`file://${dir}/source.html`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(500);
for (const id of ['green', 'paper', 'framed']) await page.locator(`#${id}`).screenshot({ path: `${dir}/ecl-${id}-1024.png` });
await page.locator('#wordmark').screenshot({ path: `${dir}/ecl-wordmark-1600x400.png` });
await browser.close();
console.log('rendered; make 512px copies with: for v in green paper framed; do sips -z 512 512 brand/ecl-$v-1024.png --out brand/ecl-$v-512.png; done');
