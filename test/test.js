var assert = require('assert');
var request = require('request');
var username='jsmith'
var password= 'Demo1234'
var visitID = ''
  


describe('webedims-login page', function() {
    it('use should login', function () {
      browser.url('/');
      browser.click('#SelectedSiteCode');
      browser.selectByVisibleText('#SelectedSiteCode','Montefiore of New Rochelle');
      browser.setValue('#UserName',uid);
      browser.setValue('#Password',passw);
      browser.click('#btnSubmit')
    });

});   



//describe('webedims-visits page', function() {
    it('user should save the note', function () {
      browser.waitForVisible('#myVisitsDataTable_9660');
	  browser.click(visitID);
      browser.debug();
      browser.click('#noteMenuList');
      browser.waitForVisible('#physicianNoteEdit');
      browser.click('#physicianNoteEdit');
      browser.debug();
 
    });
  
//});