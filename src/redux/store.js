import { legacy_createStore } from "redux";
// make reducer hear
const reducer=(state={},action)=>{
    switch(action.type){
        case 'dark':
        return{color:"black"}
        default:
    }
    return state;
}
export const store=legacy_createStore();

store.subscribe(()=>{
    console.log("bg color change")
    console.log(store.getState())
})
store.dispatch(reducer())