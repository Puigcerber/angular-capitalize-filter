# angular-capitalize-filter

AngularJS filter to capitalize sentences and specially team names.

## Installation

You can install the filter using (Bower)[http://bower.io/]:

    $ bower install angular-capitalize-filter

Then you have to include it in your HTML:

    <script src="bower_components/angular-capitalize-filter/capitalize.js"></script>

And inject the module `customFilters` in your application:

    angular.module('webApp', ['customFilters']);

## Usage

You can use it like any other AngularJS filter:

    <p>{{ teamName | capitalize }}</p>