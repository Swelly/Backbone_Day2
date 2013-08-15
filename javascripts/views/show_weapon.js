var App = App || {};
// Single
App.ShowWeaponView = Backbone.View.extend({
  el: $('#main'),
  render: function(){
    var source = $('#show-weapon-template').html(),
      template = Handlebars.compile(source),
      templateHTML = template(this.model.toJSON());
    this.$el.html(templateHTML); // REFACTOR THIS LINE

    return this;
  }
});
