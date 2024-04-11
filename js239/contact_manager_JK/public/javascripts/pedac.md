PEDAC
Problem:
Create an app for adding and organizing contacts
contacts should have a full name, email address, and phone number
contacts should be unique (?)

Use MVC: Model, View, Controller
app.js imports M,V,C, and instantiates new App() on DOMContentLoaded

CONTROLLER
(contains control logic: receives update from View then notifies model to "add contact")

methods:
contructor()
  Model.contacts = contacts;
  Model.idCounter = 4; (but start at 0 with no seed data)
  Model.displayContacts();

addContact(data): check if contact is really new and has all valid data
  OK?
    - Send data to Model to add new contact: Model.addContact(data)
    - Tell View to update contact display ()

  Not OK?
addEventListeners:
  1. add event listener to Add Contact button
    => clickHandler: Tell View to pull up new contact window: addContact
  2. add event listener to Search input
    => keyHandler: get list of contacts filtered by search value
    - tell View to update contacts based on new filtered list: displayContacts(contacts)

---

MODEL
(defines data structure: updates app to reflect added contact)

methods:
displayContacts():
  tell View to display contacts and send data
  contacts = getContacts()
  View.displayContacts(contacts)

getContacts() async
  try to
    let contacts = await fetch 'GET' from http://localhost:3000/api/contacts
    return contacts
  catch failure and error
    return "failed fetch" + error

postNewContact(data)
  try to
    let json = stringified data
    fetch 'POST' to http://localhost:3000/api/contacts/
    

addContact(data):
  // check if new contact exists already (NOT YET)
  post new contact to DB (postNewContact(data))
  tell view to update contact cards View.displayContacts

---

VIEW
(defines display: user clicks add new contact)

methods:
constructor()
  declare Handlebars template (#contact-card-template)

addContact(): pull up new contact window with form for Full name, Email address and Telephone number
  use form validation to make sure they're all required as valid name, valid email, valid phone
  Submit button sends new contact info to Controller: Controller.addContact(data)
  Cancel button
    closes the contact window closeNewContact()
    tells Controller to pull up contact cards refreshContacts()

displayContacts(contacts):
  let mainDiv = query selector div.main where the contact cards are
  remove all ancestors (contact cards) from mainDiv (replaceChildren())
  for each object in contacts argument, append one contact card using Handlebars template

Model.contacts = [
  { "id": 1,
    "full_name": "Naveed Fida",
    "email": "nf@example.com",
    "phone_number": "12345678901",
    "tags": "work, friend",
  },
  { "id": 2,
    "full_name": "Victor Reyes",
    "email": "vpr@example.com",
    "phone_number": "09876543210",
    "tags": "work, friend",
  },
  { "id":3,
    "full_name": "Pete Hanson",
    "email": "ph@example.com",
    "phone_number": "54321098761",
    "tags": null,
  }
]
