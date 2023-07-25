import { Item } from './ContactList.styled';

const ContactList = ({ getFilteredContacts, deleteContact }) => {
  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <Item key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </Item>
        );
      })}
    </ul>
  );
};

export default ContactList;
