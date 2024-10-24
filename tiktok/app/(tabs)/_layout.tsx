import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function TabLayout() {
 

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => <Ionicons name={focused ? "home-sharp" : "home-outline"} size={24} color="black" />,
         
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: 'Friends',
          tabBarIcon: ({focused}) => <Ionicons name={focused ? "people-sharp" : "people-outline"}  size={24} color="black" />,
         
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: '',
          tabBarIcon: ({focused}) =>
           <View className= "absolute">
            <Ionicons name={focused ? "add-circle-sharp" : "add-circle-outline"} size={50} color="black" />
          </View> ,
         
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          tabBarIcon: ({focused}) => <Ionicons name={focused ? "chatbox-ellipses-sharp" : "chatbox-ellipses-outline"} size={24} color="black" />,
         
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({focused}) => <Ionicons name={focused ? "person-sharp" : "person-outline"} size={24} color="black" />,
         
        }}
      />
      
    </Tabs>
  );
}
