export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.bind();
    this.view.clearContacts();
    this.model.displayContacts();
  }
  
  processClick(event) {
    const action = event.target.dataset.action;
    const id = event.target.dataset.contactId;
    const contactName = event.target.dataset.contactName;
    
    switch (action) {
      case 'save-contact':
        this.view.clearContacts();
        this.model.populateTags();
        this.view.openSavePopup();
        this.view.resetForm();
        break;
        
      case 'update-contact':
        document.querySelector('div.popup').classList.add('open');
        this.view.clearContacts();
        this.view.resetForm();
        this.model.populateContactInputs(id);
        this.model.populateTags();
        this.model.checkTags(id);
        break;

      case 'delete-confirmation':
        this.view.confirmDelete(contactName, id);
        break;

        case 'delete-contact':
          this.view.clearContacts();
          this.model.deleteContact(id);
          document.querySelector('div.delete-confirmation').classList.remove('open');
          this.model.displayContacts();
          break;
  
        case 'cancel':
        document.querySelector('div.popup').classList.remove('open');
        document.querySelector('div.delete-confirmation').classList.remove('open');
        this.view.resetForm();
        this.view.clearContacts();
        this.model.displayContacts();
        break;
        
      case 'filter':
        let filter = event.target.dataset.tagName;
        let input = document.querySelector('#contact-search');
        input.value = filter;
        document.querySelector('div.nav').dispatchEvent(new Event('keyup'));
        break;
          
      default:
        break;
    }
  }
  
  processSubmit(event) {
    event.preventDefault();
    const form = document.querySelector('form');

    if (form.checkValidity()) {      
      const formData = new FormData(form);
      let serializedData = new URLSearchParams(formData);
      const id = form.querySelector('input[name="id"]').value;

      let tags = [];
      document.querySelectorAll('input[name="tags"]').forEach((input) => {
        if (input.checked === true && !tags.includes(input.name)) {
          tags.push(input.value)
        };
      })

      document.querySelector('#new-tags').value.split(',').forEach(val => {
        if (val.length > 0) tags.push(val.trim());
      });
      let tagString = tags.join(',');

      serializedData.set("tags", tagString);

      if (form.dataset.action === 'save') {
        this.model.addContact(serializedData);
      } else if (form.dataset.action === 'update') {
        this.model.updateContact(serializedData, id);
      }
    } else {
      alert('checkValidity says errors need correcting!');
      document.querySelector('p.form-error').innerText = 'Errors need correcting';
    }

    document.querySelector('div.popup').classList.remove('open');
  }

  processKeyup(event) {
    let input = document.querySelector('#contact-search');
    this.view.clearContacts();
    let filter = input.value.toLowerCase();
    this.model.displayContacts(filter);
  }

  deleteContact(id) {
    this.model.deleteContact(id);
    this.view.clearContacts();
    this.model.displayContacts();
}
  
  bind() {
    this.processClickHandler = (event) => this.processClick(event);
    document.body.addEventListener('mousedown', this.processClickHandler);

    this.processSubmitHandler = (event) => this.processSubmit(event);
    document.body.addEventListener('submit', this.processSubmitHandler);

    this.processKeyupHandler = (event) => this.processKeyup(event);
    document.querySelector('div.nav').addEventListener('keyup', this.processKeyupHandler);
  }
}
