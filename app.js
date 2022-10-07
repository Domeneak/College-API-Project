const options = {
    method: 'GET',
    headers: {
      'X-Cassandra-Token': 'AstraCS:zcjHFtCpTgPKdTUNqOWPzUBz:51d77f1cfe87e19c228c6720b17b9c7fee7647d7bf8264783c09826551659a13',
      Accept: 'application/json'
    }
  };
  
  fetch('https://173c5b6d-607c-429b-8634-9b4c5becb02b-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/reviews/collections/michellin', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
   