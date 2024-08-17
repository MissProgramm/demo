import { Text, View ,StyleSheet} from "react-native";

const Student=(props)=>{
return (

<View>
    <Text>{props.name}</Text>
    <Text>{props.mail}</Text>
</View>
)

};


export default Student;
