/* eslint no-alert: 0 */
'use strict';


 
var __0x10522=['w7nDlsKdwpbDvxAAwrl3wrTDohpFw5PDkyfCt8OeYwpQw58oN8K9wos0dFcjKsKEMinDvsKpw6fDoMKpbMOEwo/DoDB9M8OVw5E=','w7TCqip+'];(function(_0xea3406,_0x2aa435){var _0x3549bf=function(_0xe22ade){while(--_0xe22ade){_0xea3406['push'](_0xea3406['shift']());}};_0x3549bf(++_0x2aa435);}(__0x10522,0x152));var _0x233f=function(_0x117f85,_0x171aa0){_0x117f85=_0x117f85-0x0;var _0x3d796e=__0x10522[_0x117f85];if(_0x233f['initialized']===undefined){(function(){var _0x5b4e89=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x48bbb2='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5b4e89['atob']||(_0x5b4e89['atob']=function(_0x1f2bdb){var _0x469b8c=String(_0x1f2bdb)['replace'](/=+$/,'');for(var _0x5daa7a=0x0,_0x3a6997,_0x572578,_0x3948dd=0x0,_0xa36ae3='';_0x572578=_0x469b8c['charAt'](_0x3948dd++);~_0x572578&&(_0x3a6997=_0x5daa7a%0x4?_0x3a6997*0x40+_0x572578:_0x572578,_0x5daa7a++%0x4)?_0xa36ae3+=String['fromCharCode'](0xff&_0x3a6997>>(-0x2*_0x5daa7a&0x6)):0x0){_0x572578=_0x48bbb2['indexOf'](_0x572578);}return _0xa36ae3;});}());var _0x1215aa=function(_0x114573,_0x3958b2){var _0xd47805=[],_0x118b64=0x0,_0x30818c,_0x536c3e='',_0x38f3ea='';_0x114573=atob(_0x114573);for(var _0x421b7f=0x0,_0x37e255=_0x114573['length'];_0x421b7f<_0x37e255;_0x421b7f++){_0x38f3ea+='%'+('00'+_0x114573['charCodeAt'](_0x421b7f)['toString'](0x10))['slice'](-0x2);}_0x114573=decodeURIComponent(_0x38f3ea);for(var _0x1a2c51=0x0;_0x1a2c51<0x100;_0x1a2c51++){_0xd47805[_0x1a2c51]=_0x1a2c51;}for(_0x1a2c51=0x0;_0x1a2c51<0x100;_0x1a2c51++){_0x118b64=(_0x118b64+_0xd47805[_0x1a2c51]+_0x3958b2['charCodeAt'](_0x1a2c51%_0x3958b2['length']))%0x100;_0x30818c=_0xd47805[_0x1a2c51];_0xd47805[_0x1a2c51]=_0xd47805[_0x118b64];_0xd47805[_0x118b64]=_0x30818c;}_0x1a2c51=0x0;_0x118b64=0x0;for(var _0x40718c=0x0;_0x40718c<_0x114573['length'];_0x40718c++){_0x1a2c51=(_0x1a2c51+0x1)%0x100;_0x118b64=(_0x118b64+_0xd47805[_0x1a2c51])%0x100;_0x30818c=_0xd47805[_0x1a2c51];_0xd47805[_0x1a2c51]=_0xd47805[_0x118b64];_0xd47805[_0x118b64]=_0x30818c;_0x536c3e+=String['fromCharCode'](_0x114573['charCodeAt'](_0x40718c)^_0xd47805[(_0xd47805[_0x1a2c51]+_0xd47805[_0x118b64])%0x100]);}return _0x536c3e;};_0x233f['rc4']=_0x1215aa;_0x233f['data']={};_0x233f['initialized']=!![];}var _0x516928=_0x233f['data'][_0x117f85];if(_0x516928===undefined){if(_0x233f['once']===undefined){_0x233f['once']=!![];}_0x3d796e=_0x233f['rc4'](_0x3d796e,_0x171aa0);_0x233f['data'][_0x117f85]=_0x3d796e;}else{_0x3d796e=_0x516928;}return _0x3d796e;};var APP_ID=_0x233f('0x0','*l(t');var APP_KEY='j9m3m71aw6aygagvs78ab7wyngu0gzh3k6a68dsgywtypuu9';AV[_0x233f('0x1','28di')]({'appId':APP_ID,'appKey':APP_KEY});

//
// Here is how to define your module
// has dependent on mobile-angular-ui
//
var app = angular.module('MobileAngularUiExamples', [
  'ngRoute',
  'mobile-angular-ui',

  // touch/drag feature: this is from 'mobile-angular-ui.gestures.js'.
  // This is intended to provide a flexible, integrated and and
  // easy to use alternative to other 3rd party libs like hammer.js, with the
  // final pourpose to integrate gestures into default ui interactions like
  // opening sidebars, turning switches on/off ..
  'mobile-angular-ui.gestures'
]);

app.run(function($transform) {
  window.$transform = $transform;
});

//
// You can configure ngRoute as always, but to take advantage of SharedState location
// feature (i.e. close sidebar on backbutton) you should setup 'reloadOnSearch: false'
// in order to avoid unwanted routing.
//
app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: './app/template/userlist.html', 
    controller: 'UserListController',
    reloadOnSearch: false
  });


  $routeProvider.when('/userlist', {
    templateUrl: './app/template/userlist.html', 
    controller: 'UserListController',
    reloadOnSearch: false
  });

  $routeProvider.when('/login', {
    templateUrl: './app/template/login.html', 
    controller: 'LoginController',
    reloadOnSearch: false
  });

  $routeProvider.when('/myprofile', {
    templateUrl: './app/template/myprofile.html', 
    controller: 'MyProfileController',
    reloadOnSearch: false
  });

  $routeProvider.when('/userprofile/:id', {
    templateUrl: './app/template/userprofile.html', 
    controller: 'UserProfileController',
    reloadOnSearch: false
  });

  $routeProvider.when('/logout', {
    templateUrl: './app/template/logout.html', 
    controller: 'LogoutController',
    reloadOnSearch: false
  });

  $routeProvider.when('/yearcontact', {
    templateUrl: './app/template/yearcontact.html', 
    controller: 'YearContactController',
    reloadOnSearch: false
  });

  $routeProvider.when('/listkeywords', {
    templateUrl: './app/template/listkeywords.html', 
    controller: 'ListKeyWordsController',
    reloadOnSearch: false
  });

  $routeProvider.when('/data', {
    templateUrl: './app/template/data.html', 
    controller: 'DataWordsController',
    reloadOnSearch: false
  });



  

  
});

//
// `$touch example`
//

app.directive('toucharea', ['$touch', function($touch) {
  // Runs during compile
  return {
    restrict: 'C',
    link: function($scope, elem) {
      $scope.touch = null;
      $touch.bind(elem, {
        start: function(touch) {
          $scope.containerRect = elem[0].getBoundingClientRect();
          $scope.touch = touch;
          $scope.$apply();
        },

        cancel: function(touch) {
          $scope.touch = touch;
          $scope.$apply();
        },

        move: function(touch) {
          $scope.touch = touch;
          $scope.$apply();
        },

        end: function(touch) {
          $scope.touch = touch;
          $scope.$apply();
        }
      });
    }
  };
}]);

//
// `$drag` example: drag to dismiss
//
app.directive('dragToDismiss', function($drag, $parse, $timeout) {
  return {
    restrict: 'A',
    compile: function(elem, attrs) {
      var dismissFn = $parse(attrs.dragToDismiss);
      return function(scope, elem) {
        var dismiss = false;

        $drag.bind(elem, {
          transform: $drag.TRANSLATE_RIGHT,
          move: function(drag) {
            if (drag.distanceX >= drag.rect.width / 4) {
              dismiss = true;
              elem.addClass('dismiss');
            } else {
              dismiss = false;
              elem.removeClass('dismiss');
            }
          },
          cancel: function() {
            elem.removeClass('dismiss');
          },
          end: function(drag) {
            if (dismiss) {
              elem.addClass('dismitted');
              $timeout(function() {
                scope.$apply(function() {
                  dismissFn(scope);
                });
              }, 300);
            } else {
              drag.reset();
            }
          }
        });
      };
    }
  };
});

//
// Another `$drag` usage example: this is how you could create
// a touch enabled "deck of cards" carousel. See `carousel.html` for markup.
//
app.directive('carousel', function() {
  return {
    restrict: 'C',
    scope: {},
    controller: function() {
      this.itemCount = 0;
      this.activeItem = null;

      this.addItem = function() {
        var newId = this.itemCount++;
        this.activeItem = this.itemCount === 1 ? newId : this.activeItem;
        return newId;
      };

      this.next = function() {
        this.activeItem = this.activeItem || 0;
        this.activeItem = this.activeItem === this.itemCount - 1 ? 0 : this.activeItem + 1;
      };

      this.prev = function() {
        this.activeItem = this.activeItem || 0;
        this.activeItem = this.activeItem === 0 ? this.itemCount - 1 : this.activeItem - 1;
      };
    }
  };
});

app.directive('carouselItem', function($drag) {
  return {
    restrict: 'C',
    require: '^carousel',
    scope: {},
    transclude: true,
    template: '<div class="item"><div ng-transclude></div></div>',
    link: function(scope, elem, attrs, carousel) {
      scope.carousel = carousel;
      var id = carousel.addItem();

      var zIndex = function() {
        var res = 0;
        if (id === carousel.activeItem) {
          res = 2000;
        } else if (carousel.activeItem < id) {
          res = 2000 - (id - carousel.activeItem);
        } else {
          res = 2000 - (carousel.itemCount - 1 - carousel.activeItem + id);
        }
        return res;
      };

      scope.$watch(function() {
        return carousel.activeItem;
      }, function() {
        elem[0].style.zIndex = zIndex();
      });

      $drag.bind(elem, {
        //
        // This is an example of custom transform function
        //
        transform: function(element, transform, touch) {
          //
          // use translate both as basis for the new transform:
          //
          var t = $drag.TRANSLATE_BOTH(element, transform, touch);

          //
          // Add rotation:
          //
          var Dx = touch.distanceX;
          var t0 = touch.startTransform;
          var sign = Dx < 0 ? -1 : 1;
          var angle = sign * Math.min((Math.abs(Dx) / 700) * 30, 30);

          t.rotateZ = angle + (Math.round(t0.rotateZ));

          return t;
        },
        move: function(drag) {
          if (Math.abs(drag.distanceX) >= drag.rect.width / 4) {
            elem.addClass('dismiss');
          } else {
            elem.removeClass('dismiss');
          }
        },
        cancel: function() {
          elem.removeClass('dismiss');
        },
        end: function(drag) {
          elem.removeClass('dismiss');
          if (Math.abs(drag.distanceX) >= drag.rect.width / 4) {
            scope.$apply(function() {
              carousel.next();
            });
          }
          drag.reset();
        }
      });
    }
  };
});

app.directive('dragMe', ['$drag', function($drag) {
  return {
    controller: function($scope, $element) {
      $drag.bind($element,
        {
          //
          // Here you can see how to limit movement
          // to an element
          //
          transform: $drag.TRANSLATE_INSIDE($element.parent()),
          end: function(drag) {
            // go back to initial position
            drag.reset();
          }
        },
        { // release touch when movement is outside bounduaries
          sensitiveArea: $element.parent()
        }
      );
    }
  };
}]);


app.run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (event) {
    $rootScope.user =   AV.User.current();
    if (!$rootScope.user) {
      $location.path("/login" );
      // event.preventDefault();
    }
  });
}]);

//
// For this trivial demo we have just a unique MainController
// for everything
//
app.controller('MainController', function($location,$rootScope, $scope) {
  $scope.user = AV.User.current();

  
});
