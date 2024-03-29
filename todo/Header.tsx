import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { Colors } from "../constants/Colors";
import { Entypo } from '@expo/vector-icons';


export default function Header() {
    return (
        <View style={{
            paddingTop: 50,
        }}>
            <Text style={styles.firstText}>
                Sonny<Text style={[styles.secondText, styles.firstText]}>Do</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    firstText: {
        fontSize: 25,
        fontWeight: "700",
    },
    secondText: {
        color: Colors.primary,
    },
});
