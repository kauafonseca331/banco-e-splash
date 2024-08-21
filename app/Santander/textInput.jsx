import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({ value, onChangeNumber, placeholder = "0,00" }) => {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeNumber}
            placeholder={placeholder}
            placeholderTextColor="#888"
            keyboardType="numeric"
            returnKeyType="done"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: '#007BFF', 
        borderWidth: 2,
        borderRadius: 8, 
        width: '100%',
        backgroundColor: '#ffffff',
        fontSize: 18,
        paddingHorizontal: 12, 
        paddingVertical: 10, 
        marginBottom: 20, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, 
    },
});

export default Input;
