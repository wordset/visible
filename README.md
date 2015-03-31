# Visible

This is an ember-cli addon that helps you deal with whether or not your
application is currently visible to the user or not. For instance, whether
the user is on another tab or has blurred the browser entirely.

Just install in your app, and then controllers and routes can access the two main ways of interacting with this plugin: `this.visible.now` (boolean) and `this.visilble.state` (string repsonse). E.g.

```
  import Ember from 'ember';

  export default Ember.Controller.extend({
    showNotifications: function() {
      return this.visible.now && this.get("settings.notify");
    }.property("visible.now"),
  });
```

You can also use `this.visible.state` to get the current state of visibility.
Either `visible`, `hidden`, `blur`, or `init` (rarely).

## Installation

* Run `ember install:addon ember-cli-visible`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
