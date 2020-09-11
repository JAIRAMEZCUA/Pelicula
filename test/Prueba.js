
var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'chrome' }).build();
//browser.get('https://jairamezcua.github.io/Pelicula/');
browser.get('https://jairamezcua.github.io/Pelicula/index.html');
browser.findElement(webdriver.By.id('searchterm')).sendKeys('hola');
browser.findElement(webdriver.By.id('search')).click();



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