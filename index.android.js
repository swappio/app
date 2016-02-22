/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Navigator,
    View
} from 'react-native';

import LoginView from './screens/auth/login';
import SwapsView from './screens/swaps';

class app extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{component: SwapsView}}
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

AppRegistry.registerComponent('app', () => app);
