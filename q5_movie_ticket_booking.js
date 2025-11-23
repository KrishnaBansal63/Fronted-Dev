"use strict";

// Q5: Movie Ticket Booking (Objects + RegExp)
// - Name: alphabets only
// - Email: proper format
// - Seats: 1 to 10
// On success, store booking object and display ticket details

(function () {
  if (typeof document === 'undefined') {
    console.log('This file is intended for browser usage. Include it in an HTML page.');
    return;
  }

  const container = document.createElement('div');
  container.style.maxWidth = '420px';
  container.style.margin = '12px';
  container.innerHTML = `
    <h3>Movie Ticket Booking</h3>
    <form id="bookingForm">
      <div>
        <label>Name</label><br><input id="name" />
        <div id="err-name" class="err"></div>
      </div>
      <div>
        <label>Email</label><br><input id="email" />
        <div id="err-email" class="err"></div>
      </div>
      <div>
        <label>Seats (1-10)</label><br><input id="seats" type="number" min="1" max="10" />
        <div id="err-seats" class="err"></div>
      </div>
      <button type="submit">Book Ticket</button>
    </form>
    <div id="ticket" style="margin-top:8px;"></div>
  `;
  const style = document.createElement('style');
  style.textContent = `input{padding:6px;width:100%;} .err{color:#b00;font-size:12px;min-height:16px}`;
  document.head.appendChild(style);
  document.body.appendChild(container);

  const patterns = {
    name: /^[A-Za-z\s]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  };
  const form = document.getElementById('bookingForm');
  const errName = document.getElementById('err-name');
  const errEmail = document.getElementById('err-email');
  const errSeats = document.getElementById('err-seats');
  const ticket = document.getElementById('ticket');

  function validate() {
    let ok = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const seatsVal = Number(document.getElementById('seats').value);

    errName.textContent = '';
    errEmail.textContent = '';
    errSeats.textContent = '';

    if (!name || !patterns.name.test(name)) {
      errName.textContent = 'Name must contain only alphabets';
      ok = false;
    }
    if (!email || !patterns.email.test(email)) {
      errEmail.textContent = 'Enter a valid email';
      ok = false;
    }
    if (!Number.isInteger(seatsVal) || seatsVal < 1 || seatsVal > 10) {
      errSeats.textContent = 'Seats must be an integer between 1 and 10';
      ok = false;
    }
    return { ok, name, email, seats: seatsVal };
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { ok, name, email, seats } = validate();
    if (ok) {
      const booking = { name, email, seats };
      ticket.innerHTML = `<h4>Ticket Confirmed</h4><pre>${JSON.stringify(booking, null, 2)}</pre>`;
    } else {
      ticket.innerHTML = '';
    }
  });
})();
