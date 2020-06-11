const INITIAL_STATE = {
    token: null,
    isAutenticado: false,
};

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@ADD_TOKEN':
            return {
                ...state,
                token: action.payload,
                isAutenticado: true,
            };
        case '@REMOVE_TOKEN':
            return {
                ...state,
                token: null,
                isAutenticado: false,
            };

        default: {
            return state;
        }
    }
}
