@POC @e2e @Login
Feature: Prototype Login       
    
    Scenario: Validate the Buyer login
        Given I login to INX prototype with INX Buyer user
        When I navigate to INX Supplier Management page
        Then I should see text Supplier Management is display
    
    Scenario: Validate the Supplier login
        Given I login to INX prototype with INX Supplier user
        When I navigate to INX Documents List page
        Then I should not see text Supplier Management
