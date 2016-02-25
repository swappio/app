'use strict';
import React , {
    Component,
    Text,
    View,
    StyleSheet
} from 'react-native';

import LoginForm from '../../components/forms/login';

export default class LoginView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text} >Please login first</Text>
                <LoginForm navigator={this.props.navigator}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3d3766'
    },
    text: {
        color: '#d9d8e1'
    }
});
