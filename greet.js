import {View , Text, _View} from "react-native";
export default function greet({name}){
    return(
    
     <View>
        <Text>
            hello,{name}
        </Text>
     </View>   
    );
}