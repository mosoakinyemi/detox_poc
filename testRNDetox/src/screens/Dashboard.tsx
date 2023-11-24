import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export function Dashboard(): JSX.Element {
  const navigation = useNavigation();

  const done = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container} testID="dashboard-screen">
      <Text style={styles.title}>In Dashboard screen</Text>

      <Button title="Done" testID="done-btn" onPress={done} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
});
