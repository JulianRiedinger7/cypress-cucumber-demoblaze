class Checkout {

  elements = {
    nameInput: () => cy.get("#name"),
    countryInput: () => cy.get("#country"),
    cityInput: () => cy.get("#city"),
    cardInput: () => cy.get("#card"),
    monthInput: () => cy.get("#month"),
    yearInput: () => cy.get("#year"),
    purchaseBtn: () => cy.contains("Purchase"),
    modalTitle: () => cy.get(".sweet-alert h2"),
    modalInfo: () => cy.get(".sweet-alert p.lead")
  }

  enterName(name) {
    this.elements.nameInput().type(name)
  }

  enterCountry(country) {
    this.elements.countryInput().type(country)
  }

  enterCity(city) {
    this.elements.cityInput().type(city)
  }

  enterCard(card) {
    this.elements.cardInput().type(card)
  }

  enterMonth(month) {
    this.elements.monthInput().type(month)
  }

  enterYear(year) {
    this.elements.yearInput().type(year)
  }

  finishPurchase() {
    this.elements.purchaseBtn().click()
  }

  getModalTitle() {
    return this.elements.modalTitle()
  }

  getModalInfo() {
    return this.elements.modalInfo()
  }

}

export const checkout = new Checkout