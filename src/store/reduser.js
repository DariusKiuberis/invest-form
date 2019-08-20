const loans = {
  list: [],
}

export default function reducer(state = loans, action) {
  //   console.log('reduser: state -->', state, ' action--> ', action)

  switch (action.type) {
    case 'LOANS':
      return {
        list: state.list.concat(action.payload.loans),
      }
    default:
      return state
  }
}
