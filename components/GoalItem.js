import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({index,item,handleDeleteGoal}) => {
    return (  
        <View key={index} style={styles.goal_item}>
            <Pressable 
            android_ripple={{color: '#ebebeb'}}
            onPress={() => handleDeleteGoal(item)}
            style={({pressed}) => pressed && styles.pressed_item}>
                <Text style={styles.goal_text}>{item}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goal_item: {
        margin: 8,
        borderRadius : 6,
        backgroundColor : '#8A9A5B',
    },
    goal_text: {
        color: '#f5f5dc',
        padding: 8,
    },
    pressed_item: {
        opacity: 0.5
    }
})

export default GoalItem;