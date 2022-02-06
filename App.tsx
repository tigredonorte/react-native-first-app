import React, { useState } from 'react';
import { Button, FlatList, View } from 'react-native';
import { styles } from './App.styles';
import { GoalInputComponent, GoalItemComponent } from './src/Goal/index';


interface Item {
  id: string;
  text: string;
}
const initialState: Item[] = [];

export default function App() {

  const [ getGoals, setGoals ] = useState(initialState);
  const [ getIsVisible, setIsVisible ] = useState(false);


  const appendText = (getGoalInput: string): void => {
    setGoals(
      current => [{ id: `${getGoals.length + 1}`, text: getGoalInput }, ...current ]
    );
    setIsVisible(false);
  };

  const removeGoal = (id: string) => {
    setGoals(
      (goals: Item[]) => goals.filter(goal => goal.id !== id)
    );
  }

  const cancelGoal = () => {
    setIsVisible(false);
  }
  
  return (
    <View style={styles.container}>
      <Button title="Add Itens" onPress={()=>setIsVisible(true)}/>
      <GoalInputComponent 
        isVisible={getIsVisible} 
        onAppendText={appendText}
        onCancelGoal={cancelGoal}
      />
      <FlatList
        keyExtractor={(item: Item) => item.id}
        style={styles.itemsContainer}
        data={getGoals}
        renderItem={itemData => 
          <GoalItemComponent 
            title={itemData.item.text}
            onDelete={() => removeGoal(itemData.item.id) }
            
          />
        } />
    </View>
  )
}
