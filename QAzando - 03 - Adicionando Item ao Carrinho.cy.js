describe('template spec', () => {
  it('passes', () => {

    var nome = 'Rafael Testes'
    var email = 'rafaeltestes@testes.com.br'
    const senha = '123456789'
    const tamanho = 'small'  //Opções Disponiveis ( small , medium , learz e xl )


    //resolução do teste
    cy.viewport(1920, 1080);

    //Visitando o site
    cy.visit('https://automationpratice.com.br/#!')

    //Fazendo o Login
    cy.get('.right_list_fix > :nth-child(1) > a').click()
    cy.get('#user').click().type(email)
    cy.get('#password').click().type(senha)
    cy.wait(2000)
    cy.screenshot('01 - Tela Login')
    cy.get('#btnLogin').click()
    cy.screenshot('02 - Login com Sucesso')
    cy.wait(5000)
    cy.get('.swal2-confirm').click()
    cy.wait(3000)

    //Escolhendo o Item
    cy.screenshot('03 - Tela Pós Login')
    cy.get('.col-lg-3.col-md-6 > .footer_one_widget > ul > :nth-child(1) > a').click()
    cy.screenshot('04 - Tela Home')
    cy.get('#video > .row > :nth-child(1) > .product_item_two > .product_item_inner > .product_img_wrap > a > img').click()

    //Interagindo com o dropbox
    cy.get('.customs_sel_box').select(tamanho);
    cy.get('#product_single_two').screenshot('05 - Foto do Produto')

    //Adicionando ao carrinho
    cy.get('.links_Product_areas > .theme-btn-one').click()
    cy.get('.swal2-container').screenshot('06 - Adicionado com Sucesso')


    //Teste2


  })
})