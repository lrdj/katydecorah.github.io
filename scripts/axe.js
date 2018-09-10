const AxeBuilder = require('axe-webdriverjs');
const WebDriver = require('selenium-webdriver');

const driver = new WebDriver.Builder().forBrowser('chrome').build();

driver.get('http://127.0.0.1:4000/humble-brags/').then(() => {
  AxeBuilder(driver).analyze(results => {
    console.log(`There are ${results.violations.length} violations!`);
    require('fs').writeFileSync(
      'results.json',
      JSON.stringify(results.violations, null, 2)
    );
  });
});
