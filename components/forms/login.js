import React , {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

import Spinner from 'react-native-spinkit';
import Button from 'react-native-button';
import Form from 'react-native-form';
import WelcomeView from '../../screens/welcome';

var LoginForm = React.createClass({

    getInitialState() {
        return {
            loading: false,
            color: "#6a6a6a",
            size: 35
        }
    },

    _handlePress(event) {
        this.setState({loading: true});

        fetch('http://172.30.2.4:1234/api/v1/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.refs.form.getValues().email,
                password: this.refs.form.getValues().password
            })
        })
            .then((response) => {
                if (response.status === 200) {
                    this.props.navigator.push({component: WelcomeView})
                } else {
                    this.state.message = "Please check your credentials";
                }
                this.setState({loading: false});
            })
            .catch((error) => {
                this.state.message = "Internal error occured";
                console.warn(error);
            });

    },

    render() {
        return (
            <Form ref="form">
                <View style={styles.container}>
                    <Text>{ this.state.message }</Text>
                    <TextInput type="TextInput" name="email" placeholder="Email"/>
                    <TextInput type="TextInput" name="password" password={true} placeholder="Password"/>

                    <Spinner style={styles.spinner}
                             isVisible={this.state.loading}
                             type="ThreeBounce"
                             size={this.state.size}
                             color={this.state.color}/>

                    <Button
                        onPress={this._handlePress}
                        style={{borderWidth: 1, borderColor: 'blue'}}>
                        Log Me In!
                    </Button>
                </View>
            </Form>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    spinner: {
        marginBottom: 50
    }
});

module.exports = LoginForm;
