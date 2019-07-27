import { Meteor } from 'meteor/meteor';

import './ssm-defaults.js';

export const SimpleSchemai18n = {
  SimpleSchema: null,
  create(...rest) {
    return new this.SimpleSchema(...rest);
  }
};