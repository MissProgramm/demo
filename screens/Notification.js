import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Notification = ({route}) => {
  console.log(route.params.data);
  const navigation = useNavigation();
  return (
    <View>
      <Text>This is Notification Screen.</Text>
      <Text>{route.params.data.notice}</Text>
      <Text>{route.params.data.msg}</Text>
      <Button
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="go to home screen "
      />
    </View>
  );
};

export default Notification;
