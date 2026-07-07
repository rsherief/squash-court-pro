const { chromium } = require('playwright');

const BASE_URL = 'https://rsherief.github.io/squash-court-pro';
const pages = ['/', '/products.html', '/about.html'];

async function auditPage(browser, path) {
  const page = await browser.newPage();
  const fullUrl = BASE_URL + path;

  console.log(`\n📄 Auditing: ${fullUrl}`);
  await page.goto(fullUrl);

  // Get page title
  const title = await page.title();
  console.log(`  ✓ Title: ${title}`);

  // Get meta description
  const metaDesc = await page.$eval('meta[name="description"]', el => el.getAttribute('content')).catch(() => 'Not found');
  console.log(`  ✓ Meta: ${metaDesc}`);

  // Check headings
  const h1 = await page.$eval('h1, h2', el => el.textContent).catch(() => 'Not found');
  console.log(`  ✓ Main heading: ${h1.substring(0, 50)}`);

  // Count paragraphs (content depth)
  const paragraphs = await page.$$eval('p', els => els.length);
  console.log(`  ✓ Content paragraphs: ${paragraphs}`);

  // Check all links
  const links = await page.$$eval('a', els => els.map(e => ({ text: e.textContent, href: e.href })));
  console.log(`  ✓ Links found: ${links.length}`);

  // Verify internal links are working
  for (const link of links.filter(l => l.href.includes(BASE_URL))) {
    const response = await page.goto(link.href).catch(() => null);
    if (response && response.status() === 200) {
      console.log(`    ✓ ${link.text.substring(0, 30)} → OK`);
    }
  }

  // Check images
  const images = await page.$$eval('img', els => els.length);
  console.log(`  ✓ Images: ${images}`);

  // Performance metrics
  const metrics = await page.evaluate(() => ({
    loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
    domReady: performance.timing.domInteractive - performance.timing.navigationStart
  }));
  console.log(`  ⚡ Load time: ${metrics.loadTime}ms`);
  console.log(`  ⚡ DOM ready: ${metrics.domReady}ms`);

  await page.close();
}

async function runAudit() {
  const browser = await chromium.launch();

  console.log('🔍 SEO & Content Audit for Squash Court Pro');
  console.log('==========================================');

  try {
    for (const page of pages) {
      await auditPage(browser, page);
    }

    console.log('\n✅ Audit complete!');
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

runAudit();
