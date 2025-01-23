const IP = "192.168.0.6";
const PORT = 3000;
const URL = `http://${IP}:${PORT}/`;

export const getAllLaptops = (fnRefreshList)  => {
    fetch(
        URL + 'laptops'
    ).then(
        response => response.json()
    ).then(
        (body) => {
            console.log('Lista de laptops disponibles')
            fnRefreshList(body);
        }
    )
}

export const saveItemRest = (laptop, fnSuccess)  => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                marca: laptop.marca,
                procesador: laptop.procesador,
                memoria: laptop.memoria,
                disco: laptop.disco
            }
        )
    }

    fetch(
        URL + 'laptops', config 
    ).then(
        response => response.json()
    ).then(
        (data) => {
            console.log(data);
            fnSuccess();
        }
    )
}
export const updateItemRest = (laptop, fnSuccess) => {
    const config = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: laptop.id,
            marca: laptop.marca,
            procesador: laptop.procesador,
            memoria: laptop.memoria,
            disco: laptop.disco
        })
    }

    fetch(`${URL}laptop/${laptop.id}`, config)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            fnSuccess();
        })
        .catch(error => {
            console.error('Error al actualizar el elemento:', error);
            console.error('URL usada:', `${URL}laptop/${laptop.id}`);
        });
}