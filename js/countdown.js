$(document).ready(function(){
  var running = true;
  $('#timer').countdown('25', function(event) {
    $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
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
