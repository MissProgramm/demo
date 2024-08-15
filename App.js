import React from 'react';
import {
  Text,
  View,StyleSheet,
} from 'react-native';
import Header from './Header';
import Body from './Body';


const App=()=>
{
 
  return (
<View>
<Header></Header>
  <Text style={{fontSize:30,marginLeft:60}}>React native App! </Text>
<Text style={styles.linee}>let's start it . </Text>
</View>
  )  
};

const styles=StyleSheet.create({
  linee:{
backgroundColor:'green',
borderRadius:15,

borderColor:'red',
borderWidth:3,
height:50,
fontSize:30,

  }}
)


export default App;
