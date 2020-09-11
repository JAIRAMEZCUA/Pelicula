const { Builder } = require("selenium-webdriver");
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
const path = require("path");
var assert = require("assert");

describe('Login', function () {
    this.timeout(30000)
    let driver
    /*beforeEach(async function () {
        const vendorDirectory = path.delimiter + path.join(__dirname, '..', 'vendor')
        process.env.PATH += vendorDirectory
        //driver = await new Builder().forBrowser("firefox").build();
        //driver = await new Builder().forBrowser("chrome").build();  
    })*/
    before(async function() {
        driver = await new Builder().forBrowser("chrome").build();  
    }) 
    afterEach(async function () {
        await driver.quit()
    })
    it('with valid credentials', async function () {
        await driver.get("https://jairamezcua.github.io/Pelicula/");
        await driver.findElement({ id: 'searchterm' }).sendKeys("space");
        await driver.findElement({ id: 'search'}).click();
        // primero lo busque para ver si lo encontraba
        //await driver.wait(until.elementLocated(By.id('tablaResultados'), 10000))

        // afirmacion
        assert(
            await driver.wait(until.elementLocated(By.id('tablaResultados'), 10000)).isDisplayed()
            /*await !driver.findElement({ id: 'tablaResultados' }).isDisplayed(),
            'Success message not displayed'*/
        )

    })
})

/*describe('Busqueda', function () {
    it('si tiene diez o mas caracteres, ponemos un guion en medio', function () {
        browser.get('https://jairamezcua.github.io/Pelicula/');
        browser.findElement(webdriver.By.id('searchterm')).sendKeys('Space');
        browser.findElement(webdriver.By.id('search')).click();
        //assert.equal(kmmx.guionEnMedio('Abecedario'), 'Abece-dario')
        a = browser.findElement(webdriver.By.cssSelector('td'));
        console.log(a);
        console.log("HOLA");
        assert.equal(browser.findElement(webdriver.By.xpath('//td[1]')), 'Space')
        
    })
})

/*

browser.findElement(webdriver.By.xpath('//td[text()='Hola']')).getText().then(textValue => {
    assertSame('Hola', textValue);
});

browser.findElement(webdriver.By.xpath('//td[text()='Hola']')).getText().then(textValue => {
    assert.equal('Hola', textValue);
});

browser.findElement(webdriver.By.id('resultados')).then(function(result) {
    console.log('Buscado',result)
});

.then(function(result) {
    console.log('Buscado')
});*/

/*
browser.findElement(webdriver.By.id('resultados')).getText().then(textValue => {
        console.log('Buscado-',textValue.length)
      });
*/
/*browser.findElements(webdriver.By.css('[href^="/Hola/"]')).then(function(links){
    console.log('Found', links.length, 'Wiki links.')
    //browser.quit();
});*/

/*browser.findElement(webdriver.By.xpath('//td[text()='Hola']')).then(function(result) {
        return result[0];
    });;

browser.findElements(webdriver.By.xpath('//td[text()='Hola']')).then(function(test)){
    console.log('Found', links.length, 'Wiki links.')
    browser.quit();
});

*/
