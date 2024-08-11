import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { Colors } from './../../../constants/Colors';
import { useRouter } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SignIn() {
    const navigation = useNavigation();

    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const handleGoogleSignIn = () => {
        // Implement Google Sign-In functionality here
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>router.back()
            }>
                <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Let's Sign You In</Text>
            <Text style={styles.subtitle}>Welcome back, you've been missed!</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email:</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Enter Email'
                    placeholderTextColor={Colors.GRAY}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password:</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Enter Password'
                    placeholderTextColor={Colors.GRAY}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
                <Image
                    // source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png' }}
                    style={styles.googleIcon}
                />
                <Text style={styles.googleButtonText}>Sign In with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signUpContainer}  onPress={()=>router.replace('auth/sign-up')}>
                <Text style={styles.signUpText}>New User? </Text>
                <Text style={[styles.signUpText, styles.signUpLink]}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        paddingTop: 50,
        padding: 25,
        height: '100%',
    },
    title: {
        fontFamily: 'outfit-bold',
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 30,
    },
    subtitle: {
        fontFamily: 'outfit-regular',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 20,
        color: Colors.GRAY,
    },
    inputContainer: {
        marginTop: 20,
    },
    label: {
        fontFamily: 'outfit-regular',
        fontSize: 16,
        color: Colors.GRAY,
        marginBottom: 10,
    },
    input: {
        fontFamily: 'outfit-regular',
        fontSize: 16,
        borderWidth: 1,
        borderColor: Colors.GRAY,
        padding: 10,
        borderRadius: 5,
    },
    signInButton: {
        marginTop: 40,
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    signInButtonText: {
        fontFamily: 'outfit-bold',
        fontSize: 16,
        color: Colors.WHITE,
    },
    googleButton: {
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderColor: Colors.GRAY,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    googleIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    googleButtonText: {
        fontFamily: 'outfit-bold',
        fontSize: 16,
        color: Colors.GRAY,
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    signUpText: {
        fontFamily: 'outfit-regular',
        fontSize: 16,
        color: Colors.GRAY,
    },
    signUpLink: {
        color: Colors.PRIMARY,
    },
});
