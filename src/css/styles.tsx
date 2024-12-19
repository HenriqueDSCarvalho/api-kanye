import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    title: {
        padding: 30,
        fontWeight: 'bold',
        fontSize: 30
    },
    texto: {
        margin: 20,
        color: "black",
        fontFamily: "arial Black",
        textAlign: "justify",
        
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "cyan",
        height: 40,
        width: 100,
        borderRadius: 5
        
    },
    loading: {
        padding: 20
    },
    box: {
        padding: 5,
        backgroundColor: "grey",
        margin: 10,
        borderRadius: 10
    }

}) 