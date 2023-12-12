class ProductDetails {

  elements = {
    title: () => cy.get("h2.name"),
    price: () => cy.get(".price-container"),
    image: () => cy.get(".product-image img"),
    addToCartBtn: () => cy.contains("Add to cart")
  }

  getTitle() {
    return this.elements.title()
  }

  getPrice() {
    return this.elements.price()
  }

  getImage() {
    return this.elements.image()
  }

  addToCart() {
    this.elements.addToCartBtn().click()
  }

}

export const productDetails = new ProductDetails