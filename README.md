# Overview

Support Node SimpleSchema package error messages i18n using TAPi18n package. Reactively depends on `TAPi18n.getLanguage()` on the Client.

## Installation

> meteor add imajus:simple-schema-i18n

And, if `tap:i18n` is not in the project yet:

> meteor add tap:i18n

## Features

  1. Fetch SimpleSchema MessageBox messages translation for each langauge from `TAPi18n.getLanguages()` on `Meteor.startup()`.
  2. *(Client only)* All SimpleSchemai18n instances depend reactively on `TAPi18n.getLanguage()`.
  3. Extend schema options with `{ tracker: Tracker }` so you don't need to provide this option to every SimpleSchema constructor call anymore.
  4. Initially extend SimpleSchema with `['autoform', 'denyInsert', 'denyUpdate']` options.
  5. Set `SimpleSchema.debug` to `Meteor.isDevelopment`.

## Usage

i18n/en.i18n.json
```json
{
  "simple-schema-i18n": {
    "required": "{{{label}}} is required"
  }
}
```
*Example, you actually need to fill the "simple-schema-i18n" section with all messages.*

i18n/ru.i18n.json
```json
{
  "simple-schema-i18n": {
    "required": "{{{label}}} обязательное поле"
  }
}
```
*Example, you actually need to fill the "simple-schema-i18n" section with all messages.*

project-tap.i18n
```json
{
    "helper_name": "_",
    "supported_languages": null,
    "i18n_files_route": "/i18n",
    "cdn_path": null,
    "preloaded_langs": ["*"]
}
```
*Here, `"preloaded_langs"` option is crucial for package to work properly. Other options could be changed as you like.*

```js
import { SimpleSchema } from 'meteor/imajus:simple-schema-i18n';

const schema = new SimpleSchema({ /* Fields definition */ });

const message = { type: 'required', label: 'Field' };
console.log(schema.messageBox.message(message, { language: 'en' }));
// Output: Field is required
console.log(schema.messageBox.message(message, { language: 'ru' })); 
// Output: Field обязательное поле

/**
 * Уou can use this SimpleSchema as usual, the language of validation errors
 * will reactively depend on TAPi18n.getLanguage() and change accordingly.
 */
```

## Converting existing code

Let's assume your current code look like this:
```js
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

const schema = new SimpleSchema({ /*…*/ }, { tracker: Tracker });
```

To support SimpleSchema i18n, the code above must be change to this:
```js
import { SimpleSchema } from 'meteor/imajus:simple-schema-i18n';

const schema = new SimpleSchema({ /*…*/ })
```

Obviously, you also need to add `tap:i18n` Meteor package dependency and create actual i18n files.

