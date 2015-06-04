$('#timer').countdown('2020/10/10', function(event) {
2   $(this).html(event.strftime('%D days %H:%M:%S'));
3 });