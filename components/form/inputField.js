import React, { Component } from "react";
import { View, Text, StyleSheet,TextInput,TouchableOpacity } from "react-native";
class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
          secureInput: !(props.inputType === "text" || props.inputType === "email")
        };
        this.toggleShowPassword = this.toggleShowPassword.bind(this);
      }

  render() {
    const {
        labelText,
        labelTextSize,
        labelColor,
        textColor,
        borderBottomColor,
        inputType,
        customStyle
      } = this.props;
      const secureInput = this.state.secureInput;
      const color = labelColor || 'black';
      const fontSize = labelTextSize || 14;
      const inputColor = textColor || 'black';
      const borderBottom = borderBottomColor || "transparent";
      return (
        <View style={[customStyle, styles.wrapper]}>
        <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
        {inputType === "password" ? (
          <TouchableOpacity
            style={styles.showButton}
            onPress={this.toggleShowPassword}
          >
            <Text style={styles.showButtonText}>
              {secureInput ? "Show" : "Hide"}
            </Text>
          </TouchableOpacity>
        ) : null}
        <TextInput
          autoCorrect={false}
          style={[
            { color: inputColor, borderBottomColor: borderBottom },
            styles.inputFiled
          ]}
           secureTextEntry={secureInput}
        />
      </View>
      );
  }
  toggleShowPassword() {
    this.setState({ secureInput: !this.state.secureInput });
  }
  
}
const styles = StyleSheet.create({
    wrapper: {
      display: "flex",
      marginLeft:10
    },
    showButton: {
        position: "absolute",
        right: 0
      },
      showButtonText: {
        color: 'black',
        fontWeight: "600"
      },
    label: { fontWeight: "500", marginBottom: 10,marginTop:10 },
    inputFiled: {
      borderBottomWidth: 0.5,
      borderBottomColor: 'black',
      paddingTop: 5,
      paddingBottom: 5,
    }
  });
export default InputField;