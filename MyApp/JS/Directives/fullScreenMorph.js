app.directive('fullScreenMorph', ['$timeout', function($timeout){
    var directive = {
        restrict: 'A',
        scope: false,
        link: createLink
    };

    return directive;
}]);

function createLink(scope, element, attr, main){
    var button = $('#initial-create-button');
    var icon = $('#create-icon')
    var oldButtonText = $('#initial-create-button-span');
    var formContainer = $('#create-form-container');
    
    $timeout = scope.main.timeOut;
    
    element.on('click', function () {
        if(!scope.main.createFormOpen)
        {
            iconExit.start();
            velocity(oldButtonText, {
                "opacity": "0"
            }, {
                duration: 300,
                easing: "easeOutExpo",
            });
            velocity(button, {
                'width': "100vw",
                'height': "30vh",
                'left': 0,
                'top': 0,
                'margin': 0,
                'border-radius': "0%"
            }, {
                duration: 450,
                easing: "easeInOutCubic",
                queue: false,
                delay: 300,
                complete: function () {
                    scope.$apply(oldButtonText.addClass('not-present'));
                    scope.$apply(button.removeAttr('md-ink-ripple'));
                    scope.$apply(button.removeClass('md-ink-ripple'));
                    scope.$apply(button.attr('md-no-ink', ''));
                    scope.$apply($('.md-ripple-container').remove());
                    scope.$apply(formContainer.removeClass('not-present'));
                    scope.$apply(scope.main.createFormOpen = true);
                    scope.$apply($('#animation-frame').removeClass("not-present"));
                }
            });
            velocity(formContainer, {
                'top': "30vh"
            }, {
                duration: 450,
                easing: "easeInOutCubic",
                queue: false,
                delay: 300
            });
        };
    });
    $('body').on('keyup', function (event) 
    {
        if (event.keyCode == 27 && scope.main.createFormOpen) 
        {
            scope.main.createFormClosing = true;
            scope.main.createFormOpen = false;
            velocity(formContainer, {
                'left': '20vw',
                'top': '30vh',
                'height': '70vh',
                'width': '80vw'
            }, {
                duration: 400,
                queue: false,
                easing: 'swing'
            });
            
            setTimeout( function() { velocity(formContainer, {
                    'opacity': '0'
                }, { 
                    duration: 250,
                    queue: false,
                    easing: 'easeInOutCirc' 
                })
            }, 800);
            setTimeout( function() { velocity(button, {
                    'width': '11.9vh',
                    'height': '11.9vh',
                    'left': '85vw',
                    'top': '24vh'
                }, { 
                    duration: 650,
                    queue: false,
                    easing: 'easeInOutCubic' 
                })
            }, 800);
            setTimeout( function() { velocity(button, {
                    'border-radius': '50%'
                }, { 
                    duration: 450,
                    queue: false,
                    easing: 'easeInOutCirc' 
                })
            }, 1000);
            setTimeout( function() {
                scope.$apply(icon.removeClass('not-present'));
                iconEntrance.start();
            }, 1450)
        };
    });
    
    var expandCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
    var shrinkCurve = mojs.easing.path('M0, 0, C80, 0, 100, 80, 100, 100');
    var el = document.querySelector('#animation-frame');
	var elSpan = document.querySelector('#create-icon');
	// mo.js timeline obj
	var iconEntrance = new mojs.Timeline();
    var iconExit = new mojs.Timeline();

	// tweens for the animation:

	// burst animation
	var tween1 = new mojs.Burst({
		parent: el,
		duration: 1500,
		shape : 'circle',
		fill : [ '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF' ],
		x: '88%',
		y: '29.95%',
		opacity: 0.6,
		childOptions: { radius: {20:0} },
		radius: {100:200},
		count: 6,
		isSwirl: true,
		isRunLess: true,
		easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
	});
	// ring animation
	var tween2 = new mojs.Transit({
		parent: el,
		duration: 750,
		type: 'circle',
		radius: {0: 100},
		fill: 'transparent',
		stroke: '#FFFFFF',
		strokeWidth: {15:0},
		opacity: 0.6,
		x: '88%',     
		y: '29.95%',
		isRunLess: true,
		easing: mojs.easing.bezier(0, 1, 0.5, 1)
	});
	// icon scale animation
	var tween3 = new mojs.Tween({
		duration : 900,
		onUpdate: function(progress) {
			var expandProgress = expandCurve(progress);
			elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(' + expandProgress + ',' + expandProgress + ',1)';
		}
	});
    var tween4 = new mojs.Tween({
		duration : 250,
		onUpdate: function(progress) {
			var shrinkProgress = shrinkCurve(progress);
			elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(' + shrinkProgress + ',' + shrinkProgress + ',1)';
		}
	});

    // add tweens to timeline:
    iconEntrance.add(tween2, tween3);
    iconExit.add(tween1, tween4);
    
    window.testOut = function() { iconExit.start(); };
    window.testIn = function() { iconEntrance.start(); };

    
}