import React from 'react';
import {
  Text,
  View,StyleSheet,ScrollView,
  TextInput,Image
} from 'react-native';
import Header from './Header';
import Body from './Body';
import Propss from './Propss';
import Student from './Student';
import St from './St';




const App=()=>
{
 const data='welcome to '
 const img1=require('./assets/rn1.jpg')
  return (

/* <View   style={{flex:1,backgroundColor:'red',flexDirection: 'row',}}   >
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
</View>      


<View style={{flex:1,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>    
<Text style={{backgroundColor:'pink'}}>{data}</Text>
  <Text style={{color:'white'}}>App Development for <Text style={{color:'red' , fontWeight:'bold'}}>Ume Habiba</Text> YouTube channel.</Text>
 </View>*/


 /*<View>   
   <TextInput placeholder="name " style={styles.box}></TextInput>  
   </View>*/


   <View>
<Image source={ require('./assets/rn1.jpg')} style={styles.fimg} />
<Image source={img1} />
<Image source={require('./assets/rn3.jpg')}/>
<Image source ={require('./assets/rn1.jpg')} />
<Image source={require('./assets/rn3.jpg')}/>
<Image source={img1}/>
   </View>


  )  
};

const styles=StyleSheet.create({
   /* linee:{
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
}*/   

box:{
  width:100,
  borderRadius:6,
  color:'red',
  backgroundColor:'royalblue',
},

fimg:{
width:200,
height:100,
resizeMode:'contain',


}


})


export default App;
