class Cart {

  elements = {
    pageTitle: () => cy.contains("Products"),
    totalPrice: () => cy.get("#totalp"),
    placeOrderBtn: () => cy.get("button[data-target='#orderModal']"),
    tableTitle: () => cy.get("#tbodyid td:nth-child(2)"),
    tablePrice: () => cy.get("#tbodyid td:nth-child(3)")
  }

  getPageTitle() {
    return this.elements.pageTitle()
  }

  getTotalPrice() {
    return this.elements.totalPrice()
  }

  getTableTitle() {
    return this.elements.tableTitle()
  }

  getTablePrice() {
    return this.elements.tablePrice()
  }

  placeOrder() {
    this.elements.placeOrderBtn().click()
  }
}

export const cart = new Cart