Package.describe({
  name: 'imajus:simple-schema-i18n',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'SimpleSchema messages translations using tap:i18n',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/imajus/meteor-simple-schema-messages-i18n',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null//'README.md'
});

Npm.depends({
  'simpl-schema': '0.3.1',
  'buffer': '5.0.8'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.4.3');
  api.use(['ecmascript', 'tap:i18n@1.8.1']);
  api.use(['tracker', 'templating@1.3.2'], 'client');
  api.add_files('package-tap.i18n');
  api.mainModule('ssm-i18n.client.js', 'client');
  api.mainModule('ssm-i18n.server.js', 'server');
});