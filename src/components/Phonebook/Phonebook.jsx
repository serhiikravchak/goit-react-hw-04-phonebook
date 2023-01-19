import { Form, Input, Label } from "./Phonebook.styled";
import PropTypes from 'prop-types';
import { useState } from "react";


export const Phonebook = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({
      name: name,
      number: number,
    });
    setName('');
    setNumber('')
    evt.target.reset();
  };

   const handleNameInput = evt => {
     setName(evt.target.value );
   };

   const handleNumberInput = evt => {
     setNumber(evt.target.value );
  };
  
  return (
          <Form onSubmit={handleSubmit}>
            <Label>
              Name
              <Input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={handleNameInput}
                required
              />
            </Label>
            <Label>
              Number
              <Input
                type="tel"
                        name="number"
                        value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={handleNumberInput}
                required
              />
            </Label>
            <button type="submit">Add to contacts</button>
          </Form>
        )
}

// export class Phonebook extends Component{
//     state = {
//         name: '',
//         number: ''

//     }

    // handleSubmit = evt => {
    //     evt.preventDefault();
    //     this.props.onSubmit({
    //       name: this.state.name,
    //       number: this.state.number,
    //     });
    //     this.setState({ name: '', number: '' });
    //     evt.target.reset();          
    // }

   


    
        
    
    

//     render() {
//         const { name, number } = this.state;
//         
//     }
// }

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};