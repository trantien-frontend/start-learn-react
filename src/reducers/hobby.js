const initState = {
  list: [],
  activeId: null,
};

const hobbyReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_HOBBY': {
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    }
    case 'SET_ACTIVE_HOBBY': {
      return {
        ...state,
        activeId: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default hobbyReducer;
