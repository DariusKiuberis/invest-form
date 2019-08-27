const initialState = {
  list: [],
}

export default function reducer(state = initialState, action) {
  // console.log('reduser: state -->', state, ' action--> ', action)
  // console.log('const initialState : ', initialState)
  switch (action.type) {
    case 'LOANS':
      return {
        ...state,

        list: state.list.concat(action.payload),
      }
    case 'ADD':
      return {
        ...state,
        // list: Object.assign({}, action.payload.loans),
      }
    default:
      return state
  }
}
