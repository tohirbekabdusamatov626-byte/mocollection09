const express = require("express");
const router = express.Router();
const controller = require("../controllers/chessboard.controller");
const validate = require("../middlewares/validate");
const { requireAuth } = require("../middlewares/auth.middleware");
const {
  createCheesboardSchema,
  updateCheesboardSchema,
} = require("../validations/cheesboard.validation");

router.use(requireAuth);

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validate(createCheesboardSchema), controller.create);
router.put("/:id", validate(updateCheesboardSchema), controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
