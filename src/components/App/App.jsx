import React, { Component } from 'react';
import Notiflix from 'notiflix';
import shortid from 'shortid';
import { Phonebook } from './App.styled';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  checkExistContact = name => {
    return this.state.contacts.find(contacts => contacts.name === name);
  };

  addContact = (name, number) => {
    const isExist = this.checkExistContact(name);

    if (isExist) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const formatedFiltered = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(formatedFiltered)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;

    const filteredContacts = this.getVisibleContacts();

    return (
      <Phonebook>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Phonebook>
    );
  }
}

export default App;
