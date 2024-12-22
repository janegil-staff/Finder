import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";
import SwipeableImage from "./SwipeableImage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function Swipes({ users, currentIndex, handleLike, handlePass }) {
  const renderLeftActions = () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableImage user={users[currentIndex + 1]}></SwipeableImage>
      </RectButton>
    );
  };

  const renderRighActions = () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableImage user={users[currentIndex + 1]}></SwipeableImage>
      </RectButton>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        friction={2}
        leftThreshold={40}
        rightThreshold={40}
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRighActions}
        onSwipeableLeftOpen={handleLike}
        onSwipeableRightOpen={handlePass}
      >
        <SwipeableImage user={users[currentIndex]} />
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
