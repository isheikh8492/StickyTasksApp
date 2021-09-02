import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const handleCompleteTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Sticky Tasks</Text>
        <StatusBar style="dark-content" visibility="visible"/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.items}>
          {/* <Task name={"Hi"}/>
          <Task name={"Hi"}/>
          <Task name={"Hi"}/>
          <Task name={"Hi"}/>
          <Task name={"Hi"}/>
          <Task name={"Hi"}/>
          <Task name={"Hi"}/>
          <Task name={"Hi"}/>
          <Task name={"Hi"}/>
          <Task name={"Hi"}/> */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => {
                  handleCompleteTask(index)
                }}>
                  
                  <Task name={item}/>
                  
                </TouchableOpacity>
              )
            })
          }
        </View>
        </ScrollView>
      </View>

      <KeyboardAvoidingView
      behavior={(Platform.OS === "android" || Platform.OS === "ios") ? "padding": "height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask() }>
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
    backgroundColor: 'white',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
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

},
redBinLogo: {}
});
