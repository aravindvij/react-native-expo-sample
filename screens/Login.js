import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Button,
  TouchableHighlight,
  ActivityIndicator,
  FlatList
} from "react-native";
import InputField from "../components/form/inputField";
import NextArrowButton from "../components/buttons/NextArrowButton";
import Icon from "react-native-vector-icons/FontAwesome";

// const fetch = require("node-fetch");

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  en: { welcome: 'Username', name: 'Charlie' },
  ja: { welcome: 'こんにちは' },
};

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Login</Text>
            <InputField
              labelTextSize={16}
              customStyle={{ marginBottom: 10 }}
              inputType="email"
              labelText={i18n.t('welcome')}
            />
            <InputField
              labelTextSize={16}
              inputType="password"
              labelText="Password"
            />
          </ScrollView>
          {/* <NextArrowButton/> */}
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight style={[styles.button]}>
            <Button
              color="gray"
              title=">"
              onPress={() => this.props.navigation.navigate("Home")}
            ></Button>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: "white"
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  loginHeader: {
    fontSize: 28,
    color: "black",
    fontWeight: "300",
    marginBottom: 40,
    margin: 10
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: "lightgray"
  },
  buttonWrapper: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20,
    paddingTop: 0
  }
});

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isLoading: true };
//   }
//   componentDidMount() {
//     return fetch("https://facebook.github.io/react-native/movies.json")
//       .then(response => response.json())
//       .then(responseJson => {
//         this.setState(
//           {
//             isLoading: false,
//             dataSource: responseJson.movies
//           },
//           function() {}
//         );
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   render() {
//     return (
//       <View>
//         <Text>{this.state.data.body}</Text>
//       </View>
//     );
//     if (this.state.isLoading) {
//       return (
//         <View style={{ flex: 1, padding: 20 }}>
//           <ActivityIndicator />
//         </View>
//       );
//     }
//     return (
//       <View style={{ flex: 1, paddingTop: 20 }}>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({ item }) => (
//             <Text>
//               {item.title}, {item.releaseYear}
//             </Text>
//           )}
//           keyExtractor={({ id }, index) => id}
//         />
//       </View>
//     );
//   }
// }
// export default Login;
