var app = angular.module('TabItElectron', ['ngMaterial', 'ui.router', 'SmoothScrollbar', 'ngAnimate']);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('red', {
      'default': '300', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
        .accentPalette('grey');
});

app.config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('.././Assets/mdi.svg')
});

var fs = require("fs");
var sqlite3 = require('sqlite3').verbose();
var velocity = require('../../Bower Library/velocity/velocity.js');

window.snap = require('snapsvg');
window.$ = window.jQuery = require('../../Bower Library/jquery/dist/jquery.js');

// Left and right functions

function Left(str, n){
	if (n <= 0)
	    return "";
	else if (n > String(str).length)
	    return str;
	else
	    return String(str).substring(0,n);
}
function Right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}

// CSS copying functions

(function($){
    $.fn.getStyleObject = function(){
        var dom = this.get(0);
        var style;
        var returns = {};
        if(window.getComputedStyle){
            var camelize = function(a,b){
                return b.toUpperCase();
            };
            style = window.getComputedStyle(dom, null);
            for(var i = 0, l = style.length; i < l; i++){
                var prop = style[i];
                var camel = prop.replace(/\-([a-z])/g, camelize);
                var val = style.getPropertyValue(prop);
                returns[camel] = val;
            };
            return returns;
        };
        if(style = dom.currentStyle){
            for(var prop in style){
                returns[prop] = style[prop];
            };
            return returns;
        };
        return this.css();
    }
})(jQuery);

(function($){
    $.fn.copyCSS = function(source){
        var styles = $(source).getStyleObject();
        this.css(styles);
    }
})(jQuery);

// Test commit from master-desktop