describe("go to comments", function () {

  it("open habr.com", function () {
    cy.visit("https://habr.com/ru/")
  })

  it("search", function () {
    cy.get('button#search-form-btn').click()
    cy.get('input#search-form-field').type('Machine learning{enter}')
  })

  it("show post", function () {
    cy.get('li#post_547326 a.post__title_link').click()
  })

  it("scroll into view comments", function () {
    cy.get('.comments-section__head-title').scrollIntoView({ offset: { top: -150, left: 0 } })
  })
})
