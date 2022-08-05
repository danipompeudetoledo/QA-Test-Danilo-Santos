import { faker } from "@faker-js/faker";
import signup from "../support/pages/signup";
import signupPage from "../support/pages/signup";

describe("mMy account", function () {
 
  context(
    "When there is a new user and it doesn't have account yet ",
    function () {
      const user = {
        email: "japtpionMypn@gmail.com",
        password: "tvm@nchete1988",
      };

      it("Should register succesfully", function () {
        signupPage.go();
        signupPage.form(user);

        signupPage.submit();

        signupPage.confirmationHaveText("Hello");
      });
    }
  );
});

context("When the email has already exist", function () {
  const user = {
    email: "daniosa@gmail.com",
    password: "pwd123@1990@1001",
  };

  it("Should display an alert email already exist", function () {
    signupPage.go();
    signupPage.form(user);
    signupPage.submit();
    signupPage.alert.HaveText(
      "An account is already registered with your email address. Please login."
    );
  });
});

context("When the e-mail typed wrongly", function () {
  const user = {
    email: "danioqjesuspaPosagmail.com",
    password: "http$@192878945",
  };

  it("Should display an alert", function () {
    signupPage.go();
    signupPage.form(user);
    signupPage.submit();
    signupPage.alertPopUP("inclua um @ no endereço de e-mail.");

    //sempre que testar, colocar um email novo
  });
});

const user = {
  name: "Isabela",
  email: "isahaadpgmail.com",
  password: "pwd123@1990@1001",
};

context("When the password is too short", function () {
  const passwords = ["1", "2a", "ab3", "abc4", "ab#c5"];

  beforeEach(function () {
    signupPage.go();
  });

  passwords.forEach(function (p) {
    it("Should not reggister with " + p, function () {
      const user = { email: "sandra@gmail.com", password: p };

      signupPage.form(user);
      signupPage.submit();
    });
  });

  afterEach(function () {
    signupPage.alertHint(
      'The password should be at least seven characters long. To make it stronger, use upper and lower case letters, numbers and symbols like ! " ? $ % ^ & )'
    );
  });
});

context(" When all fieds are blank", function () {
  const alertMessages = "Error: Please provide a valid email address.";

  it("Should display " + alertMessages.toLowerCase(), function () {
    signupPage.go();
    signupPage.submit();
    signupPage.alert.HaveText("Error: Please provide a valid email address.");
  });
});
