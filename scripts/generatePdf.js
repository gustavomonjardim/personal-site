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
    margin: { top: '14mm', left: '8mm', bottom: '14mm', right: '8mm' },
  });
  await browser.close();
})();
