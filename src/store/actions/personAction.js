export const setPerson = () => {
    return async (dispatch,getState) => {
        const response = await fetch('https://flask-api-final-project.herokuapp.com/debug');
        const data = await response.json()
        dispatch({type:'setPerson', payload: Object.values(data)})
    }
}

export default setPerson;