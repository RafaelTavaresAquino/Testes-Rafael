describe('Login e Adicionando Produto no Carrinho', () => {
  it('Login e Adicionando Produto no Carrinho', () => {

    var email = 'antoniotestes@cypress.com'
    const senha = '123456789aA@'
    var nomeusuario = 'Antonio Testes Da Silva'
    const quantidadecompra = '5'

    //resolução do teste
    cy.viewport(1920, 1080);

    //Visitando o site
    cy.visit('https://teststore.automationtesting.co.uk/index.php')
    cy.wait(2000)

    //Fazendo o login
    cy.get('a > .hidden-sm-down').click()
    cy.get('#field-email').click().type(email)
    cy.get('#field-password').click().type(senha)
    cy.get('#submit-login').click()

    //Validando Usuário Logado
    cy.get('.account > .hidden-sm-down').then(($el) => {
      const nomeExibido = $el.text().trim();

      if (nomeExibido === nomeusuario) {
        cy.log('Usuário Correto');
      } else {
        cy.log('Usuário Errado');
      }
    })

    //Produto Camisa Cor Preta - 5 Unidades
    cy.get(':nth-child(2) > .products > :nth-child(1) > .product-miniature > .thumbnail-container > .thumbnail-top > .thumbnail > picture > img').click()
    cy.get(':nth-child(2) > label > .input-color').click()
    cy.get('#quantity_wanted').clear().type(quantidadecompra)
    cy.get('.add > .btn').click()
    cy.get('.cart-content-btn > .btn-secondary').click()

    //Validação da quantidade de itens no carrinho
    cy.get('a > .cart-products-count').then(($el) => {
      const quantidadecarrinho = $el.text().trim();
      const numerocarrinho = quantidadecarrinho.replace(/[()]/g, '')

      if (numerocarrinho === quantidadecompra) {
        cy.log('Quantidade Correta');
      } else {
        cy.log('Quantidade Errada');
      }
    })


  })


})
