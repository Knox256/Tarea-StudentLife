import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import TasksScreen from './screens/TasksScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const icons = { Home: 'home', Tasks: 'list', Schedule: 'calendar', Profile: 'person' };

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#2563EB' },
          headerTintColor: 'white',
          tabBarActiveTintColor: '#2563EB',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { paddingTop: 5 },
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? icons[route.name] : icons[route.name] + '-outline'} size={size} color={color} />
          ),
        })}>
          <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
          <Tab.Screen name="Tasks" component={TasksScreen} options={{ title: 'Mis tareas', tabBarLabel: 'Tareas' }} />
          <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ title: 'Mi horario', tabBarLabel: 'Horario' }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Mi perfil', tabBarLabel: 'Perfil' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
