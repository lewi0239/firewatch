import { Link } from "expo-router";
import { Text, View } from "react-native";
import { pageStyles as styles } from "../theme/styles";

export default function Page() {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Hello World</Text>
                <Text style={styles.subtitle}>
                    This is the first page of your app.
                </Text>
                <Link href="/sign-in" style={styles.link}>
                    Go to Sign In
                </Link>
            </View>
        </View>
    );
}
