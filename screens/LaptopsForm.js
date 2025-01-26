import { FAB, Input } from "@rneui/base"
import { useState } from "react"
import { Alert, View } from "react-native"
import { saveItemRest, updateItemRest, deleteItemRest } from "../rest_client/laptops";

export const LaptopForm = ({ navigation, route }) => {
    let data = route.params.item;
    let isNew = true;

    if(data != null) {
        isNew = false;
    }

    const [marca, setMarca] = useState(isNew?null:data.marca);
    const [procesador, setProcesador] = useState(isNew?null:data.procesador);
    const [memoria, setMemoria] = useState(isNew?null:data.memoria);
    const [disco, setDisco] = useState(isNew?null:data.disco);

    const saveItem = () => {
        console.log("Laptop guardada")
        saveItemRest(
            {
                marca: marca,
                procesador: procesador,
                memoria: memoria,
                disco: disco
            },
            showMessage
        )
    }

    const updateItem = () => {
        console.log("Laptop actualizada")
        updateItemRest({
            id: data.id,
            marca: marca,
            procesador: procesador,
            memoria: memoria,
            disco: disco
        }, showMessage)
    }

    const deleteItem = () => {
        console.log("Laptop eliminada")
        deleteItemRest(
            {
                id: data.id
            }, showMessage
        )
    }

    const confirmDelete = () => {
        Alert.alert("CONFIRMAR", 
            "¿Desea eliminar este item?", 
            [
                {
                    text: "Cancelar"
                },
                {
                    text: "Eliminar",
                    onPress: deleteItem
                }
            ]
        )
    }

    const showMessage = (message) => {
        Alert.alert("Success", message);
        navigation.goBack();
    }

    return <View>
        <Input
            placeholder="Marca"
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
            onPress={ isNew?saveItem:updateItem }
        />
        {
            isNew ? <View></View> : <FAB
                title = "Eliminar"
                onPress = {
                    confirmDelete
                }
            />
        }
    </View>
}