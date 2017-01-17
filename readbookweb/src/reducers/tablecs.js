const initialState = {
    table: { table: "testTable" },
    data: []
};
let tabledata = [];


let tableListContainer = [];
let readyUpdata = {
    id: "",
    title: "",
    calendar: null,
    memo: "",
    speaker: ""

};

//console.log('test reducer');
export default function tablecs(state = initialState, action) {
    switch (action.type) {
        case 'INSERT_TABLE':
            console.log(action.payload.data);
            //使用Es7語法 把 物件轉成陣列
            var arr = action.payload.data.values(obj);
            tabledata.push(arr);
            // tabledata.push(action.payload.data);
            console.log(arr);

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

            console.log(action.payload.onedata);
            readyUpdata = action.payload.onedata;
            //console.log('send onedata');
            //console.log(readyUpdata);

            return { ...state, readyUpdata };
        default:
            return state;
    }
}