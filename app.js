var i = 0,
    things = ['take photographs',
              'develop websites',
              'am always learning',
              'am a UC Berkeley graduate',
              'live in the SF Bay Area',
              'design the web',
              'can balance a budget',
              'love Korean food',
              'enjoy going on adventures'];
$(function(){
  setInterval(function(){
    $('#what-i-do').fadeOut(250, function(){
      $(this).text(things[i]).fadeIn(250);
    });
    i++;
    if (i == things.length) i = 0;
  }, 3000);
});
