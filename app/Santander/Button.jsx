import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const Button = ({ onPress, title, color = '#FF5722', textColor = '#ffffff' }) => (
    <Pressable style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </Pressable>
);

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%', // Diminuído para um botão mais estreito
        paddingVertical: 16, // Aumentado o padding vertical
        paddingHorizontal: 24, // Adicionado padding horizontal
        borderRadius: 50, // Tornado o botão circular
        elevation: 5, // Sombra mais pronunciada
        shadowColor: '#333', // Sombra mais escura
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        marginVertical: 12,
        transform: [{ scale: 1.05 }], // Leve aumento de escala para feedback visual
    },
    text: {
        fontSize: 20, // Tamanho da fonte maior
        fontWeight: 'bold', // Negrito para destacar o texto
        letterSpacing: 1, // Espaçamento entre letras para um visual mais elegante
    },
});

export default Button;
