$(document).ready(function(){
  var running = true;
  var work = true;
  var timeInSeconds = 1500000;
  var time = new Date();
  time.setMinutes(time.getMinutes() + 25);
  $('#timer').countdown(time, function(event) {
    $(this).html(event.strftime('%M : %S'));
  });

  $('#pause').click(function(event){
    if(running){
      $('#timer').countdown('pause');
      $('#pause').html('Resume');
      running = false;
    } else {
      $('#timer').countdown('resume');
      $('#pause').html('Pause');
      running = true;
    }
    
  });
});
