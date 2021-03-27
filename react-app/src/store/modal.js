const SET_MODAL = 'modal/setModal'


const setModal = modalState => {
  return {
    type: SET_MODAL,
    modalState
}
}

export const modalStatus = (modalState) =>  dispatch => {
  dispatch(setModal(modalState))
}

const initialState = {modalOpen:false}
export default function modalReducer(state = initialState, action){
  switch(action.type){
    case SET_MODAL:
      return{
        ...state,
        modalOpen:action.modalState
      }
      
      default:
        return state
  }
}