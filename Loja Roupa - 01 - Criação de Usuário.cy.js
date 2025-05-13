describe('Criação de Usuário', () => {

  it('Criação de Uusuário com Sucesso e o Login', () => {

    var nome = 'Antonio Testes'
    var sobrenome = 'Da Silva'
    var email = 'antoniotestes@cypress.com'
    const senha = '123456789aA@'
    const aniversario = '11/01/2000'

    //resolução do teste
    cy.viewport(1920, 1080);

    //Visitando o site
    cy.visit('https://teststore.automationtesting.co.uk/index.php')
    cy.wait(2000)

    //Cadastrando Usuário
    cy.get('a > .hidden-sm-down').click()
    cy.get('.no-account > a').click()
    cy.get('#field-id_gender-1').click()
    cy.get('#field-firstname').click().type(nome)
    cy.get('#field-lastname').click().type(sobrenome)
    cy.get('#field-email').click().type(email)
    cy.get('#field-password').click().type(senha)
    cy.get('#field-birthday').click().type(aniversario)

    //Clicando nas opções
    cy.get(':nth-child(7) > .col-md-6 > .custom-checkbox > label > input').click()
    cy.get(':nth-child(8) > .col-md-6 > .custom-checkbox > label > input').click()
    cy.get(':nth-child(9) > .col-md-6 > .custom-checkbox > label > input').click()

    //Clicando em Salvar
    cy.get('.form-footer > .btn').click()

  })
})