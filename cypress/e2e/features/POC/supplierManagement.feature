@POC @e2e @SupplierManagement
Feature: Buyer Supplier Management
    Background: Login into Prototype
        Given I login to INX prototype with INX Buyer user

    Scenario: Validate the UI on the Supplier Management Page when 'no suppliers' are available
        When I navigate to INX Supplier Management page
        Then I should see text Supplier Management is display
        When I click on Supplier Management text
        And I intercept suppliers API call with interceptNoSuppliers.json file
        And I navigate to INX Supplier Management page
        And I click on Supplier Management text
        Then I should see text Invite your Supply chain is display

    Scenario: Validate the Search feature with Selecting 'Status [Active OR Invited]' from drop down on the Supplier Management Page
        When I navigate to INX Supplier Management page
        Then I should see text Supplier Management is display
        When I click on Supplier Management text
        And I intercept suppliers API call with interceptWithSuppliersData.json file
        Then I navigate to INX Supplier Management page

        When I click on Supplier Management text
        And I select option Active from the drop down
        Then I should see Active data
            | Activedata            |
            | Active member         |
            | Elysian Sky Pvt Ltd   |
            | Lunex Loom Uk Pvt ltd |
            | Lunex Loom Uk Pvt ltd |

        When I select option Invited from the drop down
        Then I should see Invited data
            | Invitationsent             |
            | Invitation sent            |
            | Nova Shore Pvt Ltd         |
            | Swift Pulse Pvt Ltd        |
            | Zenith Kaila Labs          |
            | Zephyr Bloom House Pvt Ltd |

    Scenario: Validate the Search feature with entering 'Invalid data' in search field on the Supplier Management Page
        When I navigate to INX Supplier Management page
        Then I should see text Supplier Management is display
        When I click on Supplier Management text
        And  I intercept suppliers API call with interceptWithSuppliersData.json file
        Then I navigate to INX Supplier Management page

        When I click on Supplier Management text
        And I click on search button
        Then I should see text Please enter a supplier name is display

        When I enter supplier name supplierNameTest in search text box
        And I click on search button
        Then I should see text No matching records found is display

    Scenario: Validate the Search feature by entering 'Valid data' into the search field on the Supplier Management Page
        When I navigate to INX Supplier Management page
        Then I should see text Supplier Management is display
        When I click on Supplier Management text
        And  I intercept suppliers API call with interceptWithSuppliersData.json file
        Then I navigate to INX Supplier Management page

        When I enter supplier name Quik Pulse in search text box
        And I click on search button
        Then I should see text Quik Pulse Pvt Ltd is display
        And I should see text Active member is display

        When I enter supplier name Horizon Harbor Shoes Ltd in search text box
        And I click on search button
        Then I should see text Horizon Harbor Shoes Ltd is display
        And I should see text Invitation sent is display


        When I enter supplier name Labs in search text box
        And I click on search button
        Then I should see text Zenith Kaila Labs is display
        And I should see text Invitation sent is display
        And I should see text Finch Flare Labs is display
        And I should see text Active member is display

        When  I enter supplier name Swift Pulse Pvt Ltd in search text box
        And I select option Active from the drop down
        Then I should see text No matching records found is display

        When  I enter supplier name Zephyr Bloom in search text box
        When I select option Invited from the drop down
        Then I should see text Zephyr Bloom House Pvt Ltd is display

    Scenario: Verify the different validation messages that appear when a user adds a supplier on the Supplier Management Page
        When I navigate to INX Supplier Management page
        Then I should see text Supplier Management is display
        When I click on Supplier Management text
        And I click on Add External Suppliers text
        And I click on Add button
        Then I should see text Please enter a Company name is display

        When I enter value in company text field
        And I click on Add button
        Then I should see text Please enter a Representative name is display
        And I should see text Please enter a valid Email is display

    Scenario: Verify the functionality of the 'Add Supplier' feature on the Supplier Management Page
        When I navigate to INX Supplier Management page
        Then I should see text Supplier Management is display
        When I click on Supplier Management text
        When I click on Add External Suppliers text
        And I enter value in company text field
        And I type value Representative in name text field
        And I type value email in email text field
        And I click on Add button
        Then I should see text Invitation sent successfully is display

        When I click on Add External Suppliers text
        And I enter value in company text field
        And I click on Add button
        Then I should see text This company is not onboarded yet! is display