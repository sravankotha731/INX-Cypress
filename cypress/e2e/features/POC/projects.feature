@POC @e2e @Projects
Feature: Buyer Projects
    Background: Login into Prototype
        Given I login to INX prototype with INX Buyer user

    Scenario: Validate the UI on the Projects Page when 'no projects' are available
        When I navigate to INX Supplier Management page
        And I click on Projects text
        And I intercept projects API call with interceptNoProjects.json file
        And I navigate to INX Supplier Management page
        And I click on Projects text
        Then I should see text Manage your suppliers more efficiently by using projects is display
        And I should see text + Add New Project is display
    
    Scenario: Validate Create Project pop up mandatory fields error messages
        When I navigate to INX Projects page
        And I click on Add new project text
        And I click on Add Project text
        Then I should see text Please enter the project name is display
        And I should see text Please enter the project description is display

    Scenario: Validate the UI on the Product Page when 'no products' & 'no suppliers' are available
        When I navigate to INX Supplier Management page
        And I click on Projects text
        And I intercept projects API call with interceptProjects.json file
        And I navigate to INX Supplier Management page
        And I click on Projects text
        And I click on Choco Powder text
        And I intercept projects API call with interceptNoProduct.json file
        And I intercept suppliers API call with interceptNoSuppliers.json file
        When I navigate to INX Supplier Management page
        And I click on Projects text
        And I click on Choco Powder text
        Then I should see text Add products from your invited suppliers to your project is display
        And I should see text + Add Product to project is display
        When I click on + Add Product to project text
        Then I should see text You don’t have suppliers yet is display
        And I should see text + Invite Supplier is display
        When I click on + Invite Supplier text
        Then I should see text Invite Supplier is display
        And I should see text + Add is display

    Scenario: Validate Add Project pop up mandatory fields error messages
        When I navigate to INX Projects page
        And I click on Choco powder Project project card
        And I click on + Add Product text
        And I click on Add Product button
        Then I should see text Please select the supplier is display
        And I should see text Please select the product is display
    
    Scenario: Validate Add New Project & Add New Product
        When I navigate to INX Projects page
        And I click on Add new project text
        And I enter the Unique Project Name in Project Name field
        And I enter the This project requires unique products from suppliers in Project Description field
        And I click on Add Project text
        Then I should see text Project created successfully! is display
        When I click on Unique Project Name project card
        And I click on + Add Product to project text
        And I click on Supplier Name and select Sravan pvt 5:22
        And I click on Product Name and select CHOCO POWDER
        And I click on Add Product
        Then I should see text Product added successfully. is display
        And I should see text Document Name is display
        And I should see text Document type is display
        And I should see text Shared by is display
        And I should see text Send Request is display
        And I should see text Internal Team chat is display
