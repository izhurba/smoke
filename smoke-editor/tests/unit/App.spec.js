import App from '@/App'
import Router from 'vue-router'
import Bulma from 'vue-bulma-components'
import {expect} from 'chai'
import {mount, storageMock} from './utils'

describe('App.vue', () => {

  beforeEach(() => {
    global.localStorage = storageMock()
  })

  it('should render correct contents', () => {
    const vm = mount(App, [Bulma], {router: new Router()})
    expect(vm.user.authenticated).to.equal(false)
  })

  it('should not logout unless logged in', () => {
    let router = new Router({
      routes: [
        {
          path: '/',
          name: 'Home'
        },
        {
          path: '/:id',
          name: 'Should not exist'
        }
      ]
    })
    const vm = mount(App, [Bulma], {router: router})
    const loggedIn = vm.user.authenticated
    vm.logout()
    expect(vm.user.authenticated).to.equal(loggedIn)
  })
})
