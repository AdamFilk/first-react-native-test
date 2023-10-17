import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({handleChangeText,handleAddGoal,value,visible,close}) => {
    return (  
        <Modal visible={visible} animationType='slide'>
            <View style={styles.textbox_container}>
                <Image style={styles.image} source={require('../assets/goal.png')}/>
                <TextInput
                placeholder='Write down your course goals...' 
                style={styles.text_input}
                onChangeText={handleChangeText}
                value={value}
                /> 
                <View style={styles.button_container}>
                    <View style={styles.modal_button}>
                        <Button title='Close' onPress={close} color='#581845'/>
                    </View>
                    <View style={styles.modal_button}>
                        <Button title='Add Goal' onPress={handleAddGoal} color='#DAF7A6'/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    textbox_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor : '#cccccc',
        borderBottomWidth : 1,
        backgroundColor: '#8A9A5B'
    },
    text_input: {
      width: '80%',
      height: 50,
      borderRadius: 17.5,
      borderColor: '#cccccc',
      borderWidth: 1,
      padding: 16,
      backgroundColor:'#f5f5dc'
    },
    button_container:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginTop:16   
    },
    modal_button: {
        marginHorizontal: 8
    },
    image:{
        margin: 20,
        width: 100,
        height: 100
    }
  });

export default GoalInput;