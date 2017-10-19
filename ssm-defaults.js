import { Meteor } from 'meteor/meteor';
import { TAPi18n } from 'meteor/tap:i18n';
import { _ } from 'meteor/underscore';
import NodeSimpleSchema from 'simpl-schema';

import './buffer-fix.js';

const errors = [
  'required',
  'minString',
  'maxString',
  'minNumber',
  'maxNumber',
  'minNumberExclusive',
  'maxNumberExclusive',
  'minDate',
  'maxDate',
  'badDate',
  'minCount',
  'maxCount',
  'noDecimal',
  'notAllowed',
  'expectedType'
];

Meteor.startup(() => {
  const messages =_.chain(TAPi18n.getLanguages() || [])
  .pairs()
  .map(([code, labels]) => {
    const i18n = _.object(errors.map(error => [error, TAPi18n.__(`simple-schema-i18n.${error}`, {}, code)]));
    return [code, i18n];
  })
  .object()
  .value();
  NodeSimpleSchema.setDefaultMessages({ messages });
});
