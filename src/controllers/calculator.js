exports.addNumbers = (req, res) => {
  const { num1, num2 } = req.body;
  let sum = num1 + num2;

  return res.status(200).json({
    message: "The sum of given two number",
    sum: sum,
  });
};

exports.subNumbers = (req, res) => {
  const { num1, num2 } = req.body;
  let sub = num1 - num2;

  return res.status(200).json({
    message: "The difference of given two number",
    result: sub,
  });
};

exports.mulNumbers = (req, res) => {
  const { num1, num2 } = req.body;
  let prod = num1 * num2;

  return res.status(200).json({
    message: "The product of given two number",
    result: prod,
  });
};

exports.divNumbers = (req, res) => {
  const { num1, num2 } = req.body;

  if (num2 == 0) {
    return res.status(400).json({
      message: "The divisor cannot be zero",
    });
  }
  let div = num1 / num2;

  return res.status(200).json({
    message: "The division of given two number",
    result: div,
  });
};
