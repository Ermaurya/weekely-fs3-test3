import{createStore} from 'redux';

 const action=()=>{
    return{
        type:"dark",

    }
}
// make reducer
 const reducer=(state={},action)=>{
    switch(action.type){
  case 'dark':
  return{color:"black"}
  default:
    }
    return state;
}
export const store=createStore(reducer)
store.subscribe(()=>{
    console.log("bg color change")
    console.log(store.getState())
})
store.dispatch(action())