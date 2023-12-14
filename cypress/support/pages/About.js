class About {

  elements = {
    video: () => cy.get("#example-video") 
  }

  getVideo() {
    return this.elements.video()
  }

}

export const about = new About