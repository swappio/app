'use strict';
import React , {
    Component,
    Text,
    View,
} from 'react-native';

import LoginForm from '../../components/forms/login';

export default class LoginView extends React.Component {
    render() {
        return (
            <View>
                <Text>Please login first</Text>
                <LoginForm navigator={this.props.navigator}/>
            </View>
        );
    }
}
