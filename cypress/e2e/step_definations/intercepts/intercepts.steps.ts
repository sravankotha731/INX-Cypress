import { When, Before } from "@badeball/cypress-cucumber-preprocessor";
import Intercepts from "./intercepts";

Before(() => {
    cy.fixture('intercepts/interceptNoSuppliers.json').as('noSuppliers');
    cy.fixture('intercepts/interceptWithSuppliersData.json').as('Suppliers');
    cy.fixture('intercepts/interceptNoProjects.json').as('noProjects');
    cy.fixture('intercepts/interceptProjects.json').as('Projects');
    cy.fixture('intercepts/interceptNoProduct.json').as('NoProducts');
})

When("I intercept suppliers API call with interceptNoSuppliers.json file", () => {
    Intercepts.interceptGetAPI('@noSuppliers');
});

When("I intercept suppliers API call with interceptWithSuppliersData.json file", () => {
    Intercepts.interceptGetAPI('@Suppliers');
});

When("I intercept projects API call with interceptNoProjects.json file", () => {
    Intercepts.interceptGetProjectAPI('@noProjects');
});

When("I intercept projects API call with interceptProjects.json file", () => {
    Intercepts.interceptGetProjectAPI('@Projects');
});

When("I intercept projects API call with interceptNoProduct.json file", () => {
    Intercepts.interceptGetProductAPI('@NoProducts');
});