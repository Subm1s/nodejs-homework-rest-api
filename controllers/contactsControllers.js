const { Contacts } = require("../db/contactsModel");
const {
  getContacts,
  getContactsById,
  changeContactById,
  addNewContact,
  deleteContactById,
  updateStatusContact,
} = require("../services/contactsService");
const getContactsController = async (req, res, next) => {
  const contacts = await getContacts();
  if (contacts.length === 0) {
    return res.status(400).json({ message: "contacts not found" });
  }
  return res.status(200).json({ contacts });
};

const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactsById(contactId);
  console.log(contact);
  if (!contact) {
    return res.status(400).json({ message: "Not found" });
  }
  res.status(200).json({ contact, message: "Success" });
};

const addNewContactController = async (req, res, next) => {
  const { name, email, phone, favorite } = req.body;

  const contact = await addNewContact(name, email, phone, favorite);
  res.status(201).json({ contact, message: "New contact add successfully!!!" });
};

const deleteContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await deleteContactById(contactId);
  if (!contact) {
    return res.status(404).json({ message: "Not found!!!" });
  }
  res.status(200).json({ message: "Delete successfully!!!" });
};

const changeContactByIdController = async (req, res, next) => {
  const { name, email, phone, favorite } = req?.body;
  const id = req.params.contactId;
  const contact = await changeContactById(id, name, email, phone, favorite);
  if (!contact) {
    return res.status(404).json({ message: "Not found contact to update =(" });
  }
  return res.status(200).json({ contact, message: "Update successfully!!!" });
};

const updateStatusContactController = async (req, res, next) => {
  const { favorite } = req?.body;
  const id = req.params.contactId;
  const contact = await Contacts.findByIdAndUpdate(id, {
    $set: { favorite },
  });
  return res.status(200).json({ contact, message: "Success!!!" });
};

module.exports = {
  getContactsController,
  getContactByIdController,
  addNewContactController,
  deleteContactByIdController,
  changeContactByIdController,
  updateStatusContactController,
};
