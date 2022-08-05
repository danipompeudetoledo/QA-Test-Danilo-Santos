import shopPage from "../support/pages/shop";

describe("Shopping", function () {
  context("Validate the working of sorting functionality", function () {
    it("Verify that sorting works correctly, sorting by price: low to high ", function () {
      shopPage.go();
      shopPage.sortingLowToHigh();
    });

    it("Verify  that sorting works correctly, sorting by price: high to low ", function () {
      shopPage.go();
      shopPage.sortingHighToLow();
    });

    context("Validate the working of add to cart functionality", function () {
      it("Product should be successfuly displayed in the shop Cart", function () {
        shopPage.go();
        shopPage.addingToBasket();
        shopPage.viewBasket();
      });
      context("Validate the product buy flow", function () {
        const user = {
          firstName: "João",
          lastName: "Paulo",
          company: "Amazon",
          email: "jped@gmail.com",
          phone: "551145875452",
          address: "Paulista Avenue",
          city: "São Paulo",
          postcode: "06395450",
          password: "D@nilo$1990B#",
        };
        it.only("Verify that user can buy products that were added to his cart", function () {
          shopPage.go();
          shopPage.addingToBasket();
          shopPage.viewBasket();
          shopPage.checkout();
          shopPage.fillBillinDetails(user);
        });

        it("Verify... ", function () {
          shopPage.go();
          shopPage.sortingHighToLow();
        });
      });
    });
  });
});
Cypress._.times(500, (index) => {
  it(`selects ${index} out of 10`, () => {
    cy.visit("/shop");
    cy.get(
      ".price_slider_wrapper, .ui-slider-handle ui-corner-all ui-state-default"
    )
      .invoke("val", index)
      .should("have.value", index)
      .trigger("change");

    cy.contains(".from", "-", ".to", index);
    cy.wait(500);
  });
});
