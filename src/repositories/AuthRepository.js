export default class AuthRepository {

    uri = import.meta.env.VITE_API_ENDPOINT_GENERAL

    async login(username, password) {

        try {
            let authString = btoa(`${username}:${password}`)
            const response = await fetch(this.uri + '/login', {
                withCredentials: true,
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + authString
                }
                
            });
            const text = await response.json();
            console.log(text); 
        } catch (error) {
            throw new Error('Error occured during API fetch GET request while login')
        }
    }

    async logout() {

        try {
            const response = await fetch(this.uri + '/logout', {
                withCredentials: true,
                method: 'GET',
            });
            console.log("Logout successfull"); 
        } catch (error) {
            throw new Error('Error occured during API fetch GET request while logout')
        }
    }
}