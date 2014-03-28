'use strict';

describe('Filter: capitalize', function () {

  // load the filter's module
  beforeEach(module('webApp'));

  // initialize a new instance of the filter before each test
  var capitalize;
  beforeEach(inject(function ($filter) {
    capitalize = $filter('capitalize');
  }));

  it('should return the uppercase input with all the words capitalized', function () {
    var text = 'CLUB DEPORTIVO LOGROÑÉS';
    expect(capitalize(text)).toBe('Club Deportivo Logroñés');
  });

  it('should return the lowercase input with all the words capitalized', function () {
    var text = 'sd logroñés';
    expect(capitalize(text)).toBe('SD Logroñés');
  });

});
