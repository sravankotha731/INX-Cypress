@Onboarding
Feature: Buyer Supplier Onboarding
    Background: Login into Prototype
        Given I login to INX prototype with INX Buyer user

    ## Validate Company Brief Page
    Scenario: Validate Company Brief And Team Member Page
        When I navigate to INX Supplier Management page
        When I set cookie companyOnboardedStatue as false
        Then I should see text Welcome to INXchange is display
        When I click on Next Step text
        Then I should see validation data
            | validationmessages                    |
            | Company Name                          |
            | Company Sector                        |
            | Primary Industry                      |
            | Country                               |
            | Telephone Number                      |
            | Company Website                       |
            | Please select your company sector     |
            | Please select your Primary Industry   |
            | Please select your Country            |
            | Please enter your company website URL |
        When I enter value Bakery in companysector text field
        When I enter value Distributor in primaryindustry text field
        When I enter value Albania in country text field
        When I enter value +449292921234 in telephonenumber text field
        When I enter value www.test.uk.in in companywebsite text field

        ## Validate Team Member Page
        When I click on Next Step text
        Then I should see validation data
            | validationmessages   |
            | Company Team Members |
            | Name                 |
            | Job Function         |
            | Email                |
            | Role                 |
            | Previous Step        |
            | Explore the Platform |
            | Add Team Members     |
        When I click on Explore the Platform text
        Then I should see text Job function should not be empty. Please update job function is display

        ## Edit Admin Member
        When I click on Edit text
        And I type value name in names text field
        When I enter values Education in JobFunctions text field
        And I clicks on done button

        ## Add Team  Member
        When I click on Add Team Members text
        And I clicks on +Add button
        Then I should see validation data
            | validationmessages              |
            | Please enter your name          |
            | Please select your job function |
            | Please enter your email         |
        And I type value name in names text field
        When I enter value Sales in JobFunction text field
        And I type value email in emails text field
        And I clicks on +Add button

        ## Remove Team  Member
        When I click on Remove text
        Then I should see below data
            | validationmessages                                |
            | Remove Team Member                                |
            | Are you sure you want to delete this team member? |
            | Yes, Remove team Member                           |
            | Cancel                                            |
        When I click on Yes, Remove team Member text
        Then Text Remove should not be visible

        ## Validate Previous and Next Step
        When I click on Previous Step text
        Then I should see text Company Name is display
         When I click on Next Step text
         Then I should see text Company Team Members is display