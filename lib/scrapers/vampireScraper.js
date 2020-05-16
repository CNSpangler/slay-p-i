const puppeteer = require('puppeteer');

module.exports = async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://buffy.fandom.com/wiki/Buffy_Summers');
  await page.screenshot({ path: 'example.png' });

  console.log('vampireScraper GO');

  await browser.close();
};

console.log('vampireScraper went?');
