function API() {
  return {
    data: [],
    getData(type = 'users') {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(data => this.data = data.map(d => d.title || d.name));
    },
  }
};
