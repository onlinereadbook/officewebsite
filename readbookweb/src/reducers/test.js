const initialState = 'andy';
export default function test(state = initialState, action) {
    switch(action.type) {
        case 'SET_TEST':
             return action.payload.name
        default:
            return state;
    }
}
