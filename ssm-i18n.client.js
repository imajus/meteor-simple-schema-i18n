import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { TAPi18n } from 'meteor/tap:i18n';
import NodeSimpleSchema from 'simpl-schema';

import './ssm-defaults.js';

class SimpleSchemaWrapper extends NodeSimpleSchema {

  constructor(schema = {}, options = {}) {
    super(schema, _.defaults(options, { tracker: Tracker }));
    //TODO: Consider instance to be collected by GC
    this.TAPi18nComputation = Tracker.autorun(() => {
      const lang = TAPi18n.getLanguage();
      this.messageBox.setLanguage(lang);
    });
  }

}

SimpleSchemaWrapper.debug = Meteor.isDevelopment;
SimpleSchemaWrapper.extendOptions(['autoform', 'denyUpdate', 'denyInsert']);

export const SimpleSchema = SimpleSchemaWrapper;