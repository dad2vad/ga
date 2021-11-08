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
var v = JSON.stringify(req, getCircularReplacer(),4)
console.log(v)
  res.status(200).json(v)
}

export default sample
