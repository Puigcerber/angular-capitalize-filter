'use strict';

describe('Filter: capitalize', function () {

  // load the filter's module
  beforeEach(module('customFilters'));

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

});
