const apiClient = axios.create({
    baseURL: 'https://herakles-hotel-default-rtdb.europe-west1.firebasedatabase.app',  
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  export default {
    getCollectionItems(collectionName) {
      return apiClient.get(`${collectionName}.json`);
    }
  };