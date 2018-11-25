const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Nathan', lastName: 'Guriand'},
    {id: 2, firstName: 'Adele', lastName: 'Parks'},
    {id: 3, firstName: 'London', lastName: 'Parks'},
    {id: 4, firstName: 'Andre', lastName: 'Tobois'},
    {id: 5, firstName: 'Nola', lastName: 'Davis'},
    {id: 6, firstName: 'Ash', lastName: 'Kecthum'}
  ];

  res.json(customers)
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
