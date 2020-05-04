export function signInRequest(email, password) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password },
    }
}

export function SignInSuccess(token, user) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { token, user },
    }
}

export function SignFailure() {
    return {
        type: '@auth/SIGN_FAILURE',
    }
}
