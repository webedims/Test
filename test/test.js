var assert = require('assert');
var request = require('request');
var username=''
var password= ''
var visitID = ''
  


describe('webedims-login page', function() {
    it('use should login', function () {
      browser.url('/');
      browser.click('#SelectedSiteCode');
      browser.selectByVisibleText('#SelectedSiteCode','Montefiore of New Rochelle');
      browser.setValue('#UserName',username);
      browser.setValue('#Password',password);
      browser.click('#btnLogin')
    });

});   



describe('webedims-visits page', function() {
    it('user should save the note', function () {
      browser.waitForVisible('#myVisitsDataTable_9660');
	  browser.click(visitID);
      browser.debug();
      browser.click('#noteMenuList');
      browser.waitForVisible('#physicianNoteEdit');
      browser.click('#physicianNoteEdit');
      browser.debug();
 
    });
  
});