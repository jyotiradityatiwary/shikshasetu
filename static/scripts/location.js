const findMycity = () => {
    const status = document.querySelector('.status');
    const success =(position) =>{
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude +" "+ longitude);
        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        fetch(url)
        .then(res => res.json())
        .then(data => {
        console.log(data);
        const city = data.city;
        console.log(city);
        })
    }   
    const error = () => {
        status.textContent = 'Unable to retrieve your location';
    }
    navigator.geolocation.getCurrentPosition(success, error);
}

document.querySelector('.find-city').addEventListener('click', findMycity);
