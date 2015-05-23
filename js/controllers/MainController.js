app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
        classname: 'prog',
	    icon: 'img/prog_tn_sq.png',
	    title: 'Programming', 
	    subtitle: 'MOVE, Inc.', 
	    price: 0.99 
	  }, 
	  { 
        classname: 'photos',
	    icon: 'img/photos_tn_sq.png',
	    title: 'Photos', 
	    subtitle: 'Chico Dusty', 
	    price: 2.99 
	  },
	  {
        classname: 'videos',
	    icon: 'img/videos_tn_sq.png',
	    title: 'Videos',
	    subtitle: 'Armando P.',
	    price: 1.99
	  },
	  {
        classname: 'music',
	    icon: 'img/music_tn_sq.png',
	    title: 'Music',
	    subtitle: 'Forecast',
	    price: 1.99
	  }
	];
}]);
