import { StatusBar, StyleSheet, Text, TextInput,TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Calculator = () => {

const [display,setDisplay]=useState("")
const calculateResult=()=>{
const result=eval(display)
console.log(result)
setDisplay(result.toString())
}



  return (
    <View style={styles.wrapper}>
      <StatusBar  backgroundColor={'red'}  barStyle={'light-content'}   />
      <Text style={styles.heading}>MissProgrammer's Calculator</Text>
      <TextInput value={display} placeholder='text' style={styles.txt}></TextInput>


<View style={{flexDirection:'row',justifyContent:'space-around'}}>
  <TouchableOpacity style={styles.btn}  onPress={()=>{setDisplay("")}}><Text style={styles.btntxt}>c</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}  onPress={()=>{setDisplay(display+"0")}}><Text style={styles.btntxt}>0</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}  onPress={()=>{setDisplay(display+".")}}><Text style={styles.btntxt}>.</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}  onPress={()=>{setDisplay(display+"/")}}><Text style={styles.btntxt}>/</Text></TouchableOpacity>

</View>
<View style={{flexDirection:'row',justifyContent:'space-around'}}>
  <TouchableOpacity style={styles.btn} onPress={()=>{setDisplay(display+"7")}}><Text style={styles.btntxt}>7</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn} onPress={()=>{setDisplay(display+"8")}}><Text style={styles.btntxt}>8</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn} onPress={()=>{setDisplay(display+"9")}}><Text style={styles.btntxt}>9</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn} onPress={()=>{setDisplay(display+"*")}}><Text style={styles.btntxt}>*</Text></TouchableOpacity>

</View>
<View style={{flexDirection:'row',justifyContent:'space-around'}}>
  <TouchableOpacity style={styles.btn} onPress={()=>{setDisplay(display+ "4")}}><Text style={styles.btntxt}>4</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn} onPress={()=>{setDisplay(display+ "5")}}><Text style={styles.btntxt}>5</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn} onPress={()=>{setDisplay(display+ "6")}}><Text style={styles.btntxt}>6</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn} onPress={()=>{setDisplay(display+  "-")}}><Text style={styles.btntxt}>-</Text></TouchableOpacity>

</View>
<View style={{flexDirection:'row',justifyContent:'space-around'}}>
  <TouchableOpacity style={styles.btn} onPress={()=>{setDisplay(display+"1")}}><Text style={styles.btntxt}>1</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn} onPress={()=>{setDisplay(display+"2")}}><Text style={styles.btntxt}>2</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn} onPress={()=>{setDisplay(display+"3")}}><Text style={styles.btntxt}>3</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn} onPress={()=>{setDisplay(display+"+")}}><Text style={styles.btntxt}>+</Text></TouchableOpacity>

</View>

<View style={{flexDirection:'row' }}>
<TouchableOpacity onPress={calculateResult} style={[styles.btn , {borderRadius:23,height:75,backgroundColor:'red',width:'96%'}]}> 
   <Text style={[styles.btntxt,{color:'white'}]}>=</Text>
   </TouchableOpacity>
</View>
    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({
wrapper:{
flex:1,
justifyContent:'center',
alignItems:'center',
},
heading:{
color:'red',
fontSize:28,
alignSelf:'center',
marginBottom:20,

},

txt:{
  borderColor :'blue', 
  borderWidth:4,
  borderRadius:4,
  margin:5,
  height:150,
  backgroundColor:'#eee',
  textAlign:'right',
  fontSize:45,
  padding:10,
  width:'94%',
},


btn:{
  
  margin:9,
  padding:2,
  borderWidth:1,
  borderColor:'red',
  borderRadius:5,
  backgroundColor:'#eee',
  height:80,
  width:80,
  justifyContent:'center',
  alignItems:'center',
  
},

btntxt:{
  color:'red',

  fontWeight:'bold',
  fontSize:25,
},


})