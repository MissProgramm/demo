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
<Header />
  <Text style={{fontSize:30,marginLeft:60}}>React native App! </Text>
<Text style={[styles.linee,styles.heading]}>let's start it . </Text>
<Body style={[styles.heading,{color:'green'}]}/>
</View>
  )  
};

const styles=StyleSheet.create({
  linee:{
backgroundColor:'yellow',
borderRadius:15,
paddingLeft:15,
borderColor:'red',
borderWidth:3,
height:50,
fontSize:30,
},
  heading:{
fontWeight:'bold',
}
})


export default App;
