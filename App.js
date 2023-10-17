import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [text,setText] = useState(null);
  const [goalsList,setGoalsList] = useState([]);
  const [modalVis,setModalVis] = useState(false);
  const handleChangeText = (val) => {
    setText(val);
  }
  const handleAddGoal = () => {
    const new_goals_list = goalsList.concat(text);
    setText(null);
    setGoalsList(new_goals_list);
    setModalVis(false);
  }

  const handleDeleteGoal = (goal) => {
    const new_goals_list = goalsList.filter(g => g !== goal);
    setGoalsList(new_goals_list);
  }

  return (
    <>
      <StatusBar/>
        <View style={styles.main_container}>
        <Button color='#8A9A5B' title='Add a course goal' onPress={() => setModalVis(true)} style={styles.modal_button}/>
        <GoalInput handleChangeText={handleChangeText} value={text} visible={modalVis} handleAddGoal={handleAddGoal} close={() => setModalVis(false)} />
        <View style={styles.goals_list}>
          <FlatList 
          data={goalsList}
          renderItem={itemData => (
            <GoalItem index={itemData.index} item={itemData.item}  handleDeleteGoal={handleDeleteGoal} />
          )}
          alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal:16,
    justifyContent:'center'
  },
  goals_list: {
    height:'60%'
  },
  modal_button:{
    height:'40%',
    marginBottom:50
  }
});
