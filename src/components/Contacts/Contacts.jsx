import { Item, List, Btn } from "./Contacts.styled";
import PropTypes from 'prop-types';


export const Contacts = ({ contactList, onDelete }) => {
    return (
        <List>
          {contactList.map(({ id, name, number }) => {
            <Item key={id}>
              {/* <p>{name}</p> */}
                {name}: <span>{number}</span>
                <Btn type="button" onClick={() => onDelete(id)}>
                  Delete
                </Btn>
              </Item>
            
          })}
        </List>
    );
}

// Contacts.propTypes = {
//   contactList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };