const initialState = { openstate: false };

export default function common(state = initialState, action) {

    //console.log(action.payload)
    switch (action.type) {
        case 'SET_LEFTMENU':
            return {
                     ...state,
                openstate: action.payload.openstate
            };
        //  return action.payload.common

        default:
            return state;
    }
}
