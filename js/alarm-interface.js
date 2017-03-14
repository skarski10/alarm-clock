var AlarmClock = require('./../js/alarm.js').alarmClockModule;
$(document).ready(function() {
  $('#clock').text(moment().format('LTS'));
  $('form').submit(function() {
    event.preventDefault()

  })
});
