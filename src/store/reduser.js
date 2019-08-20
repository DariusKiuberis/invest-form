const testState = {
  number: 5,
}

export default function reducer(state = testState, action) {
  console.log('reduser: state -->', state, ' action--> ', action)

  switch (action.type) {
    case 'TEST':
      return {
        number: state.number + 1,
      }
    default:
      return state
  }
}
