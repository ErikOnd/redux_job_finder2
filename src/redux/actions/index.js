
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const GET_COMPANIES = 'GET_COMPANIES'
export const GET_JOBS = 'GET_JOBS'


export const addToFavouriteAction = (companySelected) => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: companySelected,
    }
}


export const removeFromFavouriteAction = (i) => {
    return {
        type: REMOVE_FROM_FAVOURITE,
        payload: i,
    }
}


export const getCompaniesActionAsync = (query) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch('https://strive-benchmark.herokuapp.com/api/jobs?search=' + query + '&limit=20')
            if (response.ok) {
                let fetchedCompanies = await response.json()
                dispatch({
                    type: GET_COMPANIES,
                    playload: fetchedCompanies,
                })
            } else {
                alert('Error fetching results')
            }
        } catch (error) {
            console.log(error)
        }
    }
}



export const getJobsActionAsync = (companyName) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch('https://strive-benchmark.herokuapp.com/api/jobs?company=' + companyName)
            if (response.ok) {
                let fetchedCompanies = await response.json()
                dispatch({
                    type: GET_JOBS,
                    playload: fetchedCompanies,
                })
            } else {
                alert('Error fetching results')
            }
        } catch (error) {
            console.log(error)
        }
    }
}