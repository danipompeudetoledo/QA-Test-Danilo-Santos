import { el } from "./elements";

class ShopPage {
 
  go() {
    cy.visit("/shop/");
  }

  seeProductDetails() {
    cy.get(el.productDetails).click();
  }

  addingToBasket() {
    cy.get("#content");
    cy.get(".woocommerce-ordering");
    cy.get(".price");
    cy.contains("h3", "Android Quick Start Guid").parent().click();
    cy.contains("h1", "Android Quick Start Guide");
    cy.contains("button", "Add to basket").click();
  }

  viewBasket() {
    cy.get(".woocommerce-message").children().click();
    cy.contains("h2", "Basket Totals"); //verifying whether the product it's in the cart page
  }
  checkout() {
    cy.contains("div", "Proceed to Checkout").click();
  }

  fillBillinDetails(user) {
    cy.get("#billing_first_name").type(user.firstName);
    cy.get("#billing_last_name").type(user.lastName);
    cy.get("#billing_company").type(user.company);
    cy.get("#billing_email").type(user.email);
    cy.get("#billing_phone").type(user.phone);
    cy.contains("option,", "Select a country",{ force: true })
      .parent('#billing_country',{ force: true })
      .select("Brazil", { force: true })
      .should("have.value", "BR",{ force: true }); //country
    cy.get("#billing_address_1").type(user.address);
    cy.get("#billing_city").type(user.city);
    cy.contains("div", "São Paulo").click(); //State
    cy.get('input[name="billing_postcode"]')
      .click({ force: true })
      .type(user.postcode);

    cy.get("input[name=createaccount]")
      .click({ force: true })
      .should("be.checked");

    cy.get("#account_password").click({ force: true }).type(user.password);

    cy.get("input[value=cod]").click({ force: true }).should("be.checked");

    cy.get("#place_order").click({ force: true });
  }

  sortingLowToHigh() {
    cy.get(el.sortingLowToHigh)
      .select("Sort by price: low to high")
      .should("have.value", "price");
  }

  sortingHighToLow() {
    cy.get(el.sortingHighToLow)
      .select("Sort by price: high to low")
      .should("have.value", "price-desc");
  }
}
export default new ShopPage();
