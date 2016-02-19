/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Navigator
} from 'react-native';

import LoginView from './screens/auth/login';

class app extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{component: LoginView}}
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
