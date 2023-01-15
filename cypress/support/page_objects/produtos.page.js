

class produtosPage {
   adicionarProduto1(){
     cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('[class="product-block grid"]').contains('Agasalho jhony quest').click()
    cy.get('.single_add_to_cart_button').click()
    };

    adicionarProduto2(){
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(3) > .page-numbers').click()
    cy.get('[class="product-block grid"]').contains('Awesome Fresh Computer').click()
    cy.get('.single_add_to_cart_button').click()
    };

    adicionarProduto3(){
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(3) > .page-numbers').click()
    cy.get('[class="product-block grid"]').contains('Awesome Fresh Hat').click()
    cy.get('.single_add_to_cart_button').click()
    };



    adicionarProduto4(){
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(3) > .page-numbers').click()
    cy.get('[class="product-block grid"]').contains('Awesome Frozen Pizza').click()
    cy.get('.single_add_to_cart_button').click()
    };


}


export default new produtosPage()