/**
 * Created by Sahar-PC on 25/04/2017.
 */
angular.module('DutyCtrl',[]).controller('DutyController',function($scope){
    $scope.dutyList = [{
        Date:'1.1.15',
        Type: "נגד תורן",
        isShabat:true
    },
        {
            Date:'1.3.15',
            Type: "קצין תורן",
            isShabat:false
        }
    ];
});