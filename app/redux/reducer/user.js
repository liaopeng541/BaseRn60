const user = (state={num:1},action)=>{
  switch (action.type){
    case "addb":return {num:state.num+1}
    default:return state
  }
}

export default user;