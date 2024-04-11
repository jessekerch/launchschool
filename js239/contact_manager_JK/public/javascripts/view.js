export class View {
  constructor(controller) {
    this.setHandlebarsTemplates();
    this.controller = controller;
  }

  clearContacts() {
    const main = document.querySelector('div.main');
    main.replaceChildren();
  }
  
  resetForm() {
    const form = document.querySelector('form');
    const searchBar = document.querySelector('#contact-search');
    searchBar.value = '';
    form.reset();
    form.dataset.action = 'save';
    form.querySelector('h1').innerText = 'Add New Contact';
  }
  
  displayContacts(contacts) {
    const main = document.querySelector('div.main');

    contacts.forEach(contact => {
      if (contact.tags) {
        contact.tags = String(contact.tags).split(',');
      } else {
        contact.tags = [];
      }
      let contactHTML = this.contactTemplate(contact);
      main.insertAdjacentHTML('beforeend', contactHTML);
    });
  }

  confirmDelete(contactName, id) {
    let confirmationWindow = document.querySelector('div.delete-confirmation');
    confirmationWindow.classList.add('open');
    confirmationWindow.querySelector('#contact-name').innerText = contactName;
    confirmationWindow.querySelector('button[name="delete"').dataset.contactId = id;
  }
  

  openSavePopup() {
    this.resetForm();
    document.querySelector('div.popup').classList.add('open');
    this.clearContacts();
  }

  populateTags(tags) {
    const tagsDiv = document.querySelector('div.tag-checkboxes');
    let legend = document.createElement('legend');
    legend.innerText = 'Tags: ';
    tagsDiv.replaceChildren(legend);
    tags.forEach(tag => {
      let tagHTML = this.tagTemplate(tag);
      tagsDiv.insertAdjacentHTML('beforeend', tagHTML);
    })
  }

  checkTags(tags) {
    let tagsDiv = document.querySelector('div.popup-tags');
    tagsDiv.querySelectorAll('input').forEach(input => {
      if (tags.includes(input.id)) input.checked = true;
    })
  }

  async populateContactInputs(data) {
    const popup = document.querySelector('div.popup');
    popup.querySelector('h1').innerText = 'Edit Contact';
    popup.querySelector('form').dataset.action = 'update';
    popup.querySelector('input[name="id"]').value = data.id;
    popup.querySelector('input[name="full_name"]').value = data.full_name;
    popup.querySelector('input[name="email"]').value = data.email;
    popup.querySelector('input[name="phone_number"]').value = data.phone_number;
  }

  setHandlebarsTemplates() {
    this.contactTemplate = Handlebars.compile(document.querySelector('#contact-card-template').innerHTML);
    this.tagTemplate = Handlebars.compile(document.querySelector('#tag-template').innerHTML);
  }
}

