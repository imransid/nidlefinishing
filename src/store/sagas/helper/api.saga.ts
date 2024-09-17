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
    const axios = require('axios');
    let data = JSON.stringify(props.data);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://192.168.10.53:8081/api/v1/confirmReceiveRequest',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0Iiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJuYW1lIjoiVGVzdCIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJvcmdJZCI6MjUyLCJpYXQiOjE3MjYyOTU0MzcsImV4cCI6MTcyODg4NzQzN30.-yLfZwaQ8nfoz-y-eZLppIe0mFojtDfuZwHeprPdIOz5cEgTF5B3DqgwXsQgQogg7HxvC5I99LhA866u9nwIHA',
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
      })
      .catch(() => {
        return undefined;
      });
  } catch (error) {
    console.error('Error in commonGetAPI:', error);
    return undefined; // Or you could return a specific error object here
  }
};
