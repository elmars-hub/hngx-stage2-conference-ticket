const storage = {
  save: function (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  get: function (key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },

  remove: function (key) {
    localStorage.removeItem(key);
  },
};

export default storage;
