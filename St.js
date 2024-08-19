import { useState } from 'react';
import {View,Text,Button} from 'react-native';

const St=()=>{

const [data,setdata]=useState(0);


return(
<View>
<Text> {data}</Text>

<Button title="u pressed me" onPress={()=>setdata(data+1)}>
</Button>

</View>
) 
};

export default St;