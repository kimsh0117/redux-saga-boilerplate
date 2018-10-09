export const countrySearch = (searchQuery) => {
  const SERVER_API_ENDPOINT = `/world/search?country=${searchQuery}`;

  fetch(SERVER_API_ENDPOINT)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json.map(({Name, Region})=>({
        Name,
        Region
      }))
    })
    .catch(error => console.error(error))
};

