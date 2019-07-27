import { Tracker } from 'meteor/tracker';
import { TAPi18n } from 'meteor/tap:i18n';

export const schemas = [];

//TODO: Consider implementing weak array so GC could collect unused schemas
Tracker.autorun(() => {
  const lang = TAPi18n.getLanguage();
  schemas.forEach(schema => schema.messageBox.setLanguage(lang));
});