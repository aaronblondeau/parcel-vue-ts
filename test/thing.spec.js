const testMap = require('../dist_test/test_map.js').default
const Vue = require('vue')
const _ = require('lodash')
const expect = require('chai').expect

describe('Thing', function() {
  it('has initial data', () => {
    var thing = new testMap.Thing()
    expect(thing.count).to.equal(0)
  })

  it('onClick increments count', () => {
    var thing = new testMap.Thing()
    expect(thing.count).to.equal(0)
    thing.onClick()
    expect(thing.count).to.equal(1)
  })

  it('renders', (done) => {
    const Constructor = Vue.extend(testMap.Thing)
    const vm = new Constructor().$mount()
    vm.message = 'WeeHaw'
    // wait a "tick" after state change before asserting DOM updates
    Vue.nextTick(() => {
      expect(vm.$el.textContent).to.contain('WeeHaw')
      done()
    })
  })
});
