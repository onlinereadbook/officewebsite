import { INSERT_TABLE, SHOW_TABLE } from '../constants';

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