import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React from "react";
import { authStyles as styles } from "../../theme/styles";
import { Link, useRouter } from "expo-router";

const SignIn = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />

            <Button title="Sign In" onPress={() => router.replace("/home")} />

            <Link href="/sign-up" asChild>
                <TouchableOpacity style={styles.switchButton}>
                    <Text style={styles.switchButtonText}>
                        Don't have an account? Sign Up
                    </Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
};

export default SignIn;
