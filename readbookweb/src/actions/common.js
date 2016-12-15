import { SET_LEFTMENU } from '../constants';

export function setLeftmenu({ openMenu, openMenuEvent }) {
    return {
        type: SET_LEFTMENU,
        payload: {
            openMenu,
            openMenuEvent
        }
    }
}
