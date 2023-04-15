import axiosClient from './axiosClient';

export const categoryApi = {
  getAll(params) {
    const url = '/categories';
    return axiosClient.get(url);
  },

  getId(data) {
    const url = `/categories/${data.id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/categories';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/categories/${data.id}`;
    return axiosClient.patch(url, data);
  },
};
