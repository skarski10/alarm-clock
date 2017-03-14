// var AlarmClock = require('./../js/alarm.js').alarmClockModule;
//
function currentTime() {
  $('#clock').html(moment().format('LT'));
}

// var alarmTime = $('#alarm-time').val();
//
// function checkAlarm(alarmTime){
//   if (alarmTime === currentTime()) {
//       #('body').addClass("alarm-off")
//   }
//
// }



// function alarm(alarmActive) {
//   if (alarmActive === true) {
//     $("body").toggleClass("alarm-off");
//   }
// }


$(document).ready(function() {
  setInterval(currentTime, 1000);
  $('.alarm-form').submit(function() {
    event.preventDefault();
    var alarmTime = $('#alarm-time').val();
    $('#alarm-set').text(alarmTime)
setInterval(function checkAlarm(alarmTime){
  if (alarmTime === currentTime()) {
      $('#body').addClass("alarm-off");
  }
}, 1000);



  });
  // setInterval(function() {
  //   if(moment().format("ss") % 2 === 0)
  //   {
  //     $("body").toggleClass("alarm-off");
  //   }
  // }, 1000)
});
