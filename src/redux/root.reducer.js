import { combineReducers } from 'redux';
import * as gitHubReducer from './github/github.reducer';

let rootReducer = combineReducers({
    [gitHubReducer.gitHubFeatureKey]: gitHubReducer.reducer
});

export { rootReducer };