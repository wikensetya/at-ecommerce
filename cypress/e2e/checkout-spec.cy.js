describe('User can search then checkout the product', () => {
  it('Verify user can search then checkout the product', () => {
    /** User can open homepage **/
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/')

    /** User can search the product **/
    cy.get('input#search.input-text').type('sample product{enter}')
    cy.get('[data-ui-id="page-title-wrapper"]').should('contain', 'Search results for: \'sample product\'')

    /** User can select the product **/
    cy.get('.product-item-name').contains('Voyage Yoga Bag').click()
    cy.url().should('include', 'voyage-yoga-bag')
    cy.get('[data-ui-id="page-title-wrapper"]').should('contain', 'Voyage Yoga Bag')

    /** User add the product to cart **/
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Ui/templates/**').as('apiTemplates')
    cy.wait('@apiTemplates', {timeout: 10000}).its('response.statusCode').should('eq', 200)
    cy.get('button#product-addtocart-button').scrollIntoView().should('be.visible').click()
    cy.scrollTo('top')
    cy.get('[data-ui-id="message-success"]').should('contain', 'You added Voyage Yoga Bag to your shopping cart')

    /** User check the product in the cart **/
    cy.get('.minicart-wrapper').contains('My Cart').click()
    cy.get('div.minicart-items-wrapper > ol#mini-cart > li.item.product.product-item > div.product > div.product-item-details').should('contain', 'Voyage Yoga Bag')

    /** User check out the product **/
    cy.get('#top-cart-btn-checkout').contains('Proceed to Checkout').click()
    // cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Ui/templates/block-loader.html').as('apiBlockLoader')
    // cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html').as('apiModalPopup')
    // cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-slide.html').as('apiModalSlide')
    // cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-custom.html').as('apiModalCustom')
    // cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Ui/templates/tooltip/tooltip.html').as('apiTooltip')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/onepage.html').as('apiOnepage')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Ui/templates/collection.html').as('apiCollection')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Vertex_AddressValidation/template/validation-result.html').as('apiValidationResult')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Ui/template/messages.html').as('apiMessages')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/sidebar.html').as('apiSidebar')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Customer/template/authentication-popup.html').as('apiAuthenticationPopup')
    // cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/authentication.html').as('apiAuthentication')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/summary.html').as('apiSummary')
    // cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/payment.html').as('apiPayment')
    // cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Captcha/template/checkout/captcha.html').as('apiCaptcha')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/estimation.html').as('apiEstimation')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/summary/totals.html').as('apiTotals')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/summary/cart-items.html').as('apiCartItems')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/payment-methods/list.html').as('apiPaymentList')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_SalesRule/template/payment/discount.html').as('apiPaymentDiscount')
    // cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Tax/template/checkout/summary/subtotal.html').as('apiSubtotal')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_SalesRule/template/summary/discount.html').as('apiSummaryDiscount')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Tax/template/checkout/summary/shipping.html').as('apiSummaryShipping')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Weee/template/checkout/summary/weee.html').as('apiWeee')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Tax/template/checkout/summary/tax.html').as('apiTax')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Tax/template/checkout/summary/grand-total.html').as('apiGrandTotal')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Vertex_Tax/template/checkout/cart/totals/tax-messages.html').as('apiTaxMessages')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/summary/item/details.html').as('apiDetails')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/summary/item/details/thumbnail.html').as('apiThumbnail')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Tax/template/checkout/summary/item/details/subtotal.html').as('apiDetailsSubtotal')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/summary/item/details/message.html').as('apiDetailsMessage')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Weee/template/checkout/summary/item/price/row_excl_tax.html').as('apiRowExclTax')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/shipping.html').as('apiShipping')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Amazon_Payment/template/form/element/email.html').as('apiEmail')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/shipping-address/list.html').as('apiShippingList')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/shipping-address/form.html').as('apiForm')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Shipping/template/checkout/shipping/shipping-policy.html').as('apiShippingPolicy')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Vertex_AddressValidation/template/validation-message.html').as('apiValidationMessage')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/progress-bar.html').as('apiProgressBar')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/shipping-information.html').as('apiShippingInformation')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Ui/templates/form/element/helper/tooltip.html').as('apiHelperTooltip')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Ui/templates/form/field.html').as('apiField')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Ui/templates/group/group.html').as('apiGroup')
    // cy.intercept('GET', '**/frontend/Magento/luma/en_US/Amazon_Payment/template/shipping-address/inline-form.html').as('apiInlineForm')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Ui/templates/form/element/input.html').as('apiInput')
    // cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Ui/templates/form/element/select.html').as('apiSelect')
    // cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/shipping-address/shipping-method-list.html').as('apiShippingMethodList')
    // cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Checkout/template/shipping-address/shipping-method-item.html').as('apiShippingMethodItem')
    cy.intercept('GET', '**/frontend/Magento/luma/en_US/Magento_Tax/template/checkout/shipping_method/price.html').as('apiPrice')
    cy.wait([
      '@apiTemplates',
      // '@apiBlockLoader',
      // '@apiModalPopup',
      // '@apiModalSlide',
      // '@apiModalCustom',
      // '@apiTooltip',
      '@apiOnepage',
      '@apiCollection',
      '@apiValidationResult',
      '@apiMessages',
      '@apiSidebar',
      '@apiAuthenticationPopup',
      // '@apiAuthentication',
      '@apiSummary',
      // '@apiPayment',
      // '@apiCaptcha',
      '@apiEstimation',
      '@apiTotals',
      '@apiCartItems',
      '@apiPaymentList',
      '@apiPaymentDiscount',
      // '@apiSubtotal',
      '@apiSummaryDiscount',
      '@apiSummaryShipping',
      '@apiWeee',
      '@apiTax',
      '@apiGrandTotal',
      '@apiTaxMessages',
      '@apiDetails',
      '@apiThumbnail',
      '@apiDetailsSubtotal',
      '@apiDetailsMessage',
      '@apiRowExclTax',
      '@apiShipping',
      '@apiEmail',
      '@apiShippingList',
      '@apiForm',
      '@apiShippingPolicy',
      '@apiValidationMessage',
      '@apiProgressBar',
      '@apiShippingInformation',
      '@apiHelperTooltip',
      '@apiField',
      '@apiGroup',
      // '@apiInlineForm',
      '@apiInput',
      // '@apiSelect',
      // '@apiShippingMethodList',
      // '@apiShippingMethodItem',
      '@apiPrice'
    ],{timeout: 10000}).each((apiFrontend) => {
      const response = apiFrontend.response
      cy.log(JSON.stringify(response))
      if (response && response.statusCode) {
        expect(response.statusCode).to.eq(200)
      } else {
        cy.log('Response status code is not 200.')
      }
    })
    cy.url().should('include', '/checkout/')
    cy.get('div.block.items-in-cart').contains('Item in Cart').click()
    cy.get('.product-item-name-block').should('be.exist').and('contain', 'Voyage Yoga Bag')
  })
})