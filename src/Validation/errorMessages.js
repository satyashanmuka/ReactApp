
export const isRequired = fieldName => `${fieldName} is required`;

export const isEmailFormat = fieldName => `${fieldName} is not in the right format`;
export const isNumberFormat = fieldName => `${fieldName} should have only numbers`;

/*export const mustMatch = otherFieldName => {
  return (fieldName) => `${fieldName} must match ${otherFieldName}`;
};*/

export const minLength = length => {
  return (fieldName) => `${fieldName} must be at least ${length} characters`;
};


