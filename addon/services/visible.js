import Ember from 'ember';

export default Ember.Service.extend({
  now: true, //Main property we are modifying
  state: "init",
  visibilityChangeEvent: "visibilitychange",
  visibleStateName: "visibilityState",

  /*
    This function is the heart of the service, it determines
    if the document is visible or not
  */
  determineVisibility: function() {
    var state = document[this.get("visibleStateName")];
    switch (state) {
     case "visible":
        this.set("now", true);
        break;
     case "hidden":
        this.set("now", false);
    }
  },

  init: function() {
    this._super();
    this.setupVendorSupport();
    this.setupEventListeners();
    this.determineVisibility();
  },
  setupVendorSupport: function() {
    if (typeof document.mozHidden !== "undefined") {
      this.set("visibilityChangeEvent", "mozvisibilitychange");
      this.set("visibleStateName", "mozVisibilityState");
    } else if (typeof document.msHidden !== "undefined") {
      this.set("visibilityChangeEvent", "msvisibilitychange");
      this.set("visibleStateName", "msVisibilityState");
    } else if (typeof document.webkitHidden !== "undefined") {
      this.set("visibilityChangeEvent", "webkitvisibilitychange");
      this.set("visibleStateName", "webkitVisibilityState");
    }
  },
  setupEventListeners: function() {
    var boundCallback = Ember.run.bind(this, 'determineVisibility');
    document.addEventListener(this.get("visibilityChangeEvent"), boundCallback);
    window.onblur = () => {
      this.set("state", "blur");
      this.set("now", false);
    };
    window.onfocus = boundCallback;
  },
  willDestroy: function() {
    document.removeEventListener(this.get("visibilityChangeEvent"), window.onfocus);
    window.onblur = () => {};
    window.onfocus = () => {};
  }

});
