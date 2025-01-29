import Common from '../../../common/common';
import { RandomMail } from '../../../../../support/utilities/randomMail';

const locators = {
    "name text": "#form_in_modal_name",
    "email text": "#form_in_modal_email",
    "company":"[id='form_in_modal_companyName']",
    "names text": "[id='Add New Member_name']",
    "emails text": "[id='Add New Member_email']"
}
const randomSupplierInviteEmail = RandomMail.getEmailAddress();
const randomSupplierCompanyName = RandomMail.getRandomText();
export class SupplierManagement {
  public static popUpVisible() {
    cy.get(".ant-modal-content").should("be.visible");
  }
  public static enterInputField(fieldValue: any, fieldName: any) {
    cy.get(locators[fieldName]).type(fieldValue);
  }

  public static verifyNewlyaddedSupplierDetails(value, dataTable) {
    var tableValue: any;
    dataTable.hashes().forEach((elem) => {
      if (value == "Active") {
        cy.contains(elem.Activedata);
      } else if (value == "Invited") {
        cy.contains(elem.Invitationsent);
      }
      else if (value == "validation") {
        cy.contains(elem.validationmessages);
      }
    });
  }

  public static selectDropDownValue(value: any) {
    Common.clickOnDropDown(value);
    if (value == "Active") {
      cy.get(".ant-select-item").eq(0).click();
    } else {
      cy.get(".ant-select-item").eq(1).click();
    }
  }

    public static enterSuppliersCompanyValue(fieldName: any) {
        cy.get(locators[fieldName]).type(randomSupplierCompanyName)
        cy.get('.ant-select-item-option-content ').click({multiple:true,force: true})       
    }
    public static enterValueInTextBox(value: any,fieldName: any) {
        if (value == "Representative" ||value == "name"  ) {
            cy.get(locators[fieldName]).type(randomSupplierCompanyName,{force: true})
        }
        else{
        cy.get(locators[fieldName]).type(randomSupplierInviteEmail,{force: true})
        }
    }

}

export{randomSupplierInviteEmail};