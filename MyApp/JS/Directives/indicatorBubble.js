app.directive('indicatorBubble', function() {
    return {
        link: function(scope, element, attrs) {
        var s = Snap(element[0]);
        var bubble = s.rect(18, 28, 15, 15, 7.5, 7.5);
        var bubbleY = parseInt(bubble.attr("y"));
        var initialBubbleY = bubbleY;
        var positionChangeAmount = 71;
        
        // Downward animation functions
        
        var heightDecreaseDown = function() {
            bubble.animate({height: 15}, 400, mina.backout);
        };
        var heightIncreaseDown = function() {
            bubble.animate({height: 71}, 400, mina.backin);
        };
        var positionDecrease = function() {
            bubbleY += positionChangeAmount;
            bubble.animate({y: bubbleY}, 400, mina.backout);
        };
        var heightDecreaseDownDouble = function() {
            bubble.animate({height: 15}, 400, mina.backout);
        };
        var heightIncreaseDownDouble = function() {
            bubble.animate({height: 71}, 400, mina.backin);
        };
        var positionDecreaseDouble = function() {
            bubbleY += (2 * positionChangeAmount);
            bubble.animate({y: bubbleY}, 400, mina.backout);
        };
        
        //Upward animation functions
        
        var positionIncrease = function() {
            bubbleY -= positionChangeAmount;
            bubble.animate({y: bubbleY}, 400, mina.backin);
        };
        var heightIncreaseUp = function() {
            bubble.animate({height: 71}, 380, mina.backin);
        };
        var heightDecreaseUp = function() {
            bubble.animate({height: 15}, 400, mina.backout);
        };
        
        var positionIncreaseDouble = function() {
            bubbleY = initialBubbleY;
            bubble.animate({y: bubbleY}, 400, mina.backin);
        };
        var heightIncreaseUpDouble = function() {
            bubble.animate({height: 71}, 380, mina.backin);
        };
        var heightDecreaseUpDouble = function() {
            bubble.animate({height: 15}, 400, mina.backout);
        };
        
        
        bubble.attr({
            fill: "#03A9F4",
            strokeWidth: 0
                });
                
        scope.$watch('main.status', function(newValue, oldValue) {
                if ((oldValue == "home" && newValue == "create") || (oldValue == "create" && newValue == "load")) {
                    heightIncreaseDown();
                    setTimeout(heightDecreaseDown, 400);
                    setTimeout(positionDecrease, 400);
                };
                if ((oldValue == "load" && newValue == "create") || (oldValue == "create" && newValue == "home")) {
                    positionIncrease();
                    heightIncreaseUp();
                    setTimeout(heightDecreaseUp, 400);
                };
                if (oldValue == "home" && newValue == "load") {
                    heightIncreaseDownDouble();
                    setTimeout(heightDecreaseDownDouble, 400);
                    setTimeout(positionDecreaseDouble, 400);
                };
                if (oldValue == "load" && newValue == "home") {
                    positionIncreaseDouble();
                    heightIncreaseUpDouble();
                    setTimeout(heightDecreaseUpDouble, 400);
                };
            });
        }
    }
});