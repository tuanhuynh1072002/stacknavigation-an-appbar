import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import DetailsScreen from '../screen/DetailsScreen';
import { Icon } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const MyBottomTabNavigator = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} 
            options={{
                tabBarIcon:({color}) => <Icon source={"home"} color='black' size={30} {...color}/>
            }}
            />
            <Tab.Screen name='Detail' component={DetailsScreen}
            options={{
                tabBarIcon:({color}) => <Icon source={"star"} color='black' size={30} {...color}/>
            }}
            />
        </Tab.Navigator>
    )
}
export default MyBottomTabNavigator;