import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{flex: 1, backgroundColor: 'royalblue', margin: 10, padding: 15}}>
      <Text>This is home screen .</Text>
      <Button
        onPress={() => {
          navigation.navigate('Notification', {
            data: {notice: 'demo notice', msg: 'demo msg'},
          });
        }}
        title="Go to notification page "
      />
    </View>
  );
};

export default Home;
