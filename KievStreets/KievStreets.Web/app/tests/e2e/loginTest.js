var baseUrl = 'http://services.e-tender.biz:100/#';
var inputLogin = element(by.name('username'));
var inputPassword = element(by.name('password'));

beforeEach(function () {
    browser.ignoreSynchronization = true;
});

describe('MainPage', function () {
    it('input Login & Password -> navigate to Profile', function () {
        browser.get(baseUrl + '/login');
        browser.sleep(1000);
        inputLogin.sendKeys('volga');
        inputPassword.sendKeys('P@ssw0rd');
        browser.sleep(1000);
        element(by.id('btn_submit')).click();
        browser.sleep(1000);
        expect(browser.getCurrentUrl()).toContain('profile');
    });
    
    it('edit phone', function () {
        browser.get(baseUrl+'/profile');
        browser.sleep(2000);
        element(by.css('.fa-pencil')).click();
        browser.sleep(2000);
        element(by.name('phone')).clear();
        element(by.name('phone')).sendKeys('1901901901901901');
        element(by.css('.fa-check')).click();
        browser.sleep(2000);
        var phone = element(by.css('body > div.ng-scope > div > div.container > div.angular-animation-container.row > div > div > div > div.panel-body > div > div > div:nth-child(2) > ng-include > div > div.panel-body > form > div:nth-child(1) > div:nth-child(17) > div.col-sm-8.ng-binding'));
        expect(phone.getText()).toBe('1901901901901901');
    });
    
    it('edit URL', function () {
        browser.get(baseUrl + '/profile');
        browser.sleep(2000);
        element(by.css('.fa-pencil')).click();
        browser.sleep(2000);
        element(by.name('url')).clear();
        element(by.name('url')).sendKeys('http://www.finance.ua');
        element(by.css('.fa-check')).click();
        browser.sleep(2000);
        var URL = element(by.css('body > div.ng-scope > div > div.container > div.angular-animation-container.row > div > div > div > div.panel-body > div > div > div:nth-child(2) > ng-include > div > div.panel-body > form > div:nth-child(1) > div:nth-child(15) > div.col-sm-8'));
        expect(URL.getText()).toBe('http://www.finance.ua');
    });
});

