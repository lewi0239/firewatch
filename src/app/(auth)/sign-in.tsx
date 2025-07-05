import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import { authStyles as styles } from "../../theme/styles";
import { FontAwesome } from "@expo/vector-icons";

export default function SignIn() {
    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <FontAwesome name="fire" size={24} color="#C70000" />
                <Text style={styles.headerText}>FireWatch</Text>
            </View>

            <Text style={styles.title}>Sign in to your Account</Text>
            <Text style={styles.subtitle}>
                Enter your email and password to log in
            </Text>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Enter your password"
                        secureTextEntry={!passwordVisible}
                    />
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                        <FontAwesome
                            name={passwordVisible ? "eye-slash" : "eye"}
                            size={20}
                            color="#666666"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => router.replace("/dashboard")}
            >
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            <View style={styles.separatorContainer}>
                <View style={styles.separatorLine} />
                <Text style={styles.separatorText}>Or</Text>
                <View style={styles.separatorLine} />
            </View>

            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account?</Text>
                <Link href="/sign-up" asChild>
                    <TouchableOpacity>
                        <Text style={styles.signupLink}>Sign Up</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </SafeAreaView>
    );
}
