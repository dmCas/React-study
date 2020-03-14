const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  switch(action.type){
    case "search_focus":
      return {
        focused: true
      };
    case "search_blur":
    return {
      focused: false
    };
  
  // if(action.type === 'search_focus'){
  //   return {
  //     focused: true
  //   }
  // }
  // if(action.type === 'search_blur'){
  //   return {
  //     focused: false
  //   }
  // }

  default: return state
  }
}