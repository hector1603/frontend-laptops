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