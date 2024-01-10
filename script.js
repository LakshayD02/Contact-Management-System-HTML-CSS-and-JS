let contacts = [];

function openForm() {
  document.getElementById("contactForm").style.display = "block";
}

function closeForm() {
  document.getElementById("contactForm").style.display = "none";
}

function saveContact() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email) {
    const contact = { name, email };
    contacts.push(contact);
    displayContacts();
    clearForm();
    closeForm();
  } else {
    alert("Please fill in both Name and Email.");
  }
}

function displayContacts() {
    const contactList = document.getElementById("contactList");
    contactList.innerHTML = "";
  
    contacts.forEach((contact, index) => {
      const contactItem = document.createElement("div");
      contactItem.className = "contact-item saved-contact"; // Add the "saved-contact" class
      contactItem.innerHTML = `<strong>${contact.name}</strong> - ${contact.email}
                                <button onclick="editContact(${index})">Edit</button>
                                <button onclick="deleteContact(${index})">Delete</button>`;
      contactList.appendChild(contactItem);
    });
  }

  
function editContact(index) {
  const contact = contacts[index];
  document.getElementById("name").value = contact.name;
  document.getElementById("email").value = contact.email;
  contacts.splice(index, 1);
  displayContacts();
  openForm();
}

function deleteContact(index) {
  contacts.splice(index, 1);
  displayContacts();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}

// Initial display
displayContacts();