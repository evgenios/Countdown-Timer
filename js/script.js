$(document).ready(function(){

  var running = false;
  var work = true;
  var workTime = 1500;
  var breakTime = 5;
  var $pause = $('#pause');
  var $work = $('#work');
  var $break = $('#break');
  var $timer = $('#timer');

  createWorkTimer();

  function finishedWork(timer){
    createBreakTimer();
  }

  function finishedBreak(timer){
    createWorkTimer();
  }

  function basicSetup(){
    work = true;
    running = false;
    $pause.html('Start');
  }

  function createWorkTimer(){
    basicSetup();
    $timer.createTimer({
      autostart: false,
      time_in_seconds: workTime,
      buzzer: finishedBreak
    });
  }

  function createBreakTimer(){
    basicSetup();
    $timer.createTimer({
      autostart: false,
      time_in_seconds: breakTime,
      buzzer: finishedWork
    });
  }

  $pause.on('click',function(){
    if(running === true) {
      running = false;
      $pause.html('Continue');
      $timer.pauseTimer();
    } else {
      running = true;
      $pause.html('Pause');
      $timer.startTimer();
    }
  });

  $break.on('click',function(){
    createBreakTimer();
  });

  $work.on('click',function(){
    createWorkTimer();
  });

});
