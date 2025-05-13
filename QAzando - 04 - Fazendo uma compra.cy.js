describe('template spec', () => {
  it('passes', () => {

    var nome = 'Rafael Testes'
    var sobrenome = 'Da Silva'
    var nomecompania = 'XPTO'
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

    //Acessando o carrinho
    cy.get('.col-12 > .header-action-link > :nth-child(2) > .offcanvas-toggle > .fa').click()

    //Validando  se o produto está na lista do carrinho

    // Captura o nome do produto esperado
    cy.get('.modal_product_content_one > h3').then(($el) => {
      const produtoEsperado = $el.text().trim();

      // Pega todos os itens do carrinho
      cy.get('.offcanvas-wishlist-item-link').then(($itens) => {
        const produtosNoCarrinho = [...$itens].map(item => item.innerText.trim());

        if (produtosNoCarrinho.includes(produtoEsperado)) {
          cy.log('Produto está no carrinho');
        } else {
          cy.log('Produto NÃO está no carrinho');
        }

        cy.get('.offcanvas-cart-action-button > :nth-child(2) > .theme-btn-one').click()

        //Informando dados de Pagamento

        cy.get('#fname').click().type(nome)
        cy.get('#lname').click().type(sobrenome)
        cy.get('#cname').click().type(nomecompania)
        cy.get('#email').click().type(email)












      })
    })
  })
})
