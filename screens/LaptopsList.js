import { View, Text, FlatList } from "react-native";
import { ListItem, Button } from "@rneui/base";
import { getAllLaptops } from "../rest_client/laptops";
import { useState } from "react"

export const LaptopList = () => {
    const [listLaptops, setListLaptops] = useState([]);

    const Laptops = ({ laptop }) => {
        return <ListItem>
            <ListItem.Content>
                <ListItem.Title>{ laptop.marca } {laptop.procesador}</ListItem.Title>
                <ListItem.Subtitle>Disco: { laptop.memoria }</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
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
        />
    </View>
}