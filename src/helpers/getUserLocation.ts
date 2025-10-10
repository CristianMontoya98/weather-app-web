import { API_ENDPOINTS } from "../services/api";

 
export const getUserLocation = async() => {
    return new Promise((resolve,reject) => {
        navigator.geolocation.getCurrentPosition(
            async ({coords}) => {
                const coordinates = [coords.latitude, coords.longitude];
                let locationData:any;
                try {
                    const locationUrl = API_ENDPOINTS.CURRENT_LOCATION(coordinates[0],coordinates[1] );
                    const response = await fetch(locationUrl);
                    locationData = await response.json();
                  
                } catch (error) {
                    console.log('Error al obtener ubicación:', error);
                }
                
                resolve(locationData);
            },
            (err) => {
                alert('No se pudo obtener la localización')
                console.log(err);
                reject();
            }
        )
    })
}