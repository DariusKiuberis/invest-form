import axios from 'axios'

export const getLoans = () => {
  return async function(dispatch) {
    const response = await axios.get('./current-loans.json')
    console.log('actions.js response.status : ', response.status, 'response.data: ', response.data)
    dispatch({ type: 'LOANS', payload: response.data })
  }
}
