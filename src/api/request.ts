import axios from 'axios';

import { apiUrl, endpoints } from '../constants/api';
import { IInitRequest } from '../types/shipping';
import { IGetInitResponse, IPostUpdateRequest } from '../types/api';

export const init = ({ order_id, key } : IInitRequest): Promise<void | IGetInitResponse> => {
  return axios
    .get<IGetInitResponse>(`${apiUrl}${endpoints.init}?order_id=${order_id}&key=${key}`)
    .then(response => {
      return response.data;
    });
};

export const saveAddress = ({ values }: IPostUpdateRequest): Promise<any> => {
  return axios
    .post(`${apiUrl}${endpoints.update}`, values)
    .then(response => {
      return response;
    })
};
