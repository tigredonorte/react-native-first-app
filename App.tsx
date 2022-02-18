import React from 'react';
import { Button, FlatList, View } from 'react-native';
import { styles } from './App.styles';
import { GoalInputComponent, GoalItemComponent } from './src/Goal/index';

interface Item {
  id: string;
  text: string;
}

interface AppState {
  goals: Item[];
  isVisible: boolean;
}

const initialState: AppState = {
  goals: [],
  isVisible: false
};

export default class App extends React.Component<{}, AppState> {

  public constructor(props: any) {
    super(props);
    this.state = { ...initialState };
  }

  private removeGoal = (id: string) => this.setState({ goals: this.state.goals.filter(goal => goal.id !== id) });
  private cancelGoal = () => this.setState({ isVisible: false });
  private setIsVisible = () => this.setState({ isVisible: true });
  private appendText = (getGoalInput: string): void => this.setState({ 
    goals: [{ id: `${this.state.goals.length + 1}`, text: getGoalInput }, ...this.state.goals ],
    isVisible: false
  });

  public render = (): React.ReactNode => (
    <View style={styles.container}>
      <Button title="Add Itens" onPress={()=>this.setIsVisible()}/>
      <GoalInputComponent 
        isVisible={this.state.isVisible} 
        onAppendText={this.appendText}
        onCancelGoal={this.cancelGoal}
      />
      <FlatList
        keyExtractor={(item: Item) => item.id}
        style={styles.itemsContainer}
        data={this.state.goals}
        renderItem={itemData => 
          <GoalItemComponent 
            title={itemData.item.text}
            onDelete={() => this.removeGoal(itemData.item.id) }
            
          />
        } />
    </View>
  );
}
