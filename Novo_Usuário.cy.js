describe('template spec', () => {
  it('passes', () => {

    var nome = 'Rafael Testes'
    var email = 'rafaeltestes@testes.com.br'
    const senha = '123456789'


    //resolução do teste
    cy.viewport(1920, 1080);

    //Visitando o site
    cy.visit('https://automationpratice.com.br/#!')


    //Cadastrando um novo usuário
    cy.get('.right_list_fix > :nth-child(2) > a').click()

    //Informando Dados
    cy.get('#user').click().type(nome)
    cy.get('#email').click().type(email)
    cy.get('#password').click().type(senha)

    //Salvando Informações
    cy.get('#btnRegister').click()
    cy.wait(5000)
    cy.get('.swal2-confirm').click()


  })
})