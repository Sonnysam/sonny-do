import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";
import { Entypo } from '@expo/vector-icons';

interface Props {
    onPress: () => void
}


export default function Bottom({ onPress }: Props): React.JSX.Element {
    const [userInput, setUserInput] = useState<string>("");
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Type todo here..."
                    onChangeText={setUserInput}
                    value={userInput}
                    style={styles.input}
                    placeholderTextColor="black"
                />
                <TouchableOpacity style={styles.addIcon} onPress={onPress}>
                    <Text><Entypo name="plus" size={24} color="white" /></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        // position to the bottom of screen
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 60,

    },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.light,
        borderWidth: 1,
        borderColor: Colors.light,
        elevation: 2,
        borderRadius: 10,
        height: 50,
    },
    addIcon: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
    },
})

