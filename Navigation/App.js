import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./Screens/ProfileScreen";
import CourseListScreen from "./Screens/CourseListScreen";
import SettingsScreen from "./Screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Profile" component={ProfileScreen}/>
                <Tab.Screen name="Course List" component={CourseListScreen}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};