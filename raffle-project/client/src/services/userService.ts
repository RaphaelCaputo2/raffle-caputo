import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

class UserService {
  registerUser(user: any) {
    return axios.post(API_URL + 'register', user);
  }

  getUserById(userId: string) {
    return axios.get(API_URL + userId);
  }

  updateUser(userId: string, user: any) {
    return axios.put(API_URL + userId, user);
  }

  deleteUser(userId: string) {
    return axios.delete(API_URL + userId);
  }

  viewRaffles(userId: string) {
    return axios.get(API_URL + userId + '/raffles');
  }

  viewRemainingNumbers(userId: string) {
    return axios.get(API_URL + userId + '/remainingNumbers');
  }
}

export default new UserService();