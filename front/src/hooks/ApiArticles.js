import {apiClient} from '../config/axios';

export const getArticles = async () => {
  return apiClient.get(`/posts`);
}

export const createArticle = async (data) => {
  return apiClient.post(`/posts`, data);
}

export const getArticleById = async (id) => {
  return apiClient.get(`/posts/${id}`, data);
}