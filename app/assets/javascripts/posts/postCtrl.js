angular.module('flapperNews').controller('PostCtrl', [
	'$scope',
	'posts',
	'post',
	function($scope, posts, posts) {
		$scope.post = post;

	$scope.addComment = function(){
	  if($scope.body === '') { return; }
	  posts.addComment(post.id, {
	    body: $scope.body,
	    author: 'user',
	  }).then(function(comment) {
	    $scope.post.comments.push(comment);
	  });
	  $scope.body = '';
	};

	$scope.incrementUpvotes = function(comment){
	  posts.upvoteComment(post, comment);
	};
	
}]);

