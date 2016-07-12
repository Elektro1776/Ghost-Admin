import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this._super(...arguments);
    this.barData = [
      [32, 2.5],
      [25, 7.5],
      [13, 12.5],
      [23, 77.5]
    ];
   }
});
