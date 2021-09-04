
import {createStore} from 'vuex'
import test from './modules/test'

const store =  createStore({
    modules:{
        test
    }
})

export default store;