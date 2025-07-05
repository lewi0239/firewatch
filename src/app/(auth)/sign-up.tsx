import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React from "react";
import { authStyles as styles } from "../../theme/styles";
import { Link, useRouter } from "expo-router";

const SignUp = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
            />
            <Button title="Sign Up" onPress={() => router.replace('/home')} />
            <Link href="/sign-in" asChild>
                <TouchableOpacity style={styles.switchButton}>
                    <Text style={styles.switchButtonText}>
                        Already have an account? Sign In
                    </Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
};

export default SignUp;
