const initialState = { openstate: false };

export default function common(state = initialState, action) {

    switch (action.type) {
        case 'SET_LEFTMENU':
            //     return {
            // ...state,
            //         [action.payload.openstate]: action.payload.value,
            //     };
            return action.payload.openstate

        default:
            return state;
    }
}
