'use strict';

import RecommendationConstants from '../constants/recommendations';
import AppDispatcher from '../dispatcher/app';

export default class RecommendationActions {

    fetch() {
        AppDispatcher.dispatch({
            actionType: RecommendationConstants.RECOMMENDATIONS_FETCH
        });
    }
}

