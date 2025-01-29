@POC @e2e @SmokeStage
Feature: Smoke Testing      
    
    Background: Login INXPortal
        Given I login to INX prototype with INX Smoke Buyer user

    Scenario: Validate supplier Management UI
        When I navigate to INX Supplier Management page
        Then I should see text Supplier Management is display
        And I should see text Add External Suppliers is display

        When I click on Add External Suppliers text
        Then I should see text Invite Supplier is display
        And I should see text Company is display

        When I click on close button
        Then I should see text Supplier Management is display

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
        Then I should see text No documents in exchange yet is display

    Scenario: Validate Projects UI
        When I navigate to INX Projects page
        Then I should see text Project List is display
        And I should see text Add a new project is display
        And I should see text Manage your suppliers more efficiently by using projects to group is display

        When I click on Add New Project text
        Then I should see text Create Project is display
        And I should see text Name is display
        And I should see text Description is display
        And I should see text Add Project is display

        When I click on close button
        Then I should see text Project List is display

    Scenario: Validate Contact Us UI
        When I navigate to INX Contact Us page
        Then I should see text Contact Us is display
        And I should see text Send Inquiry and we will get back to you is display
        And I should see text What would you like to contact us about? is display
        And I should see text Send Now is display