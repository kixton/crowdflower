'use strict';
angular.module('crowdflowerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.useCases = {
      main: [
        'Sentiment Analysis',
        'Search Relevance Tuning',
        'Data Categorization',
        'Business Data Enrichment',
        'Metadata Creation',
        'Image Annotation',
        'Transcription',
        'Deduplication',
      ],
      other: [
        'Content Moderation',
        'Start From Scratch'
      ]
    };

    $scope.showAllUseCases = false;
    $scope.showMore = function() {
      $scope.showAllUseCases = $scope.showAllUseCases ? false : true;
    };

    $scope.descriptionModel = '';
    $scope.characterCount = $scope.descriptionModel.length;
    $scope.inputUpdate = function() {
      $scope.characterCount = $scope.descriptionModel.length;
      if ($scope.characterCount > 140) {
        $scope.maxCharacters = true;
        $scope.showMaxErrorMessage = true;
      } else {
        $scope.maxCharacters = false;
        $scope.showMaxErrorMessage = false;
      }
    };
    
  });