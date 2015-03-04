import angular from 'angular';
import main from 'src/main';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {

    var body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ main.name ], { strictDi: false });

  });
