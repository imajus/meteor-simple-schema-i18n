import { Meteor } from 'meteor/meteor';

//HACK: https://github.com/aldeed/meteor-message-box/issues/1
if ( Meteor.isClient ) {
  window.Buffer = window.Buffer || require("buffer").Buffer;
}