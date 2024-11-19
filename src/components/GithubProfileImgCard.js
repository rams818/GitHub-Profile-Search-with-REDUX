import React from "react";
import { useSelector } from "react-redux";
import * as gitHubReducer from "../redux/github/github.reducer";

let GithubProfileImgCard = () => {

    let githubInfo = useSelector((state) => {
        return state[gitHubReducer.gitHubFeatureKey];
    });

    return (
        <React.Fragment>
            {
                Object.keys(githubInfo.gitHubUsers).length > 0 ?
                    <React.Fragment>
                        <div className="card">
                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                <img src={githubInfo.gitHubUsers.avatar_url} className="img-fluid img-thumbnail" />
                                {/* <a href="#!">
                        <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                        </a> */}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{githubInfo.gitHubUsers.name}</h5>
                                <p className="card-text">{githubInfo.gitHubUsers.bio}</p>
                                <a href={githubInfo.gitHubUsers.html_url} target="_blank" className="btn btn-primary" data-mdb-ripple-init>Profile</a>
                            </div>
                        </div>
                    </React.Fragment>
                    : null
            }
        </React.Fragment>
    )
}
export default GithubProfileImgCard;