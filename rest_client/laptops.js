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
        URL + 'laptops',
    ).then(
        response => response.json()
    ).then(
        (data) => {
            console.log(data);
            fnSuccess();
        }
    )
}