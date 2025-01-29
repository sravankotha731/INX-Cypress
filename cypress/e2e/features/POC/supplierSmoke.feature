@POC @e2e @SmokeStage
Feature: Smoke Testing   
    
    Background: Login INXPortal
        Given I login to INX prototype with INX Smoke Supplier user

    Scenario: Validate Documents List UI
        When I navigate to INX Documents List page
        Then I should see text Documents List is display
        And I should see text Exchanged Documents is display
        And I should see text My Documents is display
        And I should see text Create Questionnaire is display
        And I should see text Upload Document is display

        When I click on My Documents tab
        Then I should see text No documents added yet is display

        When I click on Exchanged Documents tab
        Then I should see text Buyer Testing Company is display

    Scenario: Validate Contact Us UI
        When I navigate to INX Contact Us page
        Then I should see text Contact Us is display
        And I should see text Send Inquiry and we will get back to you is display
        And I should see text What would you like to contact us about? is display
        And I should see text Send Now is display

