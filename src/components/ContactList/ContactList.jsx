import { List, ListItem, Button, Data } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }, index) => {
        return (
          <ListItem key={id}>
            {`${index + 1})`}
            <Data>
              {name}: {number}
            </Data>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
