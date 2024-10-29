
describe('Calculator Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  
  it('should have the title "Calculator App"', () => {
    cy.get('title').should('have.text', 'Calculator App');
  });

});

// ADDITION
describe('Calculator Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display 2 when "1 + 1 = " is clicked', () => {

    cy.get('.key-1').click();
    cy.get('.key-add').click();
    cy.get('.key-1').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '2');

  });

});

// SUBTRACTION
describe('Calculator Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display 2 when "4 - 2 = " is clicked', () => {

    cy.get('.key-4').click();
    cy.get('.key-subtract').click();
    cy.get('.key-2').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '2');

  });

});

describe('Calculator Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display 4 when "4 - 0 = " is clicked', () => {

    cy.get('.key-4').click();
    cy.get('.key-subtract').click();
    cy.get('.key-0').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '4');

  });

});

describe('Calculator Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display 0 when "4 - 4 = " is clicked', () => {

    cy.get('.key-4').click();
    cy.get('.key-subtract').click();
    cy.get('.key-4').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '0');

  });

});

// MULTIPLICATION
describe('Calculator Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display 4 when "2 * 2 = " is clicked', () => {

    cy.get('.key-2').click();
    cy.get('.key-multiply').click();
    cy.get('.key-2').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '4');

  });

});

describe('Calculator Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display 0 when "2 * 0 = " is clicked', () => {

    cy.get('.key-2').click();
    cy.get('.key-multiply').click();
    cy.get('.key-0').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '0');

  });

});

describe('Calculator Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display 1 when "2 * 1 = " is clicked', () => {

    cy.get('.key-2').click();
    cy.get('.key-multiply').click();
    cy.get('.key-1').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '2');

  });

});

// DIVISION
describe('Calculator Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display 2 when "4 / 2 = " is clicked', () => {

    cy.get('.key-4').click();
    cy.get('.key-divide').click();
    cy.get('.key-2').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '2');

  });

});

describe('Calculator Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display 1 when "4 / 1 = " is clicked', () => {

    cy.get('.key-4').click();
    cy.get('.key-divide').click();
    cy.get('.key-1').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '4');

  });

});
