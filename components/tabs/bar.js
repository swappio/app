'use strict';

import React , {
    AppRegistry,
    Animated,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

var CustomTabBar = React.createClass({
    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        underlineColor: React.PropTypes.string,
        backgroundColor: React.PropTypes.string,
        activeTextColor: React.PropTypes.string,
        inactiveTextColor: React.PropTypes.string,
    },

    renderTabOption(name, page) {
        var isTabActive = this.props.activeTab === page;
        var activeTextColor = this.props.activeTextColor || "navy";
        var inactiveTextColor = this.props.inactiveTextColor || "black";

        return (
            <TouchableOpacity style={[styles.tab]} key={name} onPress={() => this.props.goToPage(page)}>
                <View>
                    <Text style={{
                    color: isTabActive ? activeTextColor : inactiveTextColor,
                    fontFamily:'Lato-Regular',
                    textAlign:'center',
                    marginBottom: 0,
                    fontSize: 12 }}>{name}</Text>
                </View>
            </TouchableOpacity>
        );
    },

    render() {
        var containerWidth = this.props.containerWidth;
        var numberOfTabs = this.props.tabs.length;

        var tabUnderlineStyle = {
            position: 'absolute',
            width: containerWidth / numberOfTabs,
            height: 2,
            backgroundColor: this.props.underlineColor || "navy",
            bottom: 0
        };

        var left = this.props.scrollValue.interpolate({
            inputRange: [0, numberOfTabs], outputRange: [0, containerWidth]
        });

        return (
            <View style={[styles.tabs, {backgroundColor : this.props.backgroundColor || null}, this.props.style, ]}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
                <Animated.View style={[tabUnderlineStyle, {left}]}/>
            </View>
        );
    },
});


var styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 0,
    },

    tabs: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 0,
    },
});

module.exports = CustomTabBar;
