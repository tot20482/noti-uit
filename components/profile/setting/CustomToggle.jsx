import React, { useState } from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../../constants";

const CustomToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const togglePosition = new Animated.Value(isEnabled ? 1 : 0);

  const toggleSwitch = () => {
    setIsEnabled((prev) => !prev);
    Animated.timing(togglePosition, {
      toValue: isEnabled ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const translateX = togglePosition.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22], // Điều chỉnh vị trí nút
  });

  return (
    <TouchableOpacity
      style={[styles.container, isEnabled && styles.enabledContainer]}
      onPress={toggleSwitch}
    >
      <Animated.View
        style={[
          styles.thumb,
          {
            transform: [{ translateX }],
          },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 25,
    borderRadius: 20,
    backgroundColor: "#767577",
    justifyContent: "center",
    padding: 2,
  },
  enabledContainer: {
    backgroundColor: COLORS.primary,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#f4f3f4",
  },
});

export default CustomToggle;
