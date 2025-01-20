import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LaptopList } from './screens/LaptopsList';

export default function App() {
  const StackLaptops = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackLaptops.Navigator>
        <StackLaptops.Screen
          name='Laptops'
          component={LaptopList}
        />
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}
