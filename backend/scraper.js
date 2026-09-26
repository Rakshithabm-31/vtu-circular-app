const puppeteer = require('puppeteer');
const Circular = require('./models/Circular'); // Import the model

(async () => {
    try {
        console.log('Launching browser...');
        const browser = await puppeteer.launch({
            headless: false, // Open browser for debugging
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });

        const page = await browser.newPage();

        // Navigate to VTU website
        await page.goto('https://vtu.ac.in/category/examination/', { waitUntil: 'networkidle2' });

        console.log('Page loaded successfully.');

        // Scrape circular titles and links
        const circulars = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.entry-title a')).map(link => ({
                title: link.textContent.trim(),
                url: link.href,
            }));
        });

        console.log('Scraped Circulars:', circulars);

        // Save to database
        for (const circular of circulars) {
            await Circular.create({
                title: circular.title,
                url: circular.url,
                issued_date: new Date(), // Use the current date as a placeholder
            });
        }

        console.log('Circulars saved to database.');
        await browser.close();
    } catch (error) {
        console.error('Error while scraping:', error);
    }
})();
