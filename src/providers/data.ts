export class DataController {
  constructor() {}

  async get() {
    const method = "GET";
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    try {
      const res = await fetch("./assets/data.json", {
        method,
        headers
      });
      const obj = await res.json();
      return obj.products.sort();
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

export const DataProvider = new DataController();
