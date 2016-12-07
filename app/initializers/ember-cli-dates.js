import Ember from 'ember';
import { timeFormat } from 'ember-cli-dates/helpers/time-format';
import { timeAgoInWords } from 'ember-cli-dates/helpers/time-ago-in-words';
import { dayOfTheWeek } from 'ember-cli-dates/helpers/day-of-the-week';
import { timeAheadInWords } from 'ember-cli-dates/helpers/time-ahead-in-words';
import { timeDeltaInWords } from 'ember-cli-dates/helpers/time-delta-in-words';
import { monthAndYear } from 'ember-cli-dates/helpers/month-and-year';
import { monthAndDay } from 'ember-cli-dates/helpers/month-and-day';
import { dateAndTime } from 'ember-cli-dates/helpers/date-and-time';

export var initialize = function() {
  let app = arguments[1] || arguments[0];
  app.TimeFormatHelper = Ember.Helper.helper(timeFormat);
  app.TimeAgoInWordsHelper = Ember.Helper.helper(timeAgoInWords);
  app.DayOfTheWeekHelper = Ember.Helper.helper(dayOfTheWeek);
  app.TimeAheadInWordsHelper = Ember.Helper.helper(timeAheadInWords);
  app.TimeDeltaInWordsHelper = Ember.Helper.helper(timeDeltaInWords);
  app.MonthAndYearHelper = Ember.Helper.helper(monthAndYear);
  app.MonthAndDayHelper = Ember.Helper.helper(monthAndDay);
  app.DateAndTimeHelper = Ember.Helper.helper(dateAndTime);
};

export default {
  name: 'ember-cli-dates',
  initialize: initialize
};
