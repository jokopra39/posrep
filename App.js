import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/homescreen";
import { NavigationContainer } from "@react-navigation/native";
import Isme from "./components/isme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="cog" size={size} color={color} />;
            },
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Settings"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" size={size} color={color} />;
            },
          }}
          component={Isme}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MyTabs;
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import * as React from "react";
// import {
//   Appbar,
//   Avatar,
//   Button,
//   Menu,
//   Divider,
//   Provider,
//   PaperProvider,
// } from "react-native-paper";
// import Test from "./components/testmenu";
// import { StyleSheet, View, SafeAreaView, Text, Alert } from "react-native";

// const MyComponent = () => {
//   const [visible, setVisible] = React.useState(false);

//   const openMenu = () => setVisible(true);

//   const closeMenu = () => setVisible(false);

//   const login = visible ? (
//     <View style={styles.menu}>
//       <Menu.Item
//         style={styles.item}
//         leadingIcon="redo"
//         onPress={() => {setVisible(false)}}
//         title="Item 1"

//       />
//       <Menu.Item leadingIcon="content-cut" style={styles.item} onPress={() => {}} title="Item 2" />
//       <Divider />
//       <Menu.Item leadingIcon="content-copy" style={styles.item} onPress={() => {}} title="Item 3" />
//     </View>
//   ) : null;

//   return (
//     <Provider>
//       <Appbar.Header>
//         <Appbar.BackAction onPress={() => {}} />
//         <Appbar.Content title="Title" />
//         <Appbar.Action
//           icon="calendar"
//           onPress={() => {
//             setVisible(!visible);
//           }}
//         ></Appbar.Action>
//         <Appbar.Action icon="magnify" onPress={openMenu} />
//       </Appbar.Header>

//       <PaperProvider>
//         {login}
//         <View style={styles.container}>
//           <Avatar.Icon size={24} icon="folder" />
//         </View>
//       </PaperProvider>
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 10,
//   },
//   menu: {
//     position: "absolute",
//     right: 0,
//     top: 0,
//     marginTop: -10,
//     flexDirection: "column",
//     alignItems: "flex-end",
//   },
//   item: {
//     backgroundColor: "#F3DCD4",
//   }
// });

// export default MyComponent;

// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { Text, Button } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "./components/homescreen";
// import Isme from "./components/isme";

// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={options} />
//         <Stack.Screen
//           name="isme"
//           component={Isme}
//           options={{ title: "Welcome boss" }}
//         />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const options = () => ({
//   headerRight: () => (
//     <Button
//       onPress={() => alert("This is a button!")}
//       title="Info"
//       color="#fff"
//     />
//   ),
// });

// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

// export default MyStack;
