app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
        classname: 'prog',
	    icon: 'img/prog_tn_sq.png',
	    title: 'Programming', 
	    subtitle: 'MOVE, Inc.', 
	    price: 0.99,
        link1: '#',
        link1name: 'link 1 name'
	  }, 
	  { 
        classname: 'photos',
	    icon: 'img/photos_tn_sq.png',
	    title: 'Photos', 
	    subtitle: 'Chico Dusty', 
	    price: 2.99,
        link1: '#',
        link1name: 'link 1 name'
	  },
	  {
        classname: 'videos',
	    icon: 'img/videos_tn_sq.png',
	    title: 'Videos',
	    subtitle: 'Armando P.',
	    price: 1.99,
        link1: '#',
        link1name: 'link 1 name'
	  },
	  {
        classname: 'music',
	    icon: 'img/music_tn_sq.png',
	    title: 'Music',
	    subtitle: 'Forecast',
	    price: 1.99,
        link1: '#',
        link1name: 'link 1 name'
	  }
	];
}]);
