import * as firebase from 'firebase'


export default {
    state: {
        user: null
    },
    getters: {
        user(state) {
            return state.user
        }
    },
    mutations: {
        setUser(state, payload){
            state.user = payload
        }
    },
    actions: {
        signUserUp({commit}, payload) {
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email ,payload.password)
                .then(
                    user => {
                        const newUser = {
                            id: user.id,
                            email: user.email,
                            password: user.password
                        }
                        commit('setUser', newUser)
                    }
                ).catch(error => {
                    commit('setError', error)
                    // console.log(error)
                })
        },
        signUserIn({commit}, payload) {
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        const newUser = {
                            id: user.id,
                            email: user.email,
                            password: user.password
                        }
                        commit('setUser', newUser)
                    }
                ).catch(error => {
                    commit('setError', error)
                    // console.log(error)
            })
        },
        logout ({commit}) {
            firebase.auth().signOut()
            commit('setUser', null)
        }
    }
}