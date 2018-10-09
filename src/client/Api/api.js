export const countrySearch = (searchQuery) => {
  const SERVER_API_ENDPOINT = `/world/search?country=${searchQuery}`;

  fetch(SERVER_API_ENDPOINT)
    .then(response => response.json())
    .catch(error => console.error(error));
};

