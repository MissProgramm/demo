import { useState } from 'react';
import {View,Text} from 'react-native';

const Statee=()=>{

const [data,setdata]=useState(0);

function handleClick(){
setdata(count+1);

}

return(
    <View>
<Text> {data}</Text>

<button onClick={handleClick}>
    <Text>u pressed me </Text>
</button>
</View>
) 
};


export default Statee;