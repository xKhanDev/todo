const API = 'https://api.example.com';

const fetchData = async()=>{
    try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();