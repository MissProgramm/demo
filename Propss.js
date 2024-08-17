import { Text, View ,StyleSheet} from "react-native";




const Propss=(props)=>{


return(
<View>
<Text style={styles.one}>  {props.name}     </Text>
<Text>  {props.description}</Text>
</View>

)
};
const styles=StyleSheet.create({
    one:{
  border:'green',
  font:12,
  },
    two:{
  color:'red',
  }
  })

export default Propss;