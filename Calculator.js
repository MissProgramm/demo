import { StyleSheet, Text, TextInput,TouchableOpacity, View } from 'react-native'
import React from 'react'

const Calculator = () => {
  return (
    <View style={{flex:1}}>
      <Text>programmer's Calculator</Text>
      <TextInput  placeholder='text' style={styles.txt}></TextInput>


<View style={{flexDirection:'row',justifyContent:'space-around'}}>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>c</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>0</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>.</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>/</Text></TouchableOpacity>

</View>
<View style={{flexDirection:'row',justifyContent:'space-around'}}>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>7</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>8</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>9</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>*</Text></TouchableOpacity>

</View>
<View style={{flexDirection:'row',justifyContent:'space-around'}}>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>4</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>5</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>6</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>-</Text></TouchableOpacity>

</View>
<View style={{flexDirection:'row',justifyContent:'space-around'}}>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>1</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>2</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>3</Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>+</Text></TouchableOpacity>

</View>

<View style={{flexDirection:'row' }}>
<TouchableOpacity style={[styles.btn , {borderRadius:23}]}><Text style={styles.btntxt}>=</Text></TouchableOpacity>
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