exports.addNumbers = (req, res) => {
  const { num1, num2 } = req.body;
  let sum = num1 + num2;

  return res.status(200).json({
    status: "success",
    message: "The sum of given two numbers",
    sum: sum,
  });
};

exports.subNumbers = (req, res) => {
  const { num1, num2 } = req.body;
  let difference = num1 - num2;

  return res.status(200).json({
    status: "success",
    message: "the difference of given two number",
    difference: difference,
  });
};

exports.mulNumbers = (req, res) => {
  const { num1, num2 } = req.body;
  let result = num1 * num2;

  return res.status(200).json({
    status: "success",
    message: "The product of given numbers",
    result: result,
  });
};

exports.divNumbers = (req, res) => {
  const { num1, num2 } = req.body;

  if (num2 == 0) {
    return res.status(400).json({
      status: "failure",
      message: "Cannot divide by zero",
    });
  }
  let div = num1 / num2;

  return res.status(200).json({
    status: "success",
    message: "The division of given two number",
    result: div,
  });
};
