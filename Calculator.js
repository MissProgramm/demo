import { StyleSheet, Text, TextInput,TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Calculator = () => {

const [display,setDisplay]=useState("")

  return (
    <View >
      <Text>programmer's Calculator</Text>
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
<TouchableOpacity style={[styles.btn , {borderRadius:23}]}> 
   <Text style={styles.btntxt}>=</Text>
   </TouchableOpacity>
</View>
    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({

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
},


btn:{
  flex:1,
  margin:9,
  padding:2,
  borderWidth:1,
  borderColor:'red',
  borderRadius:2,

},

btntxt:{
  color:'red',
  alignSelf:'center',
  margin:4,
  fontWeight:'bold',
  
},


})