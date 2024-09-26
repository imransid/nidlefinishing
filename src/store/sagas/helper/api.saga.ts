import {ApiDataItem} from '@/Components/DataTableComponent/DataTableComponent';
import {LoginResponse} from '@/store/types/types';
import {BASE_URL, SIGN_IN_URL} from '@/utils/environment';
import ToastPopUp from '@/utils/Toast.android';
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
    ToastPopUp('Sign In Failed. ');
    return undefined; // Or you could return a specific error object here
  }
};

export const commonGetAPI = async (props: ICommonGetAPIProps): Promise<any> => {
  try {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + props.token);

    const requestOptions: any = {
      method: 'GET',
      headers: myHeaders,
      body: null, // No need for body in a GET request
      redirect: 'follow',
    };

    let response = await fetch(props.url, requestOptions)
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else {
          console.error(`Request failed with status: ${response.status}`);
          return undefined; // Return undefined if status is not 200 or 201
        }
      })
      .then(result => {
        if (result) {
          // Process your result here
          return result;
        } else {
          return []; // Return an empty array if the response was not successful
        }
      })
      .catch(error => {
        return undefined;
      });

    return response;
  } catch (error) {
    ToastPopUp('Something went wrong. Please try again later. ');
    console.error('Error in commonGetAPI:', error);
    return undefined; // Or you could return a specific error object here
  }
};

export const commonPostAPI = async (
  props: ICommonPostAPIProps,
): Promise<any> => {
  try {
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
        return response.data;
      })
      .catch((err: any) => {
        ToastPopUp('Something went wrong. Please try again later. ');
        return undefined;
      });
  } catch (error) {
    ToastPopUp('Something went wrong. Please try again later. ');
    console.error('Error in commonGetAPI:', error);
    return undefined; // Or you could return a specific error object here
  }
};

export const commonPutAPI = async (props: ICommonPostAPIProps) => {
  try {
    let data = JSON.stringify(props.data);

    let config = {
      method: 'put',
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
      .then(response => {
        // console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch(error => {
        ToastPopUp('Something went wrong. Please try again later. ');
        return undefined;
      });
  } catch (err) {
    ToastPopUp('Something went wrong. Please try again later. ');
    console.error('error');
    return undefined;
  }
};
