# angular-capitalize-filter

AngularJS filter to capitalize sentences and specially team names.

## Installation

You can install the filter using [Bower](http://bower.io/):

```bash
$ bower install angular-capitalize-filter
```

Then you have to include it in your HTML:

```html
<script src="bower_components/angular-capitalize-filter/capitalize.js"></script>
```

And inject the module `customFilters` in your application:

```js
angular.module('webApp', ['customFilters']);
```

## Usage

You can use it like any other AngularJS filter:

```html
<p>{{ teamName | capitalize }}</p>
```