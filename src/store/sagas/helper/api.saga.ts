import {ApiDataItem} from '@/Components/DataTableComponent/DataTableComponent';
import {LoginResponse} from '@/store/types/types';
import {BASE_URL, SIGN_IN_URL} from '@/utils/environment';
import axios from 'axios';
import moment from 'moment';
const apiUrl = BASE_URL + '/' + SIGN_IN_URL;

interface IPayload {
  email: string;
  password: string;
}

interface ICommonGetAPIProps {
  url: string;
  token: string;
}

interface ICommonPostAPIProps {
  url: string;
  token: string;
  data: ApiDataItem[];
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

export const commonGetAPI = async (props: ICommonGetAPIProps): Promise<any> => {
  try {
    let data = '';

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: props.url,
      headers: {
        Authorization: 'Bearer ' + props.token,
      },
      data: data,
    };

    return axios
      .request(config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return undefined;
      });
  } catch (error) {
    console.error('Error in commonGetAPI:', error);
    return undefined; // Or you could return a specific error object here
  }
};

export const commonPostAPI = async (
  props: ICommonPostAPIProps,
): Promise<any> => {
  try {
    console.log('props', props);
    let data = JSON.stringify(props.data);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: props.url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + props.token,
      },
      data: data,
    };

    return axios
      .request(config)
      .then((response: any) => {
        console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch((err: any) => {
        console.log('err', err);
        return undefined;
      });
  } catch (error) {
    console.error('Error in commonGetAPI:', error);
    return undefined; // Or you could return a specific error object here
  }
};
