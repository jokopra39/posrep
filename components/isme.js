import { Button, View} from "react-native";
import * as React from 'react';

export default function HomeScreen({navigation}){
//export default HomeScreen = ({navigation}) => {
    return(
  <Button
    title="okeeee"
    onPress={() => navigation.navigate("Profile", { name: "Jane" })}
  />
    )
}
