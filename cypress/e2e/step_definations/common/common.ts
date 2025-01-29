import { UrlUtility } from "../../../support/utilities/urlUtilities";
const locators = {
  "Send Invitation": ".ant-col-offset-20 > .ant-btn",
  "Active": "#rc_select_0",
  "Invited": "#rc_select_0",
  "search text": '[type="text"]',
  "search": '[data-icon="search"]',
  "Add External Suppliers": '//[contains(text(),"Add External Suppliers")]',
  "Add": "[data-icon='send']",
  "companysector": '[id="Company Brief_companySector"]',
  "primaryindustry": '[id="Company Brief_primaryIndustry"]',
  "country": '[id="Company Brief_country"]',
  "telephonenumber": '[id="Company Brief_telephoneNumber"]',
  "companywebsite": '[id="Company Brief_companyWebsite"]',
  "Company Webiste": "[id='Company Brief_companyWebsite']",
  "close": '[data-icon="close"]',
  "My Documents": '//*[contains(text(),"My Documents")]',
  "Exchanged Documents": '//*[contains(text(),"Exchanged Documents")]',
  "+Add": '[type="button"]',
  "JobFunction": '[id="Add New Member_jobFunction"]',
  "JobFunctions": '.ant-select-selection-item',
  "done":'[type="button"]',
  "Add Product": "[class='ant-btn css-ggtjyn ant-btn-default px-[15px] py-[4px] bg-[#002244] text-[#fff]']"
};

const navigationUrls = {
  "Supplier Management": "supplier-management",
  "Documents List": "documents",
  "Onboarding": "onboarding",
  "Projects": "projects",
  "Contact Us": "contact-us"
}

export default class Common {
  public static commonStep() {
    cy.log("You are in common.ts file");
  }

  public static clickOnText(text: any) {
    cy.contains(text).click({force: true});
  }

  public static verifyText(text: any) {
    //cy.contains(text).should("be.visible");
    //cy.wait(3000)

    cy.contains(text).scrollIntoView().should("be.visible");

  }

  public static verifyTextNotVisible(text: any) {
    cy.contains(text).should("not.exist");
  }

  public static verifyErrorMessage(text: any) {
    cy.contains(text)
      .should("be.visible")
      .and("have.css", "-webkit-text-fill-color", "rgb(255, 77, 79)");
  }

  public static buttonDisabled(buttonName: any) {
    cy.get(locators[buttonName]).should("be.disabled");
  }

  public static buttonEnabled(buttonName: any) {
    cy.get(locators[buttonName]).should("be.enabled");
  }

  public static clickOnButton(buttonName: any) {
    cy.get(locators[buttonName]).click({ force: true });
  }
  public static clickOnDropDown(value: any) {
    cy.get(locators[value]).click({ force: true });
  }
  public static clickOnTextBox(value: any) {
    cy.get(locators[value]).click({ force: true });
  }

  public static enterText(fieldValue: any, fieldName: any) {
    cy.get(locators[fieldName]).click({ force: true }).clear().type(fieldValue+ '{enter}')
  }

  public static setCookie(cookieName: any, cookieValue: any) {
    cy.setCookie(cookieName, cookieValue,{ domain : '.staging-inxchange.ingredientsnetwork.com' });
    cy.visit('https://staging-inxchange.ingredientsnetwork.com/onboarding')
  }

  public static navigate(siteName: any, pageName: any) {
    cy.visit(UrlUtility.urlBuilder(siteName) + navigationUrls[pageName]);
  }

  public static clickOnTab(tabName: any) {
    cy.xpath(locators[tabName]).click({ force: true });
  }

  public static clicksOnButton(buttonName: any) {
    cy.get(locators[buttonName]).eq(8).click({ force: true });
  }
  public static textNotVisible(text: any) {
    cy.contains(text).should('not.be.visible');
  }

  public static enterTexts(fieldValue: any, fieldName: any) {
    cy.get(locators[fieldName]).click({ force: true }).type(fieldValue+ '{enter}')
  }
}

