'use strict';

import React , {
    AppRegistry,
    Animated,
    View,
    Text,
    TextInput,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import ScrollableTabsView from 'react-native-scrollable-tab-view';
import CustomTabBar from '../components/tabs/bar';

class TabView  extends React.Component {
    render() {
        return (
            <ScrollableTabsView renderTabBar={() => <CustomTabBar/>}
                      tabBarBackgroundColor="#3d3766"
                      tabBarUnderlineColor="#ffffff"
                      tabBarActiveTextColor="#ffffff"
                      tabBarInactiveTextColor="#999999">
                <Text tabLabel="Recommended"></Text>
                <Text tabLabel="Popular"></Text>
                <Text tabLabel="Newest"></Text>
            </ScrollableTabsView>
        )
    }
}

export default class Swaps extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#3d3766"
                />
                <View style={styles.search}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex:0.1}}/>
                        <View style={styles.searchBoxContainer}>
                            <TextInput
                                style={styles.searchBox}
                                placeholder='⌕ Search'
                            />
                        </View>
                        <View style={{flex:0.1}}/>
                    </View>

                    <View style={{flexDirection: 'row', flex:1}}>
                        <View style={{flex:0.1}}/>
                        <TabView/>
                        <View style={{flex:0.1}}/>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#3d3766',
        flex: 1,
        alignItems: 'stretch'
    },
    search: {
        flex: 1,
    },
    searchBoxContainer: {
        flex: 0.8,
        flexDirection: 'row',
        borderRadius: 6,
        height: 25,
        marginTop: 10,
        backgroundColor: '#999daf'
    },
    searchBox: {
        justifyContent: 'center',
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        backgroundColor: 'transparent',
        alignSelf: 'center',
        textAlign: 'center',
        color: '#3d3766',
        borderColor: '#ff0000',
        borderWidth: 1,
        borderRadius: 10,
        paddingBottom: 6,
        height: 30,
        flex: 1,
    }
});
