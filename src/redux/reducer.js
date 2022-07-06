import { CREATE, READ, GET, UPDATE, DELETE } from "./types";

const initialstate = {
  data: [],
};

const reducer = (state = initialstate, action) => {
  console.log(action.type);
  switch (action.type) {
    case CREATE: {
      return { ...state, data: action.payload };
    }

    case READ: {
      // state.data = action.payload
      return { ...state, data: action.payload };
    }

    case GET: {
      // state.data = action.payload
      return { ...state, data: action.payload };
    }

    case UPDATE: {
      return { ...state, data: action.payload };
    }

    case DELETE: {
      return { ...state, data: action.payload };
    }

    case "SHOW": {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
