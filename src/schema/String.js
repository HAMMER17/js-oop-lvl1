import _ from 'lodash';

import BaseSchema from './schema.js';

export default class StringSchema extends BaseSchema {
  constructor(customValidators) {
    super({ ...StringSchema.validators, ...customValidators });

    super.addCheck('isString');
  }
}

StringSchema.validators = {
  isString: _.isString,
  required: (str) => str.length > 0,
  minLength: (str, length) => str.length >= length,
  contains: (str, substr) => str.includes(substr),
};
