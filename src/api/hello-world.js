const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};




const sample = (req, res) => {
  if (req.method === `POST`) {
console.log(req.body)
    res.send(`I am POST`)
  } else {
    // Handle other methods or return error
  
  res.status(200).json(v)
}}

export default sample
