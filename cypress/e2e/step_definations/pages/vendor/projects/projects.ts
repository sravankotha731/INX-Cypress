import { RandomMail } from '../../../../../support/utilities/randomMail';
const locators = {
    "Project Name": "[id='data-input']",
    "Project Description": "[id='basic_Description']",
    "Name": "[class='ant-select-selection-item']",
    "Add Product": "[class='ant-btn css-ggtjyn ant-btn-default px-[15px] py-[4px] bg-[#002244] text-[#fff]']"
};

const randomProjectName = RandomMail.getRandomProjectText();

export default class Projects {
    public static enterText(fieldValue: any, fieldName: any) {
        let fieldValueData = fieldValue == "Unique Project Name" ? randomProjectName : fieldValue
        cy.get(locators[fieldName]).click().clear().type(fieldValueData);
    }

    public static clickOnProjectCard(projectName: any) {
        cy.contains(projectName == "Unique Project Name" ? randomProjectName : projectName).click();
    }

    public static clickOnDropdownAndEnterValue(dropdown: any, dropdownValue: any) {
        cy.get(locators["Name"]).eq(dropdown == "Supplier Name" ? 0 : 1).click();
        dropdown == "Product Name" ? cy.get(`[title="${dropdownValue}"]`).click() : cy.contains(dropdownValue).click();
    }

    public static clickOnAddProduct() {
        cy.get(locators["Add Product"]).eq(1).click();
    }
}