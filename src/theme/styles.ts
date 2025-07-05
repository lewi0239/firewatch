import { StyleSheet } from "react-native";

export const pageStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
        color: "#000000",
    },
    subtitle: {
        fontSize: 36,
        color: "#000000",
    },
    link: {
        marginTop: 20,
        fontSize: 18,
        color: "#007BFF",
        textDecorationLine: "underline",
    },
});

export const authStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 24,
        textAlign: "center",
        color: "#000000",
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    switchButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    switchButtonText: {
        color: '#007BFF',
        fontSize: 16,
    },
});
