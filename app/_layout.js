import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'black' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false,
        }}
      />

       <Tabs.Screen
        name="blues"
        options={{
          title: 'Blues',
          tabBarIcon: ({ color }) => <Ionicons name="musical-notes-sharp" size={24} color={color} />,
           headerShown: false,
        }}
      />
     
      <Tabs.Screen
        name="aboutme"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
           headerShown: false,
        }}
      />
    </Tabs>
  );
}
