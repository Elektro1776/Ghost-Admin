export default Ember.Component.extend({

  classNames: ['chart'],

  renderChart() {
    return this.$().highcharts({
      chart: {
        height: 275
      },
      title: 'Analytics',
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        type: 'bar',
        data: this.get('data')
      }],
      //colors: ['#777777', '#888888', '#999999', '#aaaaaa', '#bbbbbb', '#cccccc', '#dddddd', '#eeeeee'],
      credits: {
        enabled: false
      }
    });
  },

  didUpdateAttrs() {
    let chart = this.$().highcharts();
    let series = this.get('data');
    chart.series[0].setData(series);
  },

  didInsertElement() {
    this._super(...arguments);
    this.renderChart();
  },

  willDestroyElement() {
    this.$().highcharts().destroy();
  }
});
