// MODEL: Weapon
var Weapon = Backbone.Model.extend({
  defaults: {
    name: "Thunderfury, Blessed Blade of the Windseeker",
    type: "Sword",
    slug: "blessed_blade",
    power_level: "9001"
  }
});

//COLLECTION: Weapon*s*
var Weapons = Backbone.Model.extend({
  model: Weapon
});

//ROUTER: Everything

// Views: to look at weapons
  // App View
  // IndexWeapons
  // ShowWeapon

var ShowWeaponView = Backbone.View.extend({
  // initialize: function () {

  // },

  render: function () {
    var weapon = new Weapon(),
        source = $('#show-weapon-template').html(),
        template = Handlebars.compile(source),
        templateHTML = template(weapon.toJSON());
    $('#main').html(templateHTML);
  }
});

// jQuery Onload Function
