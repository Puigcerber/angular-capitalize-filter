# angular-capitalize-filter

AngularJS filter to capitalize sentences and specially team names.

## Installation

You can install the filter using [Bower](http://bower.io/):

```bash
$ bower install angular-capitalize-filter
```

Or [npm](https://www.npmjs.com/):

```bash
$ npm install angular-capitalize-filter
```

Then you have to include it in your HTML:

```html
<script src="bower_components/angular-capitalize-filter/capitalize.js"></script>
<script src="node_modules/angular-capitalize-filter/capitalize.js"></script>
```

And inject the module `puigcerber.capitalize` as a dependency in your application:

```js
angular.module('webApp', ['puigcerber.capitalize']);
```

## Usage

You can use it like any other AngularJS filter:

```html
<p>{{ input | capitalize:format:separator }}</p>
```

The format and separator are optional parameters. If not specified all the words are capitalized.

### Format

Available formats:

* [all](#all)
* [first](#first)
* [team](#team)

#### All

It capitalizes all the words of a given sentence. As it's the default format you can omit the parameter.

```html
<p>{{ sentence | capitalize:'all' }}</p>
```

#### First

It capitalizes just the first letter of the given sentence.

```html
<p>{{ sentence | capitalize:'first' }}</p>
```

#### Team

Specially adapted for team names, with uppercase abbreviation.

```html
<p>{{ teamName | capitalize:'team' }}</p>
```

It formats the team name as CD Logroñés, FC Barcelona or Valencia CF.

### Separator

By default the words in a sentence are separated by the space character. 
But any other character can be specified as a separator so we can humanize our output.

```html
<p>{{ underscored_sentence | capitalize:'all':'_' }}</p>
```

## Related

* [camelize](https://github.com/Puigcerber/angular-camelize-filter): 
AngularJS filter to convert strings to lower camel case replacing non-alphanumeric characters.
* [lowerize](https://github.com/Puigcerber/angular-lowerize-filter): 
AngularJS filter to convert strings to lower case replacing non-alphanumeric characters.

## License

MIT © [Pablo Villoslada Puigcerber](http://pablovilloslada.com)
