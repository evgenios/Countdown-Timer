$(document).ready(function(){
  var running = true;
  var work = true;
  var newDate = new Date(); 
  var $pause = $('#pause');
  var $activity = $('#activity');
  var $timer = $('#timer');

  newDate.setMinutes(newDate.getMinutes() + 25);

  $pause.on('click',function(){
    if(running === true){
      $pause.html('Continue');
      running = false;
      $timer.countdown('stop');
    } else {
      running = true;
      $pause.html('Pause');
      $timer.countdown('start');
    }
  });

  
  $timer.countdown(newDate, function(event){
    $(this).html(event.strftime('%M:%S '));
    
  });

});
