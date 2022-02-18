import React, { useState } from 'react';
import { Button, Modal, TextInput, View } from 'react-native';

import { cancelButton, GoalInputStyles } from './GoalInput.styles';

export interface GoalInput {
    onAppendText: (_str: string) => void;
    onCancelGoal: () => void;
    isVisible: boolean;
}

export const GoalInputComponent = (props: GoalInput) => {

    const [ getGoalInput, setGoalInput ] = useState('');

    const addGoalHandler = () => {
        if (getGoalInput === '') {
            return;
        }
        props.onAppendText(getGoalInput);
        setGoalInput('');
    };

    return (
        <Modal visible={props.isVisible} animationType="slide" style={GoalInputStyles.modal}>
            <View style={GoalInputStyles.inputContainer}>
                <TextInput 
                    placeholder="Add your task" 
                    style={GoalInputStyles.input}
                    onChangeText={setGoalInput}
                    value={getGoalInput}
                />
                <View style={GoalInputStyles.buttonContainer}>
                    <View style={GoalInputStyles.buttons}>
                        <Button title="Add" onPress={addGoalHandler}/>
                    </View>
                    <View style={GoalInputStyles.buttons}>
                        <Button title="Cancel" color={cancelButton.color} onPress={props.onCancelGoal}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

