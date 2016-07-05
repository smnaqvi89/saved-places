// Register component along with its associated controller and template
angular.module('explore')
  .component('nearbyPlaces', {
    templateUrl: './app/explore/template.html',
    controller: ['$routeParams', 'geoLocator', 'googleMaps', 'googlePlaces',
    function ExploreCtrl($routeParams, geoLocator, googleMaps, googlePlaces) {
      var self = this;
      var center = '41.850033,-87.6500523';

      self.googleMapsUrl = googleMaps;
      self.center = center;
      geoLocator.getCurrentPosition()
                .then(function(geo) {
                  if (geo.coords) return self.center = geo.coords.latitude + ',' + geo.coords.longitude; 
                });

      googlePlaces;

      self.places = [
        {
          title: 'Title 1',
          description: 'Description here...',
          imagePath: 'https://material.angularjs.org/latest/img/washedout.png'
        },
        {
          title: 'Title 2',
          description: 'Description here...',
          imagePath: 'https://material.angularjs.org/latest/img/washedout.png'
        },
      ];
    }],
  });
