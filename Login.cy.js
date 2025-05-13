describe('template spec', () => {
  it('passes', () => {

    var nome = 'Rafael Testes'
    var email = 'rafaeltestes@testes.com.br'
    const senha = '123456789'


    //resolução do teste
    cy.viewport(1920, 1080);

    //Visitando o site
    cy.visit('https://automationpratice.com.br/#!')


    //Fazendo o Login
    cy.get('.right_list_fix > :nth-child(1) > a').click()
    cy.get('#user').click().type(email)
    cy.get('#password').click().type(senha)
    cy.get('#btnLogin').click()
    cy.get('.swal2-confirm').click()





  })
})