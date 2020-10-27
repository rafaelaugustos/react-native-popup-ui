import React, { Component } from "react";
import {
  View,
  Animated,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("screen");

class Toast extends Component {
  static toastInstance;

  static show({ ...config }) {
    this.toastInstance.start(config);
  }

  static hide() {
    this.toastInstance.hideToast();
  }

  state = {
    toast: new Animated.Value(height),
    time: new Animated.Value(this.getPercentage(90, width)),
    // currentTime: 0,
    // currentPercentage: this.getPercentage(90, width),
  };

  start({ ...config }) {
    this.setState({
      title: config.title,
      text: config.text,
      color: config.color,
      icon: config.icon,
      timing: config.timing,
      type: config.type,
    });

    Animated.spring(this.state.toast, {
      toValue: height - 150,
      bounciness: 15,
      useNativeDriver: true,
    }).start();

    const duration = config.timing > 0 ? config.timing : 5000;

    // setInterval(() => {

    // }, )

    setTimeout(() => {
      // this.runTiming();
      // this.runCurrentTime();
      this.hideToast();
    }, duration);
  }

  runCurrentTime() {
    let interval = setInterval(() => {
      if (this.state.currentTime >= 5) {
        clearInterval(interval);
      } else {
        this.setState({ currentTime: this.state.currentTime + 1 });
        this.runTiming();
      }
    }, 1000);
  }

  runTiming() {
    Animated.timing(this.state.time, {
      toValue:
        this.getPercentage(90, width) -
        this.getPercentage(90, width) / this.state.currentTime,
    }).start();
  }

  hideToast() {
    Animated.timing(this.state.toast, {
      toValue: height + 500,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  getPercentage(percentage, value) {
    return (percentage * value) / 100;
  }

  render() {
    const { title, text, icon, color } = this.state;
    return (
      <Animated.View
        ref={(c) => (this._root = c)}
        style={[
          styles.toast,
          {
            backgroundColor: color,
            transform: [{ translateY: this.state.toast }],
          },
        ]}
      >
        {icon && <View style={[styles.iconStatus]}>{icon}</View>}
        <View style={styles.content}>
          <Text style={[styles.title]}>{title}</Text>
          <Text style={styles.subtitle}>{text}</Text>
        </View>

        <Animated.View
          style={[
            styles.timing,
            {
              width: this.state.time,
            },
          ]}
        />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    minHeight: 100,
    shadowColor: "#ccc",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
  },
  timing: {
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    height: 10,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  content: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    marginTop: 5,
    fontWeight: "300",
    fontSize: 13,
    color: "#fff",
    fontWeight: "400",
  },
  img: {
    resizeMode: "contain",
    width: 20,
    height: 20,
  },
  iconStatus: {
    width: 40,
    height: 40,
    // backgroundColor: '#fff',
    borderRadius: 50,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Toast;
