import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export function Auth(): JSX.Element {
  const navigation = useNavigation();
  const [name, onChangeName] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [error, setError] = React.useState<null | string>(null);

  const submit = () => {
    if (name.toLowerCase() === 'demo' && number === '123') {
      return navigation.navigate('Dashboard');
    }
    setError('Wrong details');
  };
  return (
    <View style={styles.container} testID="auth-screen">
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Your name"
        testID="name-input"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Your number"
        testID="number-input"
      />

      <TouchableOpacity
        onPress={submit}
        testID="submit-button"
        style={styles.button}>
        <Text>Submit</Text>
      </TouchableOpacity>

      {error && <Text>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 35,
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    alignSelf: 'center',
    marginTop: 40,
  },
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
