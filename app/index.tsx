import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Username dan Password harus diisi!');
    } else {
      Alert.alert('Sukses', 'Login berhasil!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader1}><Text style={styles.titleHeader2}>KRISNA</Text>PUTRA</Text>
      <Image source={require('../assets/login_image.png')} style={styles.image} />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="gray"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20,
  },
  titleHeader1: {
    fontSize: 16,
    color: 'black',
    fontStyle: 'italic',
    marginTop: -160,
    marginBottom: 20,
    marginLeft: 200,
  },
  titleHeader2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: -160,
    marginBottom: 20,
    marginLeft: 160,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: 'black',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
