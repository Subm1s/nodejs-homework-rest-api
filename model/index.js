const { Contacts } = require("../db/mongoModel");

const listContacts = async (owner) => {
  try {
    const list = await Contacts.find({ owner });
    return list;
  } catch (error) {
    console.error("error", error);
  }
};

const getContactById = async (contactId, owner) => {
  try {
    const contact = await Contacts.findOne({ _id: contactId, owner });
    return contact;
  } catch (error) {
    console.error("error", error);
  }
};

const removeContact = async (contactId, owner) => {
  try {
    const contact = await Contacts.findOneAndRemove({ _id: contactId, owner });
    return contact;
  } catch (error) {
    console.error("error", error);
  }
};

const addContact = async (body, owner) => {
  const { name, email, phone } = body;
  const favorite = body.favorite ? body.favorite : false;

  try {
    const contact = await new Contacts({ name, email, phone, favorite, owner });
    await contact.save();
    return contact;
  } catch (error) {
    console.error("error", error);
  }
};

const updateContact = async (contactId, body, owner) => {
  const { name, email, phone, favorite } = body;

  try {
    const contact = await Contacts.findOneAndUpdate(
      { _id: contactId, owner },
      {
        $set: { name, email, phone, favorite },
      }
    );
    return getContactById(contactId, owner);
  } catch (error) {
    console.error("error", error.message);
  }
};

const updateStatusContact = async (contactId, body, owner) => {
  const { favorite } = body;

  try {
    const contact = await Contacts.findOneAndUpdate(
      { _id: contactId, owner },
      {
        $set: { favorite },
      }
    );
    return getContactById(contactId, owner);
  } catch (error) {
    console.error("error", error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
