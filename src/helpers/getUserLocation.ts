export const getUserLocation = async() => {
    return new Promise((resolve,reject) => {
        navigator.geolocation.getCurrentPosition(
            async ({coords}) => {
                const coordinates = [coords.latitude, coords.longitude];
                let locationData:any;
                try {
                    const locationUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${coordinates[0]}&lon=${coordinates[1]}&limit=5&appid=${import.meta.env.PUBLIC_OPENWEATHER_API_KEY}`;
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