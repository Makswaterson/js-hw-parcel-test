'use strict';
const formRef = document.querySelector('.js-contact-form');
const LOCALE_STORAGE_KEY = 'contact-form-key';
const formData = {};
initPage();
formRef.addEventListener('input', onformInput);

function onformInput(evt) {
  const { name, value } = evt.target;
  formData[name] = value;
  console.log(formData);
  try {
    const stringifyData = JSON.stringify(formData);
    localStorage.setItem(LOCALE_STORAGE_KEY, stringifyData);
  } catch (error) {
    console.error(error);
  }
}

function initPage() {
  const saveData = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (!saveData) {
    return;
  }
  try {
    const parseData = JSON.parse(saveData);
    Object.entries(parseData).forEach(([name, value]) => {
      console.log(name);
      console.log(value);
      formRef.elements[name].value = value;
    });
    // formRef.input.value = parseData.name;
    // formRef.email.value = parseData.email;
    // formRef.textarea.value = parseData.message;
    console.log(parseData);
  } catch (error) {
    console.error(error);
  }
}
