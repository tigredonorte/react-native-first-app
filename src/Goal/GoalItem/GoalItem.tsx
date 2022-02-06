import React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';

import { GoalItemStyles } from './GoalItem.styles';

export interface GoalItem {
    title: string;
    onDelete: Function;
}

export const GoalItemComponent = (itemData: GoalItem): any => {
    return (
        <TouchableNativeFeedback onLongPress={itemData.onDelete}>
            <View style={GoalItemStyles.itemContainer}>
                <Text style={GoalItemStyles.itemContainerText}>{itemData.title}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};

