const utilities = require("../utilities/")

/* ****************************************
*  Deliver login view
* *************************************** */
async function buildLogin(req, res, next) {
  let nav = await utilities.getNav()
  res.render("account/buildLogin", {
    title: "Login",
    nav,
  })
}

/* ****************************************
*  Deliver register view
* *************************************** */
async function buildRegister(req, res, next) {
  let nav = await utilities.getNav()
  res.render("account/buildRegister", {
    title: "Register",
    nav,
    errors: null
  })
}

module.exports = { buildLogin, buildRegister }

/* You are here, continue from this file*/