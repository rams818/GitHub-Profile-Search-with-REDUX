import * as gitHubActions from './github.actions';

export const gitHubFeatureKey = 'gitHub';

let initialState = {
    loading: false,
    gitHubUsers: {},
    gitHubRepos: [],
    errorMessage: ''
}


let reducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case gitHubActions.FETCH_GITHUB_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case gitHubActions.FETCH_GITHUB_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                gitHubUsers: payload
            }
        case gitHubActions.FETCH_GITHUB_USER_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            }
        case gitHubActions.FETCH_GITHUB_REPOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case gitHubActions.FETCH_GITHUB_REPOS_SUCCESS:
            return {
                ...state,
                loading: false,
                gitHubRepos: payload
            }
        case gitHubActions.FETCH_GITHUB_REPOS_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            }
        default:
            return state
    }
}

export { reducer };

