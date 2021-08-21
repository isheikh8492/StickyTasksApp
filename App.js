import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <StatusBar style="auto" />
        <View style={styles.items}>
        <Task name="1"/>
        <Task name="2"/>
        <Task name="3"/>
        <Task name="4"/>
        <Task name="5"/>
      </View>
      </View>

      <KeyboardAvoidingView
      behavior={(Platform.OS === "android" || Platform.OS === "ios") ? "padding": "height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} />

        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EABD',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 2,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#fff',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 2,
  justifyContent: 'center',
  alignItems: 'center',

},
addText: {

}
});
