$(function() {

  jQuery.Color.hook( "fill stroke" );
  
  $('#abstract path').css({ 'stroke' : '#000000', 'fill' : 'none'});

  setTimeout(function() {
    $('#abstract').css('visibility', 'visible');
    var ellipsis = new Vivus('abstract', {type: 'delayed', duration: 250}, function() {
      $('#abstract path').animate({ fill: '#000' }, 400);
    });
  }, 200);
  
});
