
const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: '05add515f5534c1aa9f0376ba5598edd'
  });

  const handleApiCall = (req, res) => {
  app.models
  .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
  .then(data => {
      res.json(data);
  })
  .catch(err => resstatus(400).json('unable to work with API'))
  }
const handleImage = (req, res, db) => {
    const {id} = req.body;
    db('users').where('id', '=' , id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        response.json(entries[0]);
        
    })
    .catch(err => res.status(400).json('unable to get fucking entries'))
}

module.exports = {
    handleImage,
    handleApiCall
}