import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { _ } from 'meteor/underscore';

import './ssm-defaults.js';
import { schemas } from './schemas-tracker.client.js';

export const SimpleSchemai18n = {
  SimpleSchema: null,
  create(schema = {}, options = {}) {
    _.extend(options, { tracker: Tracker });
    const instance = new this.SimpleSchema(schema, options);
    schemas.push(instance);
    return instance;
  }
}