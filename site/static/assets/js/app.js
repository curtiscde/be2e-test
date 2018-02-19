angular.module('app', [])
    .controller('countdown', function($scope){
    })
    .directive('countdowndir', function($window){
        return {
            link: function($scope){

                var calculateCountdownTime = function(){

                    var date_now = new Date();
                    var date_future = new Date('8/7/2018');

                    console.log(date_now);
            
                    var delta = Math.abs(date_future - date_now) / 1000;
            
                    var days = Math.floor(delta / 86400);
                    delta -= days * 86400;
            
                    var hours = Math.floor(delta / 3600) % 24;
                    delta -= hours * 3600;
            
                    var minutes = Math.floor(delta / 60) % 60;
                    delta -= minutes * 60;
            
                    var seconds = parseInt(delta % 60);
            
                    return {
                        days: days,
                        hours: hours,
                        minutes: minutes,
                        seconds: seconds
                    }
                }

                $scope.countdown = calculateCountdownTime();
                
                $window.setInterval(function(){
                    $scope.countdown = calculateCountdownTime();
                    $scope.$apply();
                },1000);

            }, 
            template: '{{ countdown.days }}<span>days</span> {{ countdown.hours }}<span>hrs</span> {{ countdown.minutes }}<span>mins</span> {{ countdown.seconds }}<span>secs</span>'
        }; 
    });

    