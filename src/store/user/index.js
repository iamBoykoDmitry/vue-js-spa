import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

function invalidToken(token) {
    return token !== '';
}

export default {
    namespaced: true,
    state: {
        token: '21',
        name: '',
    },
    getters: {
        isAuth(state) {
            return invalidToken(state.token);
        },
    },
    mutations: {
        setAuthUser(state, data) {
            state.user = data || {};
        },
    },
    actions: {
        doAuth(context, data) {
            const auth = getAuth();
            return signInWithEmailAndPassword(auth, data.login, data.password)
                .then((userCredential) => {
                    context.state.user = userCredential.user;
                    console.log('auth user', context.state.user);
                    return 'OK';
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    return `error ${ errorMessage }`;
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                });
        },
        logout(context) {
            context.state.user = {};
            const auth = getAuth();
            return signOut(auth).then(() => 'OK');
        },
    },
}