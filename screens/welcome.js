import React , {
    View,
    Text,
} from 'react-native';

import Layout from './layout';

export default class WelcomeView extends React.Component {
    render() {
        return (
            <View>
                <Layout/>
                <Text>Here is Swapp</Text>
            </View>
        );
    }
}
