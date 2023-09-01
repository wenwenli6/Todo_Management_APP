import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constans';

class TodoDataService {
    retrieveAllTodos(name) {
        //从后端获取数据
        return axios.get(`${JPA_API_URL}/users/${name}/todos`);
        //console.log('executed service')
    }
    retrieveTodo(name, id) {
        //从后端获取数据
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
        //console.log('executed service')
    }
    deleteTodo(name, id) {
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
        //console.log('executed service')
    }
    updateTodo(name, id, todo) {
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
        //console.log('executed service')
    }
    createTodo(name, todo) {
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
    }


}

export default new TodoDataService