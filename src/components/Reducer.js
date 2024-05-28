const initialState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const fileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPLOAD_FILE_REQUEST':
        return { ...state, loading: true };
      case 'UPLOAD_FILE_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'UPLOAD_FILE_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default fileReducer;
  