'use strict';
// import throttle from 'lodash.throttle';
// const formRef = document.querySelector('.js-contact-form');
// const LOCALE_STORAGE_KEY = 'contact-form-key';
// const formData = {};
// initPage();
// formRef.addEventListener('input', throttle(onformInput, 300));
// formRef.addEventListener('submit', handleSubmit);
// function onformInput(evt) {
//   const { name, value } = evt.target;
//   try {
//     let saveData = localStorage.getItem(LOCALE_STORAGE_KEY);
//     if (saveData) {
//       saveData = JSON.parse(saveData);

//       console.log(saveData);
//     } else {
//       saveData = {};
//     }
//     saveData[name] = value;
//     const stringifyData = JSON.stringify(saveData);
//     localStorage.setItem(LOCALE_STORAGE_KEY, stringifyData);
//   } catch (error) {}
// }

// function initPage() {
//   const saveData = localStorage.getItem(LOCALE_STORAGE_KEY);
//   if (!saveData) {
//     return;
//   }
//   try {
//     const parseData = JSON.parse(saveData);
//     Object.entries(parseData).forEach(([name, value]) => {
//       console.log(name);
//       console.log(value);
//       formRef.elements[name].value = value;
//     });
//     // formRef.input.value = parseData.name;
//     // formRef.email.value = parseData.email;
//     // formRef.textarea.value = parseData.message;
//     console.log(parseData);
//   } catch (error) {
//     console.error(error);
//   }
// }

// function handleSubmit(evt) {
//   evt.preventDefault();
//   const {
//     elements: { name, email, message },
//   } = evt.currentTarget;
//   console.log({ name: name.value, email: email.value, message: message.value });
//   evt.currentTarget.reset();
//   localStorage.removeItem(LOCALE_STORAGE_KEY);
// }

/////////////////////////////////////////////////////////////////////

import throttle from 'lodash.throttle';
import { save, load, remove } from './save_load_remove';
const formRef = document.querySelector('.js-contact-form');
const LOCALE_STORAGE_KEY = 'contact-form-key';

initPage();
formRef.addEventListener('input', throttle(onformInput, 300));
formRef.addEventListener('submit', handleSubmit);

function onformInput(evt) {
  const { name, value } = evt.target;

  let saveData = load(LOCALE_STORAGE_KEY);
  saveData = saveData ? saveData : {};
  saveData[name] = value;
  save(LOCALE_STORAGE_KEY, saveData);
}

function initPage() {
  const saveData = load(LOCALE_STORAGE_KEY);
  if (!saveData) {
    return;
  }
  Object.entries(saveData).forEach(([name, value]) => {
    console.log(name);
    console.log(value);
    formRef.elements[name].value = value;
  });
}

function handleSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { name, email, message },
  } = evt.currentTarget;
  console.log({ name: name.value, email: email.value, message: message.value });
  evt.currentTarget.reset();
  remove(LOCALE_STORAGE_KEY);
}
