export function addToken(token) {
    return {
        type: '@ADD_TOKEN',
        payload: token,
    };
}

export function removerToken() {
    return {
        type: '@REMOVE_TOKEN',
        payload: '',
    };
}
