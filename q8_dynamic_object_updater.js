"use strict";

// Q8: Dynamic Object Updater
// - user object editable via form
// - updates the object in real time and displays result

(function () {
  if (typeof document === 'undefined') {
    console.log('This file is intended for browser usage. Include it in an HTML page.');
    return;
  }

  let user = { name: 'John', email: 'john@mail.com', age: 21 };

  const container = document.createElement('div');
  container.style.maxWidth = '420px';
  container.style.margin = '12px';
  container.innerHTML = `
    <h3>Edit User</h3>
    <form id="userForm">
      <div><label>Name</label><br><input id="name" /></div>
      <div><label>Email</label><br><input id="email" /></div>
      <div><label>Age</label><br><input id="age" type="number"/></div>
      <button type="submit">Update</button>
    </form>
    <h4>Current User Object:</h4>
    <pre id="userDisplay" style="background:#f3f3f3;padding:8px"></pre>
  `;
  document.body.appendChild(container);

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const ageInput = document.getElementById('age');
  const userDisplay = document.getElementById('userDisplay');

  // initialize form values
  function renderForm() {
    nameInput.value = user.name;
    emailInput.value = user.email;
    ageInput.value = user.age;
    renderUser();
  }

  function renderUser() {
    userDisplay.textContent = JSON.stringify(user, null, 2);
  }

  // Live update on input
  nameInput.addEventListener('input', (e) => {
    user = { ...user, name: e.target.value };
    renderUser();
  });
  emailInput.addEventListener('input', (e) => {
    user = { ...user, email: e.target.value };
    renderUser();
  });
  ageInput.addEventListener('input', (e) => {
    const val = Number(e.target.value);
    user = { ...user, age: isNaN(val) ? e.target.value : val };
    renderUser();
  });

  document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
    renderUser();
    alert('User updated — check object below');
  });

  renderForm();
  // expose for console
  window.currentUser = () => user;
})();
