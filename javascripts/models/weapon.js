var App = App || {};
// MODEL: Weapon
App.Weapon = Backbone.Model.extend({
  idAttribute: "slug",
  defaults: {
    name: "Thunderfury, Blessed Blade of the Windseeker",
    type: "Sword",
    slug: "blessed_blade",
    power_level: 9001
  }
});
