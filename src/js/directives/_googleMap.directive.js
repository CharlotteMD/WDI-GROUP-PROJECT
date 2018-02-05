angular
  .module('appres')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window'];
function googleMap($window) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map">Google Map goes here</div>',
    scope: {
      center: '=',
      contentString: '@'
    },
    link(scope, element) {
      var map = new $window.google.maps.Map(element[0], {
        zoom: 8,
        mapTypeId: 'hybrid',
        center: scope.center
      });
      var marker = new $window.google.maps.Marker({
        position: scope.center,
        animation: google.maps.Animation.DROP,
        map: map
      });
      var infowindow = new google.maps.InfoWindow({
        content: scope.contentString
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    }
  };
}