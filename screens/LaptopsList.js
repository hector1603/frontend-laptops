import { View, Text, FlatList, TouchableHighlight } from "react-native";
import { ListItem, Button, FAB } from "@rneui/base";
import { getAllLaptops } from "../rest_client/laptops";
import { useState } from "react"

export const LaptopList = ({ navigation }) => {
    const [listLaptops, setListLaptops] = useState([]);

    const Laptops = ({ laptop }) => {
        return (
            <TouchableHighlight
                onPress={() => {
                    navigation.navigate('Registrar laptop', { item:laptop })
                }}
            >
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title>{ laptop.marca } {laptop.procesador}</ListItem.Title>
                        <ListItem.Subtitle>Disco: { laptop.memoria }</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </TouchableHighlight>
        );
    }

    fnRefreshList = (laptops) => {
        setListLaptops(laptops)
    }

    return <View>
        <Text>Lista de laptops</Text>
        <Button
            title='Consultar'
            onPress={() => {
                getAllLaptops(fnRefreshList)
            }}
        />
        <FlatList
            data={listLaptops}
            renderItem={({ item }) => {
                return <Laptops laptop={ item }/>
            }}
            keyExtractor={(item) => item.id}
        />
        <FAB
            title="+"
            onPress={() => {
                navigation.navigate('Registrar laptop', {});
            }}
        />
    </View>
}