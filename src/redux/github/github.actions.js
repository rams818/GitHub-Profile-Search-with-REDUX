import axios from "axios";
import { clientId, clientSecretKey } from "../../Credentials";

export const FETCH_GITHUB_USER_REQUEST = 'FETCH_GITHUB_USER_REQUEST';
export const FETCH_GITHUB_USER_SUCCESS = 'FETCH_GITHUB_USER_SUCCESS';
export const FETCH_GITHUB_USER_FAILURE = 'FETCH_GITHUB_USER_FAILURE';

export const FETCH_GITHUB_REPOS_REQUEST = 'FETCH_GITHUB_REPOS_REQUEST';
export const FETCH_GITHUB_REPOS_SUCCESS = 'FETCH_GITHUB_REPOS_SUCCESS';
export const FETCH_GITHUB_REPOS_FAILURE = 'FETCH_GITHUB_REPOS_FAILURE';


export const fetchGitHubUsers = (name) => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_GITHUB_USER_REQUEST });

            let dataURL = `https://api.github.com/users/${name}?client_id=${clientId}&client-secret=${clientSecretKey}`;
            let response = await axios.get(dataURL);
            dispatch({ type: FETCH_GITHUB_USER_SUCCESS, payload: response.data });

        } catch (error) {
            dispatch({ type: FETCH_GITHUB_USER_FAILURE, payload: error });

        }

    }
}

export const fetchGitHubRepos = (name) => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_GITHUB_REPOS_REQUEST });

            let dataURL = `https://api.github.com/users/${name}/repos?client_id=${clientId}&client-secret=${clientSecretKey}`;
            let response = await axios.get(dataURL);
            dispatch({ type: FETCH_GITHUB_REPOS_SUCCESS, payload: response.data });

        } catch (error) {
            dispatch({ type: FETCH_GITHUB_REPOS_FAILURE, payload: error });

        }

    }
}