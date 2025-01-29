import { UrlUtility } from "../../../../support/utilities/urlUtilities";
import { UserList } from "../../../data/userList";

export class Login {

  public static userLogin(portalName: any, userName: any) {

    let siteURL = UrlUtility.urlBuilder(portalName);
    let UserName = UserList.getUserList(userName);
    const args = { UserName, siteURL };


    cy.session(args, () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      //cy.visit(siteURL);
      cy.visit(siteURL,{failOnStatusCode: false});
      cy.contains('Register Now').click({force:true});
      cy.wait(10000)
      cy.get('[title="External HTML"]')
        .its("0.contentDocument.body")
        .find("#loginBtn").click()
      cy.get('[title="External HTML"]')
        .its("0.contentDocument.body")
        .find('input[name="email"]').type(UserName)
      cy.get('[title="External HTML"]')
        .its("0.contentDocument.body")
        .find('input[name="password"]').type("Informa@123")
      cy.get('[title="External HTML"]')
        .its("0.contentDocument.body")
        .find('button[class="iiris-aThJd iiris-btn iiris-btn-block"]').eq(0).click({force:true});
      cy.wait(25000)  
      cy.get('[title="External HTML"]')
      .its("0.contentDocument.body")
      .find('button[class="iiris-bfnSK iiris-btn iiris-btn-block "]').click({force:true}); 
  
      // cy.get('[title="External HTML"]').its("0.contentDocument.body").find('.iiris-bfnSK iiris-btn iiris-btn-block').then(($el) => {
      //   if ($el.length) {
      //   cy.get('[title="External HTML"]').its("0.contentDocument.body").find('button[class="iiris-bfnSK iiris-btn iiris-btn-block "]').click();
      //   } 
      //   });
      cy.wait(10000)

    });
  }
}
