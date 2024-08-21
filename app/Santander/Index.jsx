import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from './Button';
import Input from './textInput';

const Index = () => {
    const [conta, setConta] = useState(7320.92);
    const [valor, setValor] = useState('');

    const handleTransaction = (tipo) => {
        const Valor = parseFloat(valor.replace(',', '.'));
        if (isNaN(Valor) || Valor <= 0) {
            alert('Por favor, insira um valor válido.');
            return;
        }

        switch (tipo) {
            case 'saque':
                if (Valor > conta) {
                    alert('Saldo insuficiente.');
                } else {
                    const multa = Valor * 0.03; // Multa de 3%
                    setConta(conta - Valor - multa);
                }
                break;

            case 'deposito':
                const bonus = Valor * 0.03; // Bônus de 3%
                setConta(conta + Valor + bonus);
                break;

            default:
                break;
        }
        setValor('');
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/images/santanderLogo.png')}
            />
            <Text style={styles.title}>Saldo Disponível</Text>
            <Text style={styles.balance}>R${conta.toFixed(2).replace('.', ',')}</Text>
            <Text style={styles.description}>Informe o valor e selecione a operação desejada:</Text>
            <Input
                value={valor}
                onChangeNumber={setValor}
                placeholder="0,00"
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.withdrawButton]}
                    onPress={() => handleTransaction('saque')}
                >
                    <Text style={styles.buttonText}>Sacar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.depositButton]}
                    onPress={() => handleTransaction('deposito')}
                >
                    <Text style={styles.buttonText}>Depositar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#e0f7fa',
    },
    logo: {
        width: '70%',
        height: 120,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        color: '#00796b',
        marginBottom: 10,
    },
    balance: {
        fontSize: 44,
        fontWeight: '800',
        color: '#004d40',
        marginBottom: 20,
    },
    description: {
        fontSize: 18,
        color: '#004d40',
        textAlign: 'center',
        marginBottom: 30,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 25,
        marginHorizontal: 10,
        elevation: 4, // Sombra para Android
        shadowColor: '#000', // Sombra para iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    withdrawButton: {
        backgroundColor: '#d32f2f', // Vermelho para saque
    },
    depositButton: {
        backgroundColor: '#388e3c', // Verde para depósito
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#ffffff',
    },
});

export default Index;
