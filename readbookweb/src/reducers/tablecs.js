const initialState = {
    table: { table: "testTable" },
    data: ["無資料"]
};
let tabledata = [];
//console.log('test reducer');
export default function tablecs(state = initialState, action) {
    switch (action.type) {
        case 'INSERT_TABLE':
            // console.log(action.payload.data);
            tabledata.push(action.payload.data);
            // console.log(tabledata);
            return {
                ...state,
                //    tableheader: action.payload.tableheader,
                table: action.payload.table,
                data: tabledata
            };
        //  return action.payload.common
        case 'SHOW_TABLE':
            return state;
        default:
            return state;
    }
}