const initialState = {
    table: { table: "testTable" },
    data: []
};
let tabledata = [];


let tableListContainer = [];
let FormAssignContainer = [];

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
        case 'SEND_ONEDATA':
            // console.log('send onedata');
            // console.log(action.payload.index);
            FormAssignContainer[action.payload.tableName] = action.payload.onedata;


            return { ...state, FormAssignContainer };
        default:
            return state;
    }
}