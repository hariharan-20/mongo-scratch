const mongoose = require('mongoose');
const users = mongoose.model('users');

module.exports = (app) => {

  app.get(`/api/users`, async (req, res) => {
    let users = await users.find();
    return res.status(200).send(users);
  });

  app.post(`/api/users`, async (req, res) => {
    let users = await users.create(req.body);
    return res.status(201).send({
      error: false,
      users
    })
  })

  app.put(`/api/users/:id`, async (req, res) => {
    const {id} = req.params;

    let users = await users.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      users
    })

  });

  app.delete(`/api/users/:id`, async (req, res) => {
    const {id} = req.params;

    let users = await users.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      users
    })

  })

}

