app.directive('indicatorBubble', function() {
    return {
        link: function(scope, element, attrs) {
        var s = Snap(element[0]);
        var bubble = s.rect(24, 36, 15, 15, 7.5, 7.5);
        bubble.addClass("md-whiteframe-8dp");
        var bubbleY = parseInt(bubble.attr("y"));
        var initialBubbleY = bubbleY;
        
        // Downward animation functions
        
        var heightDecreaseDown = function() {
            bubble.animate({height: 15}, 300, mina.backout);
        };
        var heightIncreaseDown = function() {
            bubble.animate({height: 106}, 300, mina.backin);
        };
        var positionDecrease = function() {
            bubbleY += 91;
            bubble.animate({y: bubbleY}, 300, mina.backout);
        };
        var heightDecreaseDownDouble = function() {
            bubble.animate({height: 15}, 300, mina.backout);
        };
        var heightIncreaseDownDouble = function() {
            bubble.animate({height: 106}, 300, mina.backin);
        };
        var positionDecreaseDouble = function() {
            bubbleY += 182;
            bubble.animate({y: bubbleY}, 300, mina.backout);
        };
        
        //Upward animation functions
        
        var positionIncrease = function() {
            bubbleY -= 91;
            bubble.animate({y: bubbleY}, 300, mina.backin);
        };
        var heightIncreaseUp = function() {
            bubble.animate({height: 106}, 300, mina.backin);
        };
        var heightDecreaseUp = function() {
            bubble.animate({height: 15}, 300, mina.backout);
        };
        
        var positionIncreaseDouble = function() {
            bubbleY = initialBubbleY;
            bubble.animate({y: bubbleY}, 300, mina.backin);
        };
        var heightIncreaseUpDouble = function() {
            bubble.animate({height: 106}, 300, mina.backin);
        };
        var heightDecreaseUpDouble = function() {
            bubble.animate({height: 15}, 300, mina.backout);
        };
        
        
        bubble.attr({
            fill: "#03A9F4",
            strokeWidth: 0
                });
                
        scope.$watch('main.status', function(newValue, oldValue) {
                if ((oldValue == "home" && newValue == "create") || (oldValue == "create" && newValue == "load")) {
                    heightIncreaseDown();
                    setTimeout(heightDecreaseDown, 300);
                    setTimeout(positionDecrease, 300);
                };
                if ((oldValue == "load" && newValue == "create") || (oldValue == "create" && newValue == "home")) {
                    positionIncrease();
                    heightIncreaseUp();
                    setTimeout(heightDecreaseUp, 300);
                };
                if (oldValue == "home" && newValue == "load") {
                    heightIncreaseDownDouble();
                    setTimeout(heightDecreaseDownDouble, 300);
                    setTimeout(positionDecreaseDouble, 300);
                };
                if (oldValue == "load" && newValue == "home") {
                    positionIncreaseDouble();
                    heightIncreaseUpDouble();
                    setTimeout(heightDecreaseUpDouble, 300);
                };
            });
        }
    }
});