import React from "react";
import { useSelector } from "react-redux";
import * as gitHubReducer from "../redux/github/github.reducer";
import loaderImg2 from '../img/user-loader.gif';

let GithubProfileRepos = () => {

    let githubInfo = useSelector((state) => {
        return state[gitHubReducer.gitHubFeatureKey];
    });

    let repos = githubInfo.gitHubRepos;
    return (
        <React.Fragment>
            {
                githubInfo.loading && <div className="text-center">
                    <img src={loaderImg2} alt="dsfd" width="300" height="300" />
                </div>
            }

            {
                Object.keys(repos).length > 0 ?
                    <React.Fragment>
                        <h1>Repo Details</h1>
                        <p>It really is. It takes a fair amount of time to learn the syntax, but once done it’s completely indispensable. Emmet for CSS its fantastic too, works in much the same way. Emmet is an awesome tool. The lorem generator is nice but it’s code completing functionality makes it indispensable. Once you learn the syntax you can code a whole wireframe with just a few keystrokes.</p>

                        <div className="card">
                            <div className="card-header">
                                <h3>Your Repositories</h3>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {
                                        repos.map((repo) => {
                                            return (
                                                <React.Fragment>
                                                    <li className="list-group-item"><a href={repo.html_url} key={repo.id} target="_blank"><span className="font-weight-bold">{repo.name}</span></a> <span className="badge badge-success ml-5 mr-3">{repo.stargazers_count} star</span> <span className="badge badge-warning mr-3">{repo.watchers_count} watchers</span> <span className="badge badge-primary mr-3">{repo.forks_count} Forks</span> <span className="badge badge-secondary mr-3">{repo.language}</span></li>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </React.Fragment>
                    : null
            }

        </React.Fragment>
    )
}
export default GithubProfileRepos;