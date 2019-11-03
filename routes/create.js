/*
| Router for /create 
*/
const express = require("express");
const router = express.Router();

const createController = require("../controllers/createController");
const isAuth = require("../middleware/is-auth");

router.get("/ingredients/new", isAuth, createController.newIngredient);
router.get("/ingredients/edit/:id", isAuth, createController.editIngredient);
router.get("/tacos/new", isAuth, createController.newTaco);
router.get("/tacos/edit/:id", isAuth, createController.editTaco);
router.post("/ingredients", isAuth, createController.createIngredient);
router.patch("/ingredients", isAuth, createController.updateIngredient);
router.post("/tacos", isAuth, createController.createTaco);
router.patch("/tacos", isAuth, createController.updateTaco);
router.get("/", createController.createMenu);

module.exports = router;
