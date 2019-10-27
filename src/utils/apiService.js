const api = {
  get: async (url) => {
    const response = await fetch(url);
    return response.json();
  },
};

export default api;
