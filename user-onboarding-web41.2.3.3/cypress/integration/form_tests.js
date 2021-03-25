// Set up - sanity checks (ensure initial state is as expected)
//Act - user actions (typing, clicking)
// Assert - actions consequences as expected

describe("User Onboarding App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // Element Selector Functions
  const nameInput = () => cy.get('input[name="name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const passwordInput = () => cy.get('input[name="password"]');
  const termsBoxInput = () => cy.get('input[name="termsOfService"]');
  const submitBtn = () => cy.get('button[class="submit-button');
  const userList = () => cy.get("pre");

  // Input Variables
  const testName = "Fname Lname";
  const testEmail = "Moddy@mod.mod";
  const testPassword = "abc12badpwd";

  it("Sanity test", () => {
    expect(2 + 2).to.equal(4);
    expect(2 + 2).to.not.equal(5);
  });

  it("Forms initialize empty", () => {
    nameInput().should("have.value", "");
    emailInput().should("have.value", "");
    passwordInput().should("have.value", "");
    termsBoxInput().should("not.be.checked");
  });

  it("Inputs accept input and update values", () => {
    nameInput()
      .type(testName) //Maybe worth a helper function to try multiple variations re special characters and spaces
      .should("have.value", testName);

    emailInput().type(testEmail).should("have.value", testEmail);

    passwordInput().type(testPassword).should("have.value", testPassword);

    termsBoxInput().check();
    termsBoxInput().should("be.checked");

    // Submission
    submitBtn().click();
    nameInput().should("have.value", "");
    emailInput().should("have.value", "");
    passwordInput().should("have.value", "");
    termsBoxInput().should("not.be.checked");

    userList().contains(testName);
    userList().contains(testEmail);
    userList().contains(testPassword);
    userList().contains("true");
  });
});
