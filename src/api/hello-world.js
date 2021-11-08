const sample = (req, res) => {

  res.status(200).json(JSON.stringify(req,null,4))
}

export default sample
