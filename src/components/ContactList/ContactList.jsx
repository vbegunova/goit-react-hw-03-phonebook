import PropTypes from 'prop-types';
import { Item } from './ContactList.styled';

const ContactList = ({ filteredContacts, deleteContact }) => {
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

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ContactList;
