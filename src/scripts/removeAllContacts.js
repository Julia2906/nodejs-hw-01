import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    const newContacts = [];
    await writeContacts(newContacts);
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
