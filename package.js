Package.describe({
  name: 'imajus:simple-schema-messages-i18n',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'SimpleSchema messages translations using tap:i18n',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/imajus/meteor-simple-schema-messages-i18n',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'simpl-schema': '0.3.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.2.2');
  api.use('ecmascript', 'tap:i18n');
  api.use('tracker', 'client');
  api.mainModule('ssm-i18n.client.js', 'client');
  api.mainModule('ssm-i18n.server.js', 'server');
});