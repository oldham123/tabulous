$(function() {

  jQuery.Color.hook( "fill stroke" );
  
  $('#abstract path').css({ 'stroke' : '#000000', 'fill' : 'none'});

  setTimeout(function() {
    $('#abstract').css('visibility', 'visible');
    var ellipsis = new Vivus('abstract', {type: 'delayed', duration: 500}, function() {
      //$('#ellipsis .st0').animate({ fill: '#333' }, 800);
      //$('.st1').animate({ fill: '#727272' }, 800);
      $('#abstract path').animate({ fill: '#000' }, 800);
    });
    var totalTime = 2000;
    var dayNo = 5;
    var monthLastDay = 30;
    //var totalTime = (((83*203)-3000) / 30) * dayNo;
    console.log(ellipsis);
    var stopTime = (totalTime / monthLastDay) * dayNo;
    console.log(stopTime);
    //setTimeout(function() { ellipsis.stop(); }, stopTime);

  }, 1000);
  
});
