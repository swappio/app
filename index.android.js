/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

var Button = require('react-native-button');

class FeedView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Feed View!
                </Text>
            </View>
        );
    }
}

var MyComponent = React.createClass({
    _handlePress(event) {
        this.props.navigator.push({component: FeedView})
    },

    render() {
        return (
            <Button
                onPress={this._handlePress}
                style={{borderWidth: 1, borderColor: 'blue'}}>
                Feed View
            </Button>
        );
    }
});

class WelcomeView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Welcome View!
                </Text>
                <MyComponent navigator={this.props.navigator}/>
            </View>
        );
    }
}

class app extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{component: WelcomeView}}
                configureScene={() => {
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
                renderScene={(route, navigator) => {
                    if (route.component) {
                        return React.createElement(route.component, { navigator });
                    }
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcfcfc'
    }
});

AppRegistry.registerComponent('app', () => app);
