const initialState = {
    openMenu: false,
    openMenuEvent: false
};

export default function common(state = initialState, action) {

    //  console.log(action.payload)
    switch (action.type) {
        case 'SET_LEFTMENU':

            //邏輯與非同步在action    
            return {
                ...state,
                openMenu: action.payload.openMenu,
                openMenuEvent: action.payload.openMenuEvent

            };
        //  return action.payload.common

        default:
            return state;
    }
}
