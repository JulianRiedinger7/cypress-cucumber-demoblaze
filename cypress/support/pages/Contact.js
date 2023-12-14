class Contact {

  elements = {
    emailInput: () => cy.get("#recipient-email"),
    nameInput: () => cy.get("#recipient-name"),
    messageInput: () => cy.get("#message-text"),
    sendMessageBtn: () => cy.contains("Send message")
  }

  getEmailInput() {
    return this.elements.emailInput()
  }

  getNameInput() {
    return this.elements.nameInput()
  }

  getMessageInput() {
    return this.elements.messageInput()
  }

  getSendMessageBtn() {
    return this.elements.sendMessageBtn()
  }
}

export const contact = new Contact