import * as ErrorMessages from './errorMessages.js';

export const required = (text) => {
  if (text) {
    return null;
  } else {
        return ErrorMessages.isRequired;
  }
};

export const emailFormat = (text) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(text)) {
            return null;
        }
        else {
            return ErrorMessages.isEmailFormat;
        }
};

export const phoneFormat = (text) => {
    var ren = /^\d+$/;
    if (ren.test(text)) {
        return null;
    }
    else {
        return ErrorMessages.isNumberFormat;
    }
};

/*
export const mustMatch = (field, fieldName) => {
  return (text, state) => {
    return state[field] === text ? null : ErrorMessages.mustMatch(fieldName);
  };
};*/

export const minLength = (length) => {
  return (text) => {
    return text.length >= length ? null : ErrorMessages.minLength(length);
  };
};


