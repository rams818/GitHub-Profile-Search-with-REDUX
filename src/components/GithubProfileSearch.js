import React, { useState } from "react";
import GithubProfileDetails from "./GithubProfileDetails";
import GithubProfileRepos from "./GithubRepos";
import GithubProfileImgCard from "./GithubProfileImgCard";
import { useDispatch, useSelector } from "react-redux";
import * as gitHubActions from "../redux/github/github.actions";
import * as gitHubReducer from "../redux/github/github.reducer";
import loaderImg2 from '../img/user-loader.gif';

let GithubProfileSearch = () => {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    let searchProfile = (e) => {
        e.preventDefault();
        dispatch(gitHubActions.fetchGitHubUsers(name));
        dispatch(gitHubActions.fetchGitHubRepos(name));
    }

    let githubInfo = useSelector((state) => {
        return state[gitHubReducer.gitHubFeatureKey];
    });

    let { loading, gitHubUsers, gitHubRepos, errorMessage } = githubInfo;

    return (
        <React.Fragment>
            <div className="container rounded">
                <div className="row mt-3 pt-1 bg-danger">
                    <div className="col-6">
                        <h1 className="text-white">Github Profile Search</h1>
                    </div>
                    <div className="col-6">
                        <form onSubmit={searchProfile}>
                            <div className="input-group">
                                <input type="search" onChange={(e) => { setName(e.target.value) }} className="form-control rounded mt-2" size="50" required placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                <input type="submit" className="btn btn-success btn-md border-white font-weight-bold" data-mdb-ripple-init value="Search" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <h3 className="text-center d-flex justify-content-center m-auto mt-5"></h3>
            <div className="text-center">
                {
                    loading &&
                    <img src={loaderImg2} alt="dsfd" width="300" height="300" />
                }
            </div>

            {

                Object.keys(gitHubUsers).length > 0 ?
                    <React.Fragment>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-3">
                                    <GithubProfileImgCard />
                                </div>
                                <div className="col-9">
                                    <GithubProfileDetails />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-12">
                                    <GithubProfileRepos />
                                </div>
                            </div>
                        </div>
                    </React.Fragment> : null
            }
        </React.Fragment>
    )
}
export default GithubProfileSearch;