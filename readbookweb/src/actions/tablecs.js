import { INSERT_TABLE, SHOW_TABLE, SEND_ONEDATA } from '../constants';

export function insertTable({ table, data }) {
    //console.log(data);

    return {
        type: INSERT_TABLE,
        payload: {
            table,
            data
        }
    }
}
export function showTable({ table }) {
    return {
        type: SHOW_TABLE,
        payload: {
            table
        }
    }
}

export function sendOneData({ table, index }) {
    // console.log(onedata);
    return {
        type: SEND_ONEDATA,
        payload: {
            table,
            index
        }
    }
}

