import axios from 'axios';

export const uploadFile = (file) => async (dispatch) => {
  dispatch({ type: 'UPLOAD_FILE_REQUEST' });
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    dispatch({ type: 'UPLOAD_FILE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPLOAD_FILE_FAILURE', payload: error.message });
  }
};
