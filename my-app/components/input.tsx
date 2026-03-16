import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";


export function Input({ ...rest }: TextInputProps) {
    return <TextInput style={styles.input} {...rest} />;
}


const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderColor: "#DCDCDC",
        borderRadius: 8,
        paddingLeft: 16,
        paddingHorizontal: 16,
        marginTop: 16,
    }
});
