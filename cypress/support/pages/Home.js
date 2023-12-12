class Home {

  elements = {
    endpoint: () => cy.visit("/"),
    carouselItems: () => cy.get(".carousel-item"),
    carouselBtn: () => cy.get(".carousel-control-next-icon"),
    contactLink: () => cy.contains("Contact"),
    aboutUsLink: () => cy.get("[data-target='#videoModal']"),
    cartLink: () => cy.get("#cartur"),
    loginLink: () => cy.get("#login2"),
    signUpLink: () => cy.get("#signin2"),
    categoryItems: () => cy.get(".card")
  }

  visit() {
    this.elements.endpoint()
  }

  goToContact() {
    this.elements.contactLink().click()
  }

  goToCart() {
    this.elements.cartLink().click()
  }

  gotToAboutUs() {
    this.elements.aboutUsLink().click()
  }

  goToLogin() {
    this.elements.loginLink().click()
  }

  goToSignUp() {
    this.elements.signUpLink().click()
  }

  getCarouselItems() {
    return this.elements.carouselItems()
  }

  nextCarouselItem() {
    this.elements.carouselBtn().click()
  }

  clickCategory(name) {
    cy.contains(name).click()
  }

  getCategoryItems() {
    return this.elements.categoryItems()
  }
}

export const home = new Home