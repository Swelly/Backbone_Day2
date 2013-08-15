// MODEL: Weapon
var Weapon = Backbone.Model.extend({
  idAttribute: "slug",
  defaults: {
    name: "Thunderfury, Blessed Blade of the Windseeker",
    type: "Sword",
    slug: "blessed_blade",
    power_level: 9001
  }
});

//COLLECTION: Weapon*s*
var Weapons = Backbone.Collection.extend({
  model: Weapon
});

//ROUTER: Everything
var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'indexWeapons',
    'weapons/:slug': 'showWeapon'
  },

  initialize: function() {
    // takes parameters. In this case, an array of weapons
    this.weapons = new Weapons([
      new Weapon({name: "Mjolnir", type: "Hammer", slug: "mjolnir", power_level: 90000}),
      new Weapon({name: "Needle", type: "Sword", slug: "needle", power_level: 10}),
      new Weapon({name: "Warglaive of Azzinoth", type: "Sword", slug: "warglaive_of_azzinoth", power_level: 50000})
    ]);
  },

  indexWeapons: function () {
    var index_weapons_view = new IndexWeaponsView({collection: this.weapons});
    index_weapons_view.render();
  },

  showWeapon: function(slug) {
    // Single Weapon
    var weapon = this.weapons.get(slug);
    // Giving it an instance of a weapon - model: weapon
    var show_weapon_view = new ShowWeaponView({model: weapon});
    show_weapon_view.render();
  }

});

// Views: to look at weapons
  // App View
  // IndexWeapons
  // ShowWeapon

var ShowWeaponView = Backbone.View.extend({

  initialize: function () {

  },

  render: function () {
    var source = $('#show-weapon-template').html(),
        template = Handlebars.compile(source),
        templateHTML = template(this.model.toJSON());
    $('#main').html(templateHTML); // REFACTOR THIS LINE

    return this;
  }

});

// Single view for our list
var ListSingleWeaponView = Backbone.View.extend({
  tagName: 'div',
  events: {
    'click':'view'
  },

  render: function(){
    var source = $('#show-weapon-template').html(),
      template = Handlebars.compile(source),
      templateHTML = template(this.model.toJSON());
    $('#main').append(templateHTML); // REFACTOR THIS LINE

    return this;
  },

  view: function() {
    debugger;
    app.navigate('weapons/' + this.model.slug, true);
  }

});

// Multiple Weapons
var IndexWeaponsView = Backbone.View.extend({
  el: $('#main'),
  initialize: function () {
    var appViewTemplate = $('#app-template').html();
    this.$el.html(appViewTemplate);
    this.list = $('#weapons-list');
  },

  render: function() {
    this.collection.each(function(weapon){
      var view = new ListSingleWeaponView({model: weapon});
      view.render();
    });

    return this;
  }

});

// jQuery Onload Function

$(function(){
  app = new AppRouter;
  Backbone.history.start();
});
