import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState, useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import PhoneInput from 'react-native-phone-number-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { authStyles } from '../../theme/styles';

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        setBirthDate(date.toLocaleDateString('en-GB'));
        hideDatePicker();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <FontAwesome name="chevron-left" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <Text style={authStyles.title}>Sign up</Text>
            <Text style={authStyles.subtitle}>Create an account to continue!</Text>

            <View style={authStyles.inputContainer}>
                <Text style={authStyles.inputLabel}>Full Name</Text>
                <TextInput
                    style={authStyles.input}
                    placeholder="Enter your full name"
                    placeholderTextColor="#aaa"
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>

            <View style={authStyles.inputContainer}>
                <Text style={authStyles.inputLabel}>Email</Text>
                <TextInput
                    style={authStyles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#aaa"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={authStyles.inputContainer}>
                <Text style={authStyles.inputLabel}>Birth of date</Text>
                <TouchableOpacity onPress={showDatePicker} style={[authStyles.input, styles.dateInput]}>
                    <Text style={{ flex: 1, color: birthDate ? '#000' : '#aaa' }}>{birthDate || 'Select your birth date'}</Text>
                    <FontAwesome name="calendar" size={20} color="#888" />
                </TouchableOpacity>
            </View>

            <View style={authStyles.inputContainer}>
                <Text style={authStyles.inputLabel}>Phone Number</Text>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    defaultCode="GB"
                    layout="first"
                    onChangeFormattedText={(text: string) => {
                        setPhoneNumber(text);
                    }}
                    containerStyle={styles.phoneInputContainer}
                    textContainerStyle={styles.phoneInputTextContainer}
                    textInputStyle={{paddingVertical: 0}}
                />
            </View>

            <View style={authStyles.inputContainer}>
                <Text style={authStyles.inputLabel}>Set Password</Text>
                <View style={[authStyles.input, styles.passwordInputView]}>
                    <TextInput
                        style={{flex: 1}}
                        placeholder="Enter your password"
                        placeholderTextColor="#aaa"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <FontAwesome name={isPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="#888" />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={authStyles.loginButton} onPress={() => router.replace('/dashboard')}>
                <Text style={authStyles.loginButtonText}>Register</Text>
            </TouchableOpacity>

            <View style={authStyles.signupContainer}>
                <Text style={authStyles.signupText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => router.push('/sign-in')}>
                    <Text style={authStyles.signupLink}>Login</Text>
                </TouchableOpacity>
            </View>


            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    header: {
        position: 'absolute',
        top: 60,
        left: 24,
    },
    dateInput: {
        justifyContent: 'space-between',
    },
    passwordInputView: {
        justifyContent: 'space-between',
        paddingHorizontal: 15, 
    },
    phoneInputContainer: {
        width: '100%',
        height: 50,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    phoneInputTextContainer: {
        backgroundColor: 'transparent',
        paddingVertical: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    }
});

export default SignUp;
