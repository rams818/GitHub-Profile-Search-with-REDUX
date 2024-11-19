import React from "react";
import { useSelector } from "react-redux";
import * as gitHubReducer from "../redux/github/github.reducer";

let GithubProfileDetails = () => {


    let githubInfo = useSelector((state) => {
        return state[gitHubReducer.gitHubFeatureKey];
    });
    let user = githubInfo.gitHubUsers;
    const isoDate = user.created_at;
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });



    return (
        <React.Fragment>
            {
                Object.keys(user).length > 0 ?
                    <React.Fragment>
                        <div className="card">
                            <div className="card-body">
                                <span className="badge badge-primary mr-3">{user.followers} Followers</span>
                                <span className="badge badge-warning mr-3">{user.public_repos} Repos</span>
                                <span className="badge badge-success mr-3">{user.public_gists} Gists</span>
                                <span className="badge badge-danger mr-3">{user.following} Following</span>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Name : <span className="font-weight-bold">{user.name}</span></li>
                                    <li className="list-group-item">Location : {user.location}</li>
                                    <li className="list-group-item">Email : {user.email}</li>
                                    <li className="list-group-item">Company : {user.company}</li>
                                    <li className="list-group-item">Blog : <a href={user.blog}>Blog</a></li>
                                    <li className="list-group-item">Twitter : {user.twitter_username}</li>
                                    <li className="list-group-item">Member Since : {formattedDate}</li>
                                    <li className="list-group-item">Profile URL : <a href={user.html_url}>{user.html_url}</a></li>
                                </ul>
                            </div>
                        </div>
                    </React.Fragment>
                    : null
            }
        </React.Fragment>
    )
}
export default GithubProfileDetails;