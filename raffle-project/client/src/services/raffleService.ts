import axios from 'axios';

const API_URL = 'http://localhost:5000/api/raffles';

export const getRaffles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRaffleById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createRaffle = async (raffle: any) => {
  try {
    const response = await axios.post(API_URL, raffle);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateRaffle = async (id: string, updatedRaffle: any) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedRaffle);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteRaffle = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};