import {LoginResponse} from '@/store/types/types';
import {BASE_URL, SIGN_IN_URL} from '@/utils/environment';
import axios from 'axios';
import moment from 'moment';
const apiUrl = BASE_URL + '/' + SIGN_IN_URL;

interface IPayload {
  email: string;
  password: string;
}

export const loginAPI = async (
  payload: IPayload,
): Promise<LoginResponse | undefined> => {
  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const requestData = {
      email: payload.email,
      password: payload.password,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(apiUrl, requestData, config);
    return response.data;
  } catch (error) {
    console.error('Error in loginAPI:', error);
    return undefined; // Or you could return a specific error object here
  }
};
