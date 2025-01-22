import { FAB, Input } from "@rneui/base"
import { useState } from "react"
import { Alert, View } from "react-native"
import { saveItemRest } from "../rest_client/laptops";

export const LaptopForm = ({ navigation }) => {
    const [marca, setMarca] = useState();
    const [procesador, setProcesador] = useState();
    const [memoria, setMemoria] = useState();
    const [disco, setDisco] = useState();

    const saveItem = () => {
        console.log("Laptop guardada")
        saveItemRest(
            {
                marca: marca,
                procesador: procesador,
                memoria: memoria,
                disco: disco
            },
            showMessageSuccess
        )
        navigation.goBack();
    }

    const showMessageSuccess = () => {
        Alert.alert("Success", "Item guardado con éxito");
    }

    return <View>
        <Input
            placeholder="Ingrese la marca"
            value={marca}
            onChangeText={(value) => {
                setMarca(value);
            }}
        />
        <Input
            placeholder="Procesador"
            value={procesador}
            onChangeText={(value) => {
                setProcesador(value);
            }}
        />
        <Input
            placeholder="Memoria"
            value={memoria}
            onChangeText={(value) => {
                setMemoria(value);
            }}
        />
        <Input
            placeholder="Disco"
            value={disco}
            onChangeText={(value) => {
                setDisco(value);
            }}
        />
        <FAB
            title="Guardar"
            onPress={saveItem}
        />
    </View>
}