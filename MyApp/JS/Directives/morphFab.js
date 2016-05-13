app.directive('morphFab', morphFab);

function morphFab() {
    var directive = {
        link: link,
        templateUrl: 'morphFab.html',
        restrict: 'E'
    };
    return directive;

    function link(scope, element, attrs) {
        var circle = $("#morph-fab");
        var container = $("#morph-fab-container");
        var animated = false;
        var expandedCircleDiameter = Math.ceil(Math.sqrt( Math.pow(convert("100vw"), 2) + Math.pow(convert("30vh"), 2) ));
        console.log("YAY DIRECTIVES");
        var initialCircleDiameter = "10vh";
        container.css("height", "30vh");
        container.css("width", "100vw");
        container.css("position", "relative");
        container.css("overflow", "hidden");
        container.css("top", "15vh");
        container.css("left", "40vw");
        container.css("z-index", 99999999);
        
        circle.css("border-radius","50%");
        circle.css("background-color","#8BC34A");
        circle.css("height","200px");
        circle.css("width","200px");
        circle.css("position","absolute");
        circle.css("top","50%"); 
        circle.css("left", "50%");
        circle.css("transform","translate(-50%,-50%)");

        circle.on("click", function() {
            if (!animated) {
                setTimeout( function() {velocity(circle, {
                "width": expandedCircleDiameter + "px",
                "height": expandedCircleDiameter + "px",
                backgroundColor: "#03A9F4"
                }, 250, [0.4, 0.0, 0.2, 1])}, 100);
                velocity(container, {
                "top": [ "0px", "easeInSine" ],
                "left": [ "0px", "easeOutSine" ]
                }, 350);
                animated = !animated;
            } else {
                velocity(circle, {
                "width": initialCircleDiameter,
                "height": initialCircleDiameter,
                backgroundColor: "#8BC34A"
                }, 250, [0.4, 0.0, 0.2, 1]);
                velocity(container, {
                "top": [ "15vh", "easeOutSine" ],
                "left": [ "40vw", "easeInSine" ]
                });
                animated = !animated;
            }
        })
    }
}