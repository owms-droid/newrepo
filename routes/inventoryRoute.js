// Needed Resources 
const validate = require("../utilities/inventory-validation")
const express = require("express")
const router = new express.Router()
const invController = require("../controllers/invController")
const utilities = require("../utilities/")

// Route to build inventory by classification view (PUBLIC)
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));

// Route to build vehicle detail view (PUBLIC)
router.get("/detail/:inv_id", utilities.handleErrors(invController.buildByInventoryId));

// Route to build inventory management view (PROTECTED)
router.get("/", utilities.checkAccountType, utilities.handleErrors(invController.buildManagement));

// Route to build add classification view (PROTECTED)
router.get("/add-classification", utilities.checkAccountType, utilities.handleErrors(invController.buildAddClassification));

// Route to process add classification (PROTECTED)
router.post(
  "/add-classification",
  utilities.checkAccountType,
  validate.classificationRules(),
  validate.checkClassificationData,
  utilities.handleErrors(invController.addClassification)
);

// Route to build add inventory view (PROTECTED)
router.get("/add-inventory", utilities.checkAccountType, utilities.handleErrors(invController.buildAddInventory));

// Route to process add inventory (PROTECTED)
router.post(
  "/add-inventory",
  utilities.checkAccountType,
  validate.newInventoryRules(),
  validate.checkInventoryData,
  utilities.handleErrors(invController.addInventory)
);

// Route to modify inventory (PROTECTED)
router.get("/edit/:inv_id", utilities.checkAccountType, utilities.handleErrors(invController.buildEditInventory));

//Route to get inventory JSON (PROTECTED)
router.get("/getInventory/:classification_id", utilities.checkAccountType, utilities.handleErrors(invController.getInventoryJSON));

//Route to process update inventory (PROTECTED)
router.post("/update/", utilities.checkAccountType, validate.newInventoryRules(), validate.checkUpdateData, utilities.handleErrors(invController.updateInventory));

//Route to build delete inventory view (PROTECTED)
router.get("/delete/:inv_id", utilities.checkAccountType, utilities.handleErrors(invController.buildDeleteInventory));

//Route to delete inventory (PROTECTED)
router.delete("/delete/:inv_id", utilities.checkAccountType, utilities.handleErrors(invController.deleteInventory));

//Route to post delete inventory (PROTECTED)
router.post("/delete/:inv_id", utilities.checkAccountType, utilities.handleErrors(invController.deleteInventory));

module.exports = router;