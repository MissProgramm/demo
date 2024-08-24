import { StyleSheet, Text, TextInput,TouchableOpacity, View } from 'react-native'
import React from 'react'

const Calculator = () => {
  return (
    <View style={{flex:1}}>
      <Text>programmer's Calculator</Text>
      <TextInput  placeholder='enter number'></TextInput>
<View style={styles.wrapper}> 
  <TouchableOpacity style={styles.btn}> <Text style={styles.btntxt}> 1 </Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}> <Text style={styles.btntxt}> 2 </Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}> <Text style={styles.btntxt}> 3 </Text></TouchableOpacity>
  <TouchableOpacity style={styles.btn}> <Text style={styles.btntxt}> 4 </Text></TouchableOpacity>
</View>

    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({
wrapper:{
flexDirection:'row',
backgroundColor:'royalblue',
justifyContent:'space-between',
alignItems:'center',
},

btn:{
  flex:1,
  margin:4,
  padding:2,
  borderWidth:1,
  borderColor:'red',
  borderRadius:2,

},

btntxt:{
  color:'red',
}


})