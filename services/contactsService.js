const { Contacts } = require("../db/contactsModel");

const getContacts = async () => {
  const contacts = await Contacts.find({});
  return contacts;
};
const getContactsById = async (contactId) => {
  const contact = await Contacts.findById(contactId).exec();
  return contact;
};
const addNewContact = async (name, email, phone, favorite) => {
  const contact = new Contacts({ name, email, phone, favorite });
  await contact.save();
  return contact;
};
const deleteContactById = async (contactId) => {
  const contact = await Contacts.findByIdAndDelete(contactId);
  return contact;
};
const changeContactById = async (id, name, email, phone, favorite) => {
  const contact = await Contacts.findByIdAndUpdate(id, {
    $set: { name, email, phone, favorite },
  });
  return contact;
};
const updateStatusContact = () => {};

module.exports = {
  getContacts,
  getContactsById,
  addNewContact,
  deleteContactById,
  changeContactById,
  updateStatusContact,
};
