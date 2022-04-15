const express = require("express");

const {
  getContactsController,
  getContactByIdController,
  addNewContactController,
  deleteContactByIdController,
  changeContactByIdController,
  updateStatusContactController,
} = require("../../controllers/contactsControllers");

const {
  addPostValidation,
  patchPostValidation,
} = require("../../middlewares/middleWares");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const router = express.Router();

router.get("/", asyncWrapper(getContactsController));
router.get("/:contactId", asyncWrapper(getContactByIdController));
router.post("/", addPostValidation, asyncWrapper(addNewContactController));
router.delete("/:contactId", asyncWrapper(deleteContactByIdController));
router.put(
  "/:contactId",
  patchPostValidation,
  asyncWrapper(changeContactByIdController)
);
router.patch(
  "/:contactId/favorite",
  asyncWrapper(updateStatusContactController)
);

module.exports = router;
