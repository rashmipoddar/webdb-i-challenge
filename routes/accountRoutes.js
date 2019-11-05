const router = require('express').Router();

const db = require('../data/dbConfig');

router.get('/', (req, res) => {
  const { limit = 5, sortby = 'id', sortdir = 'asc' } = req.query;
  // console.log(limit, sortby, sortdir);

  db.select('*').from('accounts').orderBy(sortby, sortdir).limit(limit)
    .then(accounts => {
      // console.log(accounts);
      res.status(200).send(accounts);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({message: 'There was an error in getting data from the database'});
    })
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  // console.log(id);

  db('accounts').where('id', id)
    .then(account => {
      // console.log(account);
      if (account.length !== 0) {
        res.status(200).send(account);
      } else {
        res.status(404).send({message: 'The account with provided id does not exist'});
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({message: 'There was an error in getting data from the database'});
    })
});

router.post('/', (req, res) => {
  const accountDetails = req.body;
  // console.log(accountDetails);

  if (!accountDetails.name || !accountDetails.budget) {
    res.status(400).send({message: 'Name and budget are required'});
  } else {
    db('accounts').insert(accountDetails)
      .then(response => {
        // console.log(response);
        res.status(201).send('Account created');
      })
      .catch(error => {
        console.log(error);
        res.status(500).send({message: 'The account could not be created. Please try again later.'});
      })
  }
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  // console.log(id);

  const updateData = req.body;
  // console.log(updateData);

  if (!updateData.name || !updateData.budget) {
    res.status(400).send({message: 'Name and budget are required'});
  } else {
    db('accounts').where('id', id).update(updateData)
      .then(updateResponse => {
        // console.log(updateResponse);
        if (updateResponse !== 1) {
          res.status(404).send({message: 'Account with provided id does not exist'});
        } else {
          res.status(200).send('Account has been updated');
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).send({message: 'The account could not be updated'});
      })
  }
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  // console.log(id);

  db('accounts').where('id', id).del()
    .then(count => {
      // console.log(count);
      if (count !== 1) {
        res.status(404).send({message: 'Account with provided id does not exist'});
      } else {
        res.status(200).send('Account deleted');
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({message: 'There was an error in deleting the account'});
    })
});

module.exports = router;
