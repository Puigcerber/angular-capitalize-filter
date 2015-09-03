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
 * @param {string} [separator] The character(s) to be used for separating the string.
 * If not specified, space is used.
 * @returns {string} Formatted string.
 */
angular.module('angular-capitalize-filter',[])
  .filter('capitalize', function () {
    return function (input, format, separator) {
      if (!input) {
        return input;
      }
      format = format || 'all';
      separator = separator || ' ';
      if (format === 'first') {
        // Capitalize the first letter of a sentence
        var output = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        if (separator === ' ') {
          return output;
        } else {
          return output.split(separator).join(' ');
        }
      } else {
        return input.split(separator).map(function(word) {
          if (word.length === 2 && format === 'team') {
            // Uppercase team abbreviations like FC, CD, SD
            return word.toUpperCase();
          } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          }
        }).join(' ');
      }
    };
  });
