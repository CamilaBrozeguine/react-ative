import {Text, StyleSheet, TouchableOpacity , TouchableOpacityProps} from "react-native";


type ButtonProps = TouchableOpacityProps & {
    title: string;
}
export function Button({title, ...rest}: ButtonProps) {
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
            <Text style={styles.label}>{title}</Text>
        </TouchableOpacity>
           
    )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 48,
        backgroundColor: "#8344cc",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 600,
    }
});
