$(document).ready(function(){

  var running = false;
  var work = true;
  var workTime = 1500;
  var breakTime = 600;
  var $pause = $('#pause');
  var $work = $('#work');
  var $break = $('#break');
  var $timer = $('#timer');
  var $status = $('#status');

  createWorkTimer();

  function createWorkTimer() {
    $('body').removeClass('break');
    $status.html('Doing work');
    $pause.html('Start Work');
    work = true;
    running = false;
    $timer.createTimer({
      autostart: false,
      time_in_seconds: workTime,
      buzzer: createBreakTimer
    });
  }

  function createBreakTimer() {
    $('body').addClass('break');
    $status.html('On a break');
    $pause.html('Start Break');
    work = false;
    running = false;
    $timer.createTimer({
      autostart: false,
      time_in_seconds: breakTime,
      buzzer: createWorkTimer
    });
  }

  $pause.on('click',function() {
    if(running === true) {
      running = false;
      $timer.pauseTimer();
      if(work){
        $pause.html('Continue Work'); 
      } else {
        $pause.html('Continue Break'); 
      }
    } else {
      running = true;
      $pause.html('Pause');

      if(work) {
        $timer.startTimer({buzzer:createBreakTimer});
      } else {
        $timer.startTimer({buzzer:createWorkTimer});
      }
    }
  });

  $break.on('click',function() {
    createBreakTimer();
  });

  $work.on('click',function() {
    createWorkTimer();
  });

});
