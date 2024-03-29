import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { fontSize } from "../constants/fontSize";

interface todoProp {
    items: string;
    onPress: () => void;
}

const TodoItem: React.FC<todoProp> = ({ items, onPress }) => {
    return (
        <View style={styles.todoContainer}>
            <View style={styles.item}>
                <Text style={styles.todoItem}>{items}</Text>
                <Text style={styles.date}>{new Date().toUTCString()}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={onPress}>
                    <Text>
                        <MaterialIcons
                            name="delete-outline"
                            size={24}
                            color={Colors.primary}
                        />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    todoContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.light,
        borderRadius: 8,
        paddingHorizontal: 16,
        elevation: 1,
        borderWidth: 1,
        borderColor: Colors.secondary,
        height: 70,
        alignItems: "center",
        marginVertical: 10,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3
    },
    item: {
        flexDirection: "column",
    },
    date: {
        fontSize: fontSize.small,
        color: Colors.primary,
        fontWeight: "700",
        marginTop: 5,
    },
    todoItem: {
        fontSize: fontSize.large,
    },
});

export default TodoItem;
