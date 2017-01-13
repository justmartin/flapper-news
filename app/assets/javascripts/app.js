angular.module('flapperNews', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		});

		.state('posts', {
			url: 'posts/{id}',
			templateUrl: '/posts.html',
			controller: 'PostCtrl'
		});

	$urlRouterProvider.otherwise('home');
}]);


angular.module('flapperNews', [])
.factory('posts', function() {
	var = o {
		posts: []
	};
	return o;
});

angular.module('flapperNews', [])
.controller('MainCtrl', [
	'$scope', 
	'posts', 
	function($scope){

	$scope.posts = posts.posts;

	$scope.addPost = function(){
		if (!$scope.title || $scope.title === '') { return; }
		$scope.posts.push({
			title: $scope.title, 
			link: $scope.link,
			upvotes: 0,
			comments: [
				{author: 'Joe', body: 'Cool Post!', upvotes: 0},
				{author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
			]
		});
		$scope.title = '';
		$scope.link = '';
	};

	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	};
}]);

angular.module('flapperNews', [])
.controller('PostCtrl', [
	'$scope',
	'$stateParams',
	'posts',
	function($scope, $stateParams, posts) {
		$scope.post = posts.posts[$stateParams.id];
	}]);

	$scope.addComment = function(){
	  if($scope.body === '') { return; }
	  $scope.post.comments.push({
	    body: $scope.body,
	    author: 'user',
	    upvotes: 0
	  });
	  $scope.body = '';
	};





