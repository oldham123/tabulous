app.directive('morphFab', morphFab);

function morphFab() {
    var directive = {
        link: link,
        templateUrl: 'morphFab.html',
        restrict: 'E'
    };
    return directive;

    function link(scope, element, attrs) {
        var circle = $('#morph-fab');
        var container = $('#morph-fab-container');
        var content = $('#morph-fab-content');
        var contentClip = $('#morph-fab-circular-clip');
        var header = $('#morph-fab-header');
        var form = $('#morph-fab-form');
        var fade = $('#morph-fab-fade');
        var svg = 'morph-fab-svg';
        
        var animated = false;
        
        var expandedCircleDiameter = 10 + Math.ceil(Math.sqrt( Math.pow(convert("100vw"), 2) + Math.pow(convert("30vh"), 2) ));
        var initialCircleDiameter = "10vh";
        
        contentClip.css("height", initialCircleDiameter);
        contentClip.css("width", initialCircleDiameter);
        
        circle.css("height", initialCircleDiameter);
        circle.css("width", initialCircleDiameter);
        
        circle.on("click", function() {
            if (!animated) {
                velocity(fade, {
                "opacity": "1"
                }, 300);
                velocity(circle, {
                "width": expandedCircleDiameter + "px",
                "height": expandedCircleDiameter + "px",
                "top": "50%",
                "left": "50%",
                "opacity": "0"
                }, 300, [0.4, 0.0, 0.2, 1]);
                velocity(contentClip, {
                "width": expandedCircleDiameter + "px",
                "height": expandedCircleDiameter + "px",
                "top": "50%",
                "left": "50%"
                }, 300, [0.4, 0.0, 0.2, 1]);
                animated = !animated;
                setTimeout( function() {
                    svgEntrance(); }, 300)
                } else {
                velocity(fade, {
                "opacity": "0"
                }, 300);
                velocity(circle, {
                "width": initialCircleDiameter,
                "height": initialCircleDiameter,
                "top": "90%",
                "left": "95%",
                "opacity": "1"
                }, 300, [0.4, 0.0, 0.2, 1]);
                velocity(contentClip, {
                "width": initialCircleDiameter,
                "height": initialCircleDiameter,
                "top": "90%",
                "left": "95%",
                }, 300, [0.4, 0.0, 0.2, 1]);
                velocity($('#' + svg), {
                "opacity": "0"
                }, 50);
                animated = !animated;
            }
        })
    }
}