import Ember from 'ember';
import moment from 'moment';
import timeLocale from 'ember-cli-dates/utils/time-locale';
import validArgs from 'ember-cli-dates/utils/valid-args';

function timeFormat(params) {
  validArgs(arguments, 'time-format');

  var date = params[0];
  var optionalFormat = params[1];
  var optionalLocale = params[2];

  if (Ember.isBlank(date)) { return ''; }

  var locale = timeLocale(optionalLocale),
      format = 'LL';

  if (Ember.typeOf(optionalFormat) === 'string') {
    format = optionalFormat;
  }

  return moment(date).locale(locale).format(format);
}

export { timeFormat };

export default Ember.Helper.extend({
  compute: timeFormat
});
