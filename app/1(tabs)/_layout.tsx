import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";
const { Screen } = Tabs;

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: { backgroundColor: '#25292e' },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: { backgroundColor: '#25292e' },
    }}>
      <Screen name="useState" options={{
        title: 'Start',
        tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={24} />
      }} />
      <Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={24} />
      }} />
      <Screen name="responsive" options={{
        title: 'Responsive',
        tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
      }} />
      <Screen name="native-ui" options={{
        title: 'Native UI',
        tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
      }} />
      <Screen name="list" options={{
        title: 'List',
        tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
      }} />
      <Screen name='flex' options={{
        title: 'Flex',
        tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
      }} />
    </Tabs>
  );
}
