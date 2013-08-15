var App = App || {};
//ROUTER: Everything
App.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'indexWeapons',
    'weapons/:slug': 'showWeapon'
  },

  initialize: function() {
    // takes parameters. In this case, an array of weapons
    this.weapons = new App.Weapons([
      new App.Weapon({name: "Mjolnir", type: "Hammer", slug: "mjolnir", power_level: 90000}),
      new App.Weapon({name: "Needle", type: "Sword", slug: "needle", power_level: 10}),
      new App.Weapon({name: "Warglaive of Azzinoth", type: "Sword", slug: "warglaive_of_azzinoth", power_level: 50000})
    ]);
  },

  showWeapon: function(slug){
    // Single weapon
    var weapon = this.weapons.get(slug);
    var show_weapon_view = new App.ShowWeaponView({model: weapon});
    show_weapon_view.render();
  },
  indexWeapons: function() {
    var index_weapons_view = new App.IndexWeaponsView({collection: this.weapons});
    index_weapons_view.render();
  }
});
