export default class AnimalRepository {

    uri = import.meta.env.VITE_API_ENDPOINT_USERS

    async login(username, password) {

        try {
            let authString = `${username}:${password}`
            const response = await fetch(this.uri + '/login', {
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + authString
                }
            });
            const text = await response.json();
            console.log(text); 
        } catch (error) {
            throw new Error('Error occured during API fetch GET request to the Users table')
        }
    }
}