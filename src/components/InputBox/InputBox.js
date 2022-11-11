import { View, TouchableOpacity, TextInput, Text } from "react-native";
import React from "react";
import styles from "./styles";
import * as Animatable from "react-native-animatable";

const InputBox = () => ({
  width,
  borderRadius,
  height,
  MT,
  MB,
  PH,
  borderColor,
  borderWidth,
  placeholder,
  justifyContent,
  value,
  onChangeText,
  error,
  onBlur,
  valueColor,
  labelName,
  animation,
  fontFamily,
  keyboardType,
  textInputWidth,
  secureTextEntry,
  togglePassword1,
  togglePassword2,
  labelAnimation,
  backgroundColor,
  placeholderTextColor,
  paddingHorizontal,
  textInputFontFamily,
  labelContainerWidth,
  labelContainerHeight,
  labelPaddingHorizontal,
}) => {
  return (
    <Animatable.View animation={animation}>
      <Animatable.View
      animation={labelAnimation}
        style={{
          width: labelContainerWidth,
          height: labelContainerHeight,
          paddingHorizontal: labelPaddingHorizontal,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ ...styles.label, fontFamily: fontFamily }}>{labelName}</Text>
        {error ? <Text style={{ ...styles.error, fontFamily: fontFamily }}>{error}</Text> : null}
      </Animatable.View>
      <View
        style={{
          width: width,
          borderRadius: borderRadius,
          height: height,
          marginTop: MT,
          paddingHorizontal:paddingHorizontal,
          marginBottom: MB,
          borderWidth: borderWidth,
          backgroundColor: backgroundColor,
          flexDirection: "row",
          alignItems: "center",
          borderColor: borderColor,
          justifyContent: justifyContent,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            togglePassword1
          }}
        >
          {/* <Ionicons
            name={name1}
            size={size1}
            color={color1}
            style={{ display: display1 }}
          /> */}
        </TouchableOpacity>
        <TextInput
          value={value}
          onBlur={onBlur}
          keyboardType={keyboardType}
          autoCapitalize="none"
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          style={{
            paddingHorizontal: PH,
            fontFamily: textInputFontFamily,
            width: textInputWidth,
            color: valueColor
          }}
          onChangeText={onChangeText}
        />
        <TouchableOpacity
          onPress={() => {
            togglePassword2;
          }}
        >
          {/* <Ionicons
            name={name2}
            size={size2}
            onPress={() => {
              togglePassword3;
            }}
            color={color2}
            style={{ display: display2 }}
          /> */}
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
};

export default InputBox;

// color1,
//   color2,
//   display1,
//   display2,
//   size1,
//   size2,
//   name1,
//   name2,
//   togglePassword3,