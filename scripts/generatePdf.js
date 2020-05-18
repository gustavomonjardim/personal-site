/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 2480, height: 3508 },
  });
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.emulateMedia({ media: 'screen' });
  await page.pdf({
    path: path.join(__dirname, '../', 'public/resume.pdf'),
    format: 'Letter',
    printBackground: true,
    margin: { top: '20mm', left: '16mm', bottom: '20mm', right: '16mm' },
  });
  await browser.close();
})();
