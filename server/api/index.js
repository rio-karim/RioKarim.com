module.exports = (api) => {

  api.post('/api/contact', (req, res) => {
    res.json({
      status: 200
    })
  })
}
