const STORAGE_KEY = "APP";

class Service {
  addItem = (item) => {
    const items = this.getItems();
    return new Promise((resolve, reject) => {
      if (items.findIndex((record) => record.url === item.url) === -1) {
        const newItem = {
          name: item.name,
          url: item.url,
          createdAt: new Date().getTime(),
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
    this.setStorage(this.getItems().filter((item) => item.url !== link));
  };

  updateItem = (link, type) => {
    this.setStorage(
      this.getItems().map((item) => {
        if (item.url !== link) {
          return item;
        }

        return {
          ...item,
          vote: item.vote + (type === "upvote" ? 1 : -1),
        };
      })
    );
  };

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

  listItems = (sortBy) => {
    const items = this.getItems().sort((a, b) => {
      if (sortBy === "1") {
        return a.createdAt - b.createdAt;
      }
      if (sortBy === "2") {
        return b.createdAt - a.createdAt;
      }
      if (sortBy === "3") {
        return a.vote - b.vote;
      }
      if (sortBy === "4") {
        return b.vote - a.vote;
      }
    });
    return items;
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
