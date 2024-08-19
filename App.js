import React from 'react';
import {
  Text,
  View,StyleSheet,
} from 'react-native';
import Header from './Header';
import Body from './Body';
import Propss from './Propss';
import Student from './Student';
import St from './St';




const App=()=>
{
 
  return (
<View   style={{flex:1,backgroundColor:'red',flexDirection: 'row',}}   >
  <View style={{flex:2,backgroundColor:'green'}} ></View>
  <View style={{flex:1,backgroundColor:'white'}} ></View>
  {/*
<Header />
  <Text style={{fontSize:30,marginLeft:60}}>React native App! </Text>
<Text style={[styles.linee,styles.heading]}>let's start it . </Text>
<Body style={[styles.heading,{color:'green'}]}/>

<Propss name='single data through prps' ></Propss>
<Propss description='second data' ></Propss>
<Student   name='ume' mail='ume@gmail.com'   />
<Student   name='habiba' mail='habiba@gmail.com' />
<St></St>
  */}

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
