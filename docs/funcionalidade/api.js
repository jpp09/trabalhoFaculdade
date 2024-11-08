const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODZmNmQ2YzZkNTVhODJiNmY5MmU4NWE0ODc0MTljYyIsIm5iZiI6MTczMTEwNjY1MS42OTY5NzEyLCJzdWIiOiI2NzJlOTNlODdmZDcyNDM0MmE5MDAzYTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.l2CjKDziNFBpnemeRZX1Bc9qv9sZh_hMLso72ngHTrs'
  }
};

const api = fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));


