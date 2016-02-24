'use strict';

import React , {
    AppRegistry,
    View,
    Text,
} from 'react-native';

import RecommendationsStore from '../stores/recommendations';
import RecommendationActions from '../actions/recommendations';
import Spinner from 'react-native-spinkit';

export default class RecommendationsView extends React.Component {

    constructor(){
        super();
        this.state = {
            recommendations: [],
            loading: true
        };

        var actions = new RecommendationActions();
        actions.fetch();
    }

    componentDidMount() {
        RecommendationsStore.addChangeListener(this.onChange.bind(this));
    }

    componentWillUnmount() {
        RecommendationsStore.removeChangeListener(this.onChange.bind(this));
    }

    onChange(state) {
        this.setState({
            loading: false,
            recommendations: RecommendationsStore.getAll()
        });
    }

    renderRow(row, i) {
        return (
            <Text>{row.name}</Text>
        )
    }

    render() {
        return (
            <View>
                <Spinner isVisible={this.state.loading}
                         type="ThreeBounce"
                         color="#fff"/>
                {this.state.recommendations.map((row, i) => this.renderRow(row, i))}
            </View>
        )
    }
}
