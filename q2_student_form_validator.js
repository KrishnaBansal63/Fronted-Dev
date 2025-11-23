"use strict";

// Q2: Student Form Validator (Forms + RegExp)
// Builds a registration form dynamically and validates fields:
// Name: only alphabets
// Email: example@domain.com
// Phone: exactly 10 digits
// Password: 1 uppercase, 1 number, 1 special char

(function () {
  if (typeof document === 'undefined') {
    console.log('This file is intended for browser usage. Include it in an HTML page.');
    return;
  }

  const container = document.createElement('div');
  container.style.maxWidth = '420px';
  container.style.margin = '16px';
  container.innerHTML = `
    <h3>Student Registration</h3>
    <form id="studentForm" novalidate>
      <div>
        <label>Name</label><br>
        <input id="name" type="text" />
        <div class="error" id="err-name"></div>
      </div>
      <div>
        <label>Email</label><br>
        <input id="email" type="email" />
        <div class="error" id="err-email"></div>
      </div>
      <div>
        <label>Phone</label><br>
        <input id="phone" type="tel" />
        <div class="error" id="err-phone"></div>
      </div>
      <div>
        <label>Password</label><br>
        <input id="password" type="password" />
        <div class="error" id="err-password"></div>
      </div>
      <button type="submit">Register</button>
    </form>
    <pre id="result" style="background:#f7f7f7;padding:8px;margin-top:8px;display:none"></pre>
  `;

  const style = document.createElement('style');
  style.textContent = `
    input { padding:6px; width:100%; box-sizing:border-box; }
    .error { color: #b00; font-size:12px; min-height:16px }
    .valid { border: 2px solid #0a7; }
    .invalid { border: 2px solid #e44; }
  `;

  document.head.appendChild(style);
  document.body.appendChild(container);

  const form = document.getElementById('studentForm');
  const inputs = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    password: document.getElementById('password'),
  };
  const errs = {
    name: document.getElementById('err-name'),
    email: document.getElementById('err-email'),
    phone: document.getElementById('err-phone'),
    password: document.getElementById('err-password'),
  };
  const result = document.getElementById('result');

  const patterns = {
    name: /^[A-Za-z\s]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/, // exactly 10 digits
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/,
  };

  function setValidity(field, message) {
    if (message) {
      inputs[field].classList.remove('valid');
      inputs[field].classList.add('invalid');
      errs[field].textContent = message;
    } else {
      inputs[field].classList.remove('invalid');
      inputs[field].classList.add('valid');
      errs[field].textContent = '';
    }
  }

  function validateField(field) {
    const value = inputs[field].value.trim();
    if (!value) {
      setValidity(field, 'This field is required');
      return false;
    }
    if (!patterns[field].test(value)) {
      let msg = 'Invalid value';
      switch (field) {
        case 'name': msg = 'Name must contain only alphabets and spaces'; break;
        case 'email': msg = 'Enter a valid email like example@domain.com'; break;
        case 'phone': msg = 'Phone must be exactly 10 digits'; break;
        case 'password': msg = 'Password must include 1 uppercase, 1 number and 1 special character'; break;
      }
      setValidity(field, msg);
      return false;
    }
    setValidity(field, '');
    return true;
  }

  Object.keys(inputs).forEach((k) => {
    inputs[k].addEventListener('input', () => validateField(k));
  });

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let ok = true;
    Object.keys(inputs).forEach((k) => {
      if (!validateField(k)) ok = false;
    });
    if (ok) {
      const data = {
        name: inputs.name.value.trim(),
        email: inputs.email.value.trim(),
        phone: inputs.phone.value.trim(),
      };
      result.style.display = 'block';
      result.textContent = 'Registration successful:\n' + JSON.stringify(data, null, 2);
    } else {
      result.style.display = 'none';
    }
  });
})();
