import { StyleSheet } from "react-native";

export const pageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 50,
        paddingHorizontal: 24,
    },
    logoContainer: {
        alignItems: 'center',
    },
    logoText: {
        color: '#C70000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 8,
    },
    welcomeContainer: {
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
    },
    welcomeHighlight: {
        color: '#C70000',
    },
    buttonContainer: {
        width: '80%',
    },
    primaryButton: {
        backgroundColor: '#C70000',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    secondaryButton: {
        borderColor: '#C70000',
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    secondaryButtonText: {
        color: '#C70000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export const tabContentStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000000",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        color: "#333333",
    },
});

export const authStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 24,
        justifyContent: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginBottom: 30,
    },
    headerText: {
        color: '#C70000',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666666',
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 8,
    },
    input: {
        height: 50,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 0,
        color: '#000',
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        borderRadius: 15,
        height: 50,
        paddingHorizontal: 15,
    },
    passwordInput: {
        flex: 1,
        fontSize: 16,
    },
    forgotPassword: {
        textAlign: 'right',
        color: '#007BFF',
        marginBottom: 20,
    },
    loginButton: {
        backgroundColor: '#C70000',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#DDDDDD',
    },
    separatorText: {
        marginHorizontal: 10,
        color: '#666666',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    signupText: {
        fontSize: 14,
        color: '#666666',
    },
    signupLink: {
        color: '#007BFF',
        fontWeight: 'bold',
        marginLeft: 5,
    },
});
