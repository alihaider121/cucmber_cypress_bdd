import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = 'https://staging-olxpk.jarvisempg.com/admin/login'
Given('user navigates to Jarvis', () => {
  cy.visit(url)
})

When('I enter Email as {string} and Password as {string}',(email,password)=>{
  cy.xpath("//input[@placeholder='Enter your email address…']").type(email);
  cy.xpath("//input[@placeholder='Enter your password…']").type(password);
 
})
And("the user clicks on the sign-in button",()=>{
  cy.xpath("//button[@type='submit']").click({force:true});
  }) 

  Then("it should validate the {string} message",(errorMsg)=>{

    cy.xpath("//div[@role='alert']").then((text)=>{
      expect(text).to.contain('Invalid login credentials. Please try again.');
    })

  })