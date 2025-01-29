import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Projects from "./projects";

When(/^I enter the (.*) in (.*) field$/, (fieldValue, fieldName) => {
    Projects.enterText(fieldValue, fieldName);
})

When(/^I click on (.*) project card$/, (projectName) => {
    Projects.clickOnProjectCard(projectName);
})

When(/^I click on (.*) and select (.*)$/, (dropdown, dropdownValue) => {
    Projects.clickOnDropdownAndEnterValue(dropdown, dropdownValue);
})

When(/^I click on Add Product$/, () => {
    Projects.clickOnAddProduct();
})