class FormValidator {
  constructor(formData) {
    this.errorMessage = {};
    for (const [key, value] of formData.entries()) {
      this[key] = value;
    }
  }
  validateRequired(name) {
    const nameInputValue = this[name];
    if (nameInputValue == "") {
      this.errorMessage[name] = `${name} is required`;
    } else {
      delete this.errorMessage[name];
    }
  }

  isFormValid() {
    if (this.errorMessage === {}) {
      return true;
    } else {
      return false;
    }
  }
  getErrorMessage() {
    return this.errorMessage;
  }
}

export default FormValidator;
