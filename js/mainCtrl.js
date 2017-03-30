angular.module('chatroom').controller('mainCtrl', function($scope, messageService) {

    //The getMessages function will call the getMessages method on the messageService object.
    //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)

    $scope.getMessages = function() {
        var promise2 = messageService.getMessages();
        promise2.then(function(results) {
            $scope.messages = results.data;
            // promise between controller and
        })

    };


    //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
    //pass that text to the postMessage method on the messageService object which will
    //then post it to the backend.

    $scope.postMessage = function(messages) {
        var promise4 = messageService.postMessage(messages);

    }

    //uncomment this code when your getMessages function is finished
    //This goes and gets new data every second, which mimicking a chat room experience.
    setInterval(function() {
        $scope.getMessages();

    }, 1500)

})
