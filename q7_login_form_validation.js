"use strict";

// Q7: Login Form Validation using RegExp
// - Username: at least 5 characters
// - Password: at least 8 chars; includes number, uppercase, lowercase, special char

(function () {
  if (typeof document === 'undefined') {
    console.log('This file is intended for browser usage. Include it in an HTML page.');
    return;
  }

  const container = document.createElement('div');
  container.style.maxWidth = '420px';
  container.style.margin = '12px';
  container.innerHTML = `
    <h3>Login</h3>
    <form id="loginForm">
      <div>
        <label>Username</label><br><input id="username" />
        <div id="err-username" class="err"></div>
      </div>
      <div>
        <label>Password</label><br><input id="password" type="password" />
        <div id="err-password" class="err"></div>
      </div>
      <button type="submit">Login</button>
    </form>
    <div id="login-result" style="margin-top:8px;"></div>
  `;
  const style = document.createElement('style');
  style.textContent = `input{padding:6px;width:100%;} .err{color:#b00;font-size:12px;min-height:16px}`;
  document.head.appendChild(style);
  document.body.appendChild(container);

  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const errUser = document.getElementById('err-username');
  const errPwd = document.getElementById('err-password');
  const result = document.getElementById('login-result');

  function validateUsername(u) {
    if (!u || u.length < 5) return 'Username must be at least 5 characters long';
    return '';
  }

  function validatePassword(p) {
    if (!p || p.length < 8) return 'Password must be at least 8 characters long';
    if (!/[A-Z]/.test(p)) return 'Password must include at least one uppercase letter';
    if (!/[a-z]/.test(p)) return 'Password must include at least one lowercase letter';
    if (!/[0-9]/.test(p)) return 'Password must include at least one number';
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(p)) return 'Password must include at least one special character';
    return '';
  }

  function showError(el, msg) {
    el.textContent = msg;
  }

  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const u = username.value.trim();
    const p = password.value;
    const uErr = validateUsername(u);
    const pErr = validatePassword(p);
    errUser.textContent = uErr;
    errPwd.textContent = pErr;

    if (!uErr && !pErr) {
      result.innerHTML = '<div style="color:green">Login successful</div>';
    } else {
      result.innerHTML = '<div style="color:red">Login failed — see errors</div>';
    }
  });
})();
