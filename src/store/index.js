import { createStore } from "vuex"
import { getField, updateField } from 'vuex-map-fields';

const store = createStore({
    strict: true, 
    state()
    {
        return{
            fieldA: 'ChangeMe-FieldA',
            fieldB: 'ChangeMe-FieldB',
        }
    },
    getters: {
        getField,
    },
    mutations: {
        updateField,
    }
    
    
})

export default store