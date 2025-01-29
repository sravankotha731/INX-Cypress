import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Common from './common';

When('I am performing common step', () => {
    Common.commonStep();
});

When(/^I click on (.*) text$/, (text: any) => {
    Common.clickOnText(text);
});

Then(/^I should see text (.*) is display$/, (text: any) => {
    Common.verifyText(text);
});

Then(/^I should not see text (.*)$/, (text: any) => {
    Common.verifyTextNotVisible(text);
});

Then(/^I should see error message (.*)$/, (text: any) => {
    Common.verifyErrorMessage(text);
});

Then(/^I should see (.*) button disabled$/, (buttonName: any) => {
    Common.buttonDisabled(buttonName);
});

Then(/^I should see (.*) button enabled$/, (buttonName: any) => {
    Common.buttonEnabled(buttonName);
});

When(/^I click on (.*) button$/, (buttonName: any) => {
    Common.clickOnButton(buttonName);
});

When(/^I navigate to (.+?) (.*) page$/, (siteName, pageName) => {
    Common.navigate(siteName, pageName);
})

When(/^I set cookie (.*) as (.*)$/, (cookieName, cookieValue) => {
    Common.setCookie(cookieName, cookieValue);
});

When(/^I click on (.*) tab$/, (tabName: any) =>{
    Common.clickOnTab(tabName);
});
When(/^I enter value (.*) in (.*) text field$/, (fieldValue: any, fieldName: any)  => {
    Common.enterText(fieldValue,fieldName);
});

When(/^I clicks on (.*) button$/, (buttonName: any) => {
    Common.clicksOnButton(buttonName);
});

Then(/^Text (.*) should not be visible$/, (text: any) => {
    Common.textNotVisible(text);
});
When(/^I enter values (.*) in (.*) text field$/, (fieldValue: any, fieldName: any)  => {
    Common.enterTexts(fieldValue,fieldName);
});