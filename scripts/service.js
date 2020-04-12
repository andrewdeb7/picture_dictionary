

const service = {
  getAllThemes: () => {
    let url = configuration.base_url + '/home/contents';
    return fetch(url)
    .then(response => {
      if(response.ok === true) {
        return response.json();
      } else {
        throw Error(`There was an error in the communication with the server: ${response.statusText}`);
      }
    });
  }
};
