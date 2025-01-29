import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Common from "../../../common/common";
import { SupplierManagement } from "./supplierManagement";

Then(/^I should see pop-up Invite Supplier$/, () => {
    SupplierManagement.popUpVisible();
});

When(/^I enter (.*) in Invite Supplier (.*) field$/, (fieldValue: any, fieldName: any) => {
    SupplierManagement.enterInputField(fieldValue, fieldName);
});

Then(/^I should see (.*) data$/, (value,dataTable) => {
    SupplierManagement.verifyNewlyaddedSupplierDetails(value,dataTable);
});

When(/^I enter supplier name (.*) in (.*) box$/,(filedValue:any,fieldName:any) => {
    Common.enterText(filedValue,fieldName)
});

When(/^I select option (.*) from the drop down$/, (value) => {
    SupplierManagement.selectDropDownValue(value);
});
When(/^I enter value in (.*) text field$/, (value) => {
    SupplierManagement.enterSuppliersCompanyValue(value);
});

When(/^I type value (.*) in (.*) field$/,(filedValue:any,fieldName:any) => {
    SupplierManagement.enterValueInTextBox(filedValue,fieldName);
});