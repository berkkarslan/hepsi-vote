const STORAGE_KEY = "APP";

class Service {
  addItem = (item) => {
    const items = this.getItems();
    return new Promise((resolve, reject) => {
      if (items.findIndex((record) => record.url === item.url) === -1) {
        const newItem = {
          name: item.name,
          url: item.url,
          createdAt: new Date().toISOString(),
          vote: 0,
        };
        items.push(newItem);
        this.setStorage(items);
        resolve(item);
      } else {
        // Error item already exists.
        reject(false);
      }
    });
  };

  deleteItem = (link) => {
    this.setStorage(this.getItems().filter((item) => item.link !== link));
  };

  updateItem = (link, vote) => {};

  getItems = () => {
    const items = localStorage.getItem(STORAGE_KEY);
    if (items) {
      if (this.isJSON(items)) {
        return JSON.parse(items);
      }
    }
    this.setStorage([]);
    return [];
  };

  isJSON(jsonStr) {
    if (typeof jsonStr != "string") jsonStr = JSON.stringify(jsonStr);

    try {
      JSON.parse(jsonStr);
      return true;
    } catch (e) {
      return false;
    }
  }

  setStorage = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };
}
module.exports = new Service();
