export function setSwitch({ name }) {
    return {
        type: 'SET_Switch',
        payload: {
            name
        }
    }
}
