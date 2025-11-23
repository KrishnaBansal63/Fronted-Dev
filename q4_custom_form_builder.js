"use strict";

// Q4: Custom Form Builder (Forms + Classes)
// - FormBuilder class that takes array of field descriptors and builds a form
// - getFormData() returns object of entered values on submit

(function () {
  if (typeof document === 'undefined') {
    console.log('This file is intended for browser usage. Include it in an HTML page.');
    return;
  }

  class FormBuilder {
    constructor(container, fields = []) {
      this.container = container;
      this.fields = fields;
      this.form = document.createElement('form');
      this.form.noValidate = true;
      this.inputs = {};
      this._build();
    }

    _build() {
      this.form.innerHTML = '';
      this.fields.forEach((f) => {
        const wrapper = document.createElement('div');
        wrapper.style.marginBottom = '8px';
        const label = document.createElement('label');
        label.textContent = f.label || f.name;
        wrapper.appendChild(label);
        const input = document.createElement('input');
        input.type = f.type || 'text';
        input.name = f.name;
        input.placeholder = f.placeholder || '';
        input.value = f.value || '';
        input.style.display = 'block';
        input.style.width = '100%';
        input.style.padding = '6px';
        wrapper.appendChild(input);
        this.inputs[f.name] = input;
        this.form.appendChild(wrapper);
      });

      const submit = document.createElement('button');
      submit.type = 'button';
      submit.textContent = 'Submit';
      submit.addEventListener('click', () => this._onSubmit());
      this.form.appendChild(submit);

      this.container.appendChild(this.form);
    }

    _onSubmit() {
      const data = this.getFormData();
      const pre = document.createElement('pre');
      pre.textContent = JSON.stringify(data, null, 2);
      this.container.appendChild(pre);
    }

    getFormData() {
      const out = {};
      Object.entries(this.inputs).forEach(([k, el]) => {
        out[k] = el.value;
      });
      return out;
    }
  }

  // Demo usage
  const container = document.createElement('div');
  container.style.maxWidth = '420px';
  container.style.margin = '12px';
  document.body.appendChild(container);
  const fb = new FormBuilder(container, [
    { name: 'username', label: 'Username', placeholder: 'Enter username' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter email' },
    { name: 'age', label: 'Age', type: 'number', placeholder: 'Enter age' },
  ]);

  // make accessible from console for testing
  window.FormBuilder = FormBuilder;
})();
