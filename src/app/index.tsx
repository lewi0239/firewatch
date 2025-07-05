import { Link } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";
import { pageStyles as styles } from "../theme/styles";
import { FontAwesome } from '@expo/vector-icons';

export default function Page() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <FontAwesome name="fire" size={80} color="#C70000" />
                <Text style={styles.logoText}>FireWatch</Text>
            </View>

            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>
                    Welcome to <Text style={styles.welcomeHighlight}>FireWatch</Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Link href="/sign-up" asChild>
                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.primaryButtonText}>Create Account</Text>
                    </TouchableOpacity>
                </Link>
                <Link href="/sign-in" asChild>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>Log In</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}
