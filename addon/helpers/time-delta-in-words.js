import Ember from 'ember';
import moment from 'moment';
import timeLocale from 'ember-cli-dates/utils/time-locale';
import validArgs from 'ember-cli-dates/utils/valid-args';

function timeDeltaInWords(params) {
  validArgs(arguments, 'time-delta-in-words');

  var date = params[0];
  var optionalLocale = params[1];

  if (Ember.isBlank(date)) { return ''; }

  var locale = timeLocale(optionalLocale);

  return moment(date).locale(locale).fromNow();
}

export { timeDeltaInWords };

export default Ember.Helper.extend({
  compute: timeDeltaInWords
});
