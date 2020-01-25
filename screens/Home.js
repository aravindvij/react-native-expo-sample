import React from "react";
import {
  Alert,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  Modal
} from "react-native";
import { Card, ListItem, Button, Icon, CheckBox } from "react-native-elements";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      modalVisible: false
    };
  }

  _onPressButton() {
    Alert.alert("You tapped the button!");
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {/* <Text>Home Screen</Text> */}
          <Card title="Welcome">
            {
              <View>
                <Image
                  style={{ width: "100%" }}
                  resizeMode="cover"
                  source={require("../assets/images/datsun_nissan_renault.png")}
                />
                <Text>Name 1</Text>
                <CheckBox
                  iconRight
                  title="Click Here"
                  onPress={() =>
                    this.setState({ checked: !this.state.checked })
                  }
                  checked={this.state.checked}
                />
              </View>
            }
          </Card>
        </View>
        <View style={styles.buttonWrapper}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.props.navigation.navigate("Login");
            }}
          >
            {/* <View style={styles.modal}>
           <Text>Do you want to logout ?</Text>
         </View> */}
          </Modal>
          <TouchableNativeFeedback
            onPress={this._onPressButton}
            // onPress={() => {
            //   this.setModalVisible(true);
            // }}
            background={
              Platform.OS === "android"
                ? TouchableNativeFeedback.SelectableBackground()
                : ""
            }
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                Exit{Platform.OS !== "android" ? "(Android only)" : ""}
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 70,
    height: 70,
    backgroundColor: "lightgray"
  },
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: "white"
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white"
  },
  buttonWrapper: {
    alignItems: "flex-end",
    // right: 20,
    // bottom: 20,
    paddingTop: 0
  }
});
