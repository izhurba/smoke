import Vue from 'vue'
import moxios from 'moxios'

function mount (Component, uses, options) {

  if (uses === null) uses = []
  uses.forEach(use => Vue.use(use))

  const Constructor = Vue.extend(Component)
  Object.assign(Constructor.options, options)
  return new Constructor().$mount()
}

function expectAsync (resp, cb) {
  moxios.wait(() => {
    let req = moxios.requests.mostRecent()
    req.respondWith(resp).then(cb)
  })
}

function storageMock () {
  var storage = {}

  return {
    setItem: function (key, value) {
      storage[key] = value || ''
    },
    getItem: function (key) {
      return key in storage ? storage[key] : null
    },
    removeItem: function (key) {
      delete storage[key]
    },
    get length () {
      return Object.keys(storage).length
    },
    key: function (i) {
      var keys = Object.keys(storage)
      return keys[i] || null
    }
  }
}

export {
  expectAsync, storageMock, mount
}
