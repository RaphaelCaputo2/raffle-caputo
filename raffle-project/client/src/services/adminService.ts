import axios from 'axios';

const API_URL = 'http://localhost:5000/api/admin/';

class AdminService {
  createAdmin(adminData) {
    return axios.post(API_URL + 'create', adminData);
  }

  getAdminDashboard() {
    return axios.get(API_URL + 'dashboard');
  }

  updateAdmin(adminData) {
    return axios.put(API_URL + 'update', adminData);
  }

  deleteAdmin(adminId) {
    return axios.delete(API_URL + 'delete', { data: { id: adminId } });
  }
}

export default new AdminService();