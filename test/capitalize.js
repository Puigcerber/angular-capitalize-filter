'use strict';

describe('Filter: capitalize', function () {

  // load the filter's module
  beforeEach(module('angular-capitalize-filter'));

  // initialize a new instance of the filter before each test
  var capitalize;
  beforeEach(inject(function ($filter) {
    capitalize = $filter('capitalize');
  }));

  describe('Format: team', function() {
    it('should return the uppercase input with uppercase abbreviation and the rest of the words capitalized', function () {
      var text = 'FC BARCELONA';
      expect(capitalize(text, 'team')).toBe('FC Barcelona');
    });

    it('should return the lowercase input with uppercase abbreviation and the rest of the words capitalized', function () {
      var text = 'sd logroñés';
      expect(capitalize(text, 'team')).toBe('SD Logroñés');
    });
  });

  describe('Format: all', function() {
    it('should return the uppercase input with all the words capitalized', function () {
      var text = 'CLUB DEPORTIVO LOGROÑÉS';
      expect(capitalize(text)).toBe('Club Deportivo Logroñés');
    });

    it('should return the lowercase input with all the words capitalized', function () {
      var text = 'la tierra con nombre de vino';
      expect(capitalize(text)).toBe('La Tierra Con Nombre De Vino');
    });
  });

  describe('Format: first', function() {
    it('should return the uppercase input with the first word capitalized', function () {
      var text = 'LIFE IS TOO SHORT FOR MANUAL TESTING.';
      expect(capitalize(text, 'first')).toBe('Life is too short for manual testing.');
    });

    it('should return the lowercase input with the first word capitalized', function () {
      var text = 'a code that cannot be tested is flawed.';
      expect(capitalize(text, 'first')).toBe('A code that cannot be tested is flawed.');
    });
  });

  describe('Separator', function () {
    it('should return the underscored sentence with the desired capitalization', function() {
      var text = 'COPY_and_PASTE_is_a_design_ERROR';
      expect(capitalize(text, 'all', '_')).toBe('Copy_And_Paste_Is_A_Design_Error');
      expect(capitalize(text, 'first', '_')).toBe('Copy_and_paste_is_a_design_error');
    });
  });

});
