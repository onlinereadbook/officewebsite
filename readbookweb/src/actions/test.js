export function setTest({ name }) {
    return {
        type: 'SET_TEST',
        payload: {
            name
        }
    }
}
