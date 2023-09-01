import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world')
        //console.log('executed service')
    }
    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean')
        //console.log('executed service')
    }

    executeHelloWorldPathVariableService(name) {
        // let username = 'in28minutes'
        // let password = 'dummy'

        //let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password); //baisc 64 encoding
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        //,
        //console.log('executed service')
            // {
            //     headers : {
            //         authorization: basicAuthHeader
            //     }
            // }
        );
    }

}

export default new HelloWorldService()