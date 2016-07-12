import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this._super(...arguments);
    this.barData = [
      ['0 - 30', 2.5],
      ['31 - 60', 7.5],
      ['61 - 90', 12.5],
      ['91 - 120', 77.5]
    ];
   }
});
