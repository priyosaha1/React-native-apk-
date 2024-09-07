import React, { useState } from "react";

import { View, Text, Image, ScrollView, Button, Modal, ActivityIndicator, Alert } from "react-native";

const logo = require("./assets/adaptive-icon.png");
const dp = require("./assets/IMG-20231210-WA0005.jpg");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "lightblue", padding: 40, alignItems: "center" }}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Text style={{ marginTop: 20, marginBottom: 20 }}>hii <Text style={{ color: "red", fontSize: 20 }}>PRIYO</Text></Text>
        <Image source={logo} style={{ width: 280, height: 200}}/>
        <Text style={{ margin: 20, textAlign: 'center' }}>
          As a computer science engineering fresher, I am highly motivated and passionate about technology and programming. I have a strong academic background, having recently completed my Bachelor’s degree in Computer Science Engineering from Brainware University. During my studies, I gained a solid foundation in programming languages, such as Java, JavaScript, HTML, CSS, etc., and practical experience through various projects and internships. I am also highly interested in emerging technologies like artificial intelligence, machine learning, and data science, and I have been following the latest developments in these fields.
        </Text>
        <ActivityIndicator size="large" color="black" />
        <Button title="Press" onPress={() => setIsModalVisible(true)} color="red" />

        <Modal
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
          animationType="slide"
        >
          <View style={{ flex: 1, backgroundColor: "lightpink", padding: 60, alignItems: "center" }}>
            <Text>ki re khanki magi</Text>
            <View style={{ marginTop: 20, marginBottom: 20 }}>
              <Button title="Alert" onPress={() => Alert.alert("son na umang  bhai iktu?", "Choose dibi umang bhai?", [
                { text: "Naa", onPress: () => console.log("Canceled") },
                { text: "Ha", onPress: () => console.log("Ok done") }
              ])} />
            </View>
            <Image source={dp} style={{ width: 200, height: 350, alignSelf: 'center' }} />
            <View style={{ marginTop: 20, marginBottom: 20 }}>
              <Button title="Close" onPress={() => setIsModalVisible(false)} color="red" />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}
