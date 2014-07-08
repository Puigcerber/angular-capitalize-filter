'use strict';
/**
 * Capitalize Filter
 * Capitalizes all the words of a given sentence.
 * If the format parameter is set to 'team', uppercase the team abbreviation.
 * i.e. CLUB DEPORTIVO LOGROÑÉS => Club Deportivo Logroñés
 * i.e. sd logroñés => SD Logroñés
 * @author Pablo Villoslada Puigcerber <pablo85@gmail.com>
 *
 * @param {string} input The string to be formatted.
 * @param {string} [format] The format to be applied being the options 'all', 'first' or 'team'.
 * If not specified, 'all' is used.
 * @returns {string} Formatted string.
 */
angular.module('angular-capitalize-filter',[])
  .filter('capitalize', function () {
    return function (input, format) {
      if (!input) {
        return input;
      }
      format = format || 'all';
      if (format === 'first') {
        // Capitalize the first letter of a sentence
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
      } else {
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