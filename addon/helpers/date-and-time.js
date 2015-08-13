import Ember from 'ember';
import { timeFormat } from 'ember-cli-dates/helpers/time-format';

function dateAndTime(params) {
  var date = params[0];
  var optionalLocale = params[1];
  return timeFormat([date, 'LLL', optionalLocale]);
}

export { dateAndTime };

export default Ember.Helper.extend({
  compute: dateAndTime
});
