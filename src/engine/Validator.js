class ValidatorClass {
  validateEmail = (value) => {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(value);
  };

  validateCurrency = (value) => {
    var regex = /^\$?[0-9]+(\.[0-9][0-9])?$/;

    return regex.test(value);
  };
}

const Validator = new ValidatorClass();

export default Validator;
