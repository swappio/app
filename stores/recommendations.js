'use strict';

import RecommendationActions from '../actions/recommendations';
import RecommendationConstants from '../constants/recommendations';
import AppDispatcher from '../dispatcher/app';

var EventEmitter = require('events').EventEmitter;

const CHANGE_EVENT = 'recommendations-change';

class RecommendationsStore extends EventEmitter {

    getAll() {
        return this.recommendations;
    }

    getError() {
        return this.error;
    }

    setError(error) {
        this.error = error;
    }

    fetch() {
        fetch('http://172.30.2.4:1234/api/v1/recommendations')
            .then((response)=> {
                return response.json();
            })
            .then((recommendations) => {
                this.recommendations = recommendations;
                console.log(this.recommendations);
                AppDispatcher.dispatch({
                    actionType: RecommendationConstants.RECOMMENDATIONS_LOADED
                });
            })
            .catch((e)=> {
                console.warn('Response Error', e);
            });
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    /**
     * @param {function} callback
     */
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

var store = new RecommendationsStore();

AppDispatcher.register(function(action) {

    switch (action.actionType) {
        case RecommendationConstants.RECOMMENDATIONS_FETCH:
            store.fetch();
            break;

        case RecommendationConstants.RECOMMENDATIONS_LOADED:
            store.emitChange();
            break;

        default:
        // no op
    }
});

module.exports = store;
