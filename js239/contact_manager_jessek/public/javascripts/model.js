export class Model {
  constructor(view) {
    this.view = view;
  }

  async displayContacts(substr) {
    try {
      let contacts = await this.getData('http://localhost:3000/api/contacts');
      if (substr) {
        contacts.forEach(contact => {
          contact.string = Object.values(contact).toString().toLowerCase();
        })
        contacts = contacts.filter(contact => {
          return contact.string.includes(substr);
        });
      }
      this.view.displayContacts(contacts);
      return true;
    } catch (error) {
      console.log('Failed to get all contacts data', error);
    }
  }

  async populateTags() {
    try {
      const contacts = await this.getData('http://localhost:3000/api/contacts');
      let allTags = [];
      contacts.forEach(contact => {
        if (contact.tags) {
          let tags = contact.tags.split(',');
          tags.forEach(tag => {
            if (!allTags.includes(tag)) allTags.push(tag);
          });
        }
      });
      this.view.populateTags(allTags);
    } catch (error) {
      console.log('Failed to get tags data', error);
    }
  }

  async checkTags(id) {
    try {
      const contact = await this.getData(`http://localhost:3000/api/contacts/${id}`);
      let tags = contact.tags.split(',');
      this.view.checkTags(tags);
    } catch (error) {
      console.log('Failed to get checked tags for contact', error);
    }
  }
  
  async populateContactInputs(id) {
    try {
      const data = await this.getData(`http://localhost:3000/api/contacts/${id}`);
      this.view.populateContactInputs(data);
      return true;
    } catch (error) {
      console.log('Failed to get single contact data via id', error);
    }
  }

  async addContact(data) {
    try {
      let newContact = await this.postData('http://localhost:3000/api/contacts/', data);
      this.view.clearContacts();
      this.displayContacts();
      return true;
    } catch (error) {
      console.log('Failed to save new contact', error);
    }
  }

  async deleteContact(id) {
    try {
      let response = await this.deleteData(`http://localhost:3000/api/contacts/${id}`);
      return response;
    } catch (error) {
      console.log('Failed to delete contact', error);
    }
  }

  async updateContact(data, id) {
    try {
      let updatedContact = await this.putData(`http://localhost:3000/api/contacts/${id}`, data);
      this.view.clearContacts();
      this.displayContacts();
      return true;
    } catch (error) {
      console.log('Failed to update contact', error);
    }
  }

  async getData(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }

  async postData(url, info) {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: info,
    });
    let data = await response.json();
    return data;
  }

  async deleteData(url) {
    let response = await fetch(url, { method: 'DELETE' });
    return response;
  }

  async putData(url, info) {
    let response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: info,
    });
    let data = await response.json();
    return data;
  }
}

