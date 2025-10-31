import { API_ENDPOINTS } from "../services/api";
 
export const getUserLocation = async() => {
    return new Promise((resolve,reject) => {
        navigator.geolocation.getCurrentPosition(
            async ({coords}) => {
                const coordinates = [coords.latitude, coords.longitude];
                let locationData:any;
                let data:any;
                try {
                    const locationUrl = API_ENDPOINTS.CURRENT_LOCATION(coordinates[0],coordinates[1] );
                    const locationResponse = await fetch(locationUrl);
                    locationData = await locationResponse.json();
                    data = {
                        locationData
                    }
                } catch (error) {
                    console.log('Error al obtener ubicación:', error);
                }
                
                resolve(data);
            },
            (err) => {
                alert('No se pudo obtener la localización')
                console.log(err);
                reject();
            }
        )
    })
}