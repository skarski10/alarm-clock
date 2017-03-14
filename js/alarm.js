function AlarmClock(){
  this.clocktime = moment().format('LTS')
  this.alarmtime = user.Input
}

AlarmClock.prototype.checkTime = function () {
  if (this. clocktime === this.alarmtime)
  {
    // alarm = ring;
  }
}

setinterval(checkTime(), 1000)

exports.alarmClockModule = AlarmClock;
