import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LaptopList } from './screens/LaptopsList';
import { LaptopForm } from './screens/LaptopsForm';

export default function App() {
  const StackLaptops = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackLaptops.Navigator initialRouteName='Laptops'>
        <StackLaptops.Screen
          name='Laptops'
          component={ LaptopList }
        />
        <StackLaptops.Screen
          name='Registrar laptop'
          component={ LaptopForm }
        />
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}
