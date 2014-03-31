'use strict';

/**
 * Capitalize Filter
 * Capitalizes all the words of a given sentence.
 * Specially adapted for team names.
 * i.e. CLUB DEPORTIVO LOGROÑÉS => Club Deportivo Logroñés
 * i.e. sd logroñés => SD Logroñés
 */
angular.module('customFilters',[])
  .filter('capitalize', function () {
    return function (input, format) {
      format = format || 'all';
      if (typeof input !== 'undefined') {
        var words = input.split(' ');
        var result = [];
        words.forEach(function(word) {
          if (word.length === 2 && format === 'team') {
            // Uppercase team abbreviations like FC, CD, SD
            result.push(word.toUpperCase());
          } else {
            result.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
          }
        });
        return result.join(' ');
      }
    };
  });