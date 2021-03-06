exports.addNumbers = (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== "string" && typeof num2 !== "string") {
    let sum = num1 + num2;
    if (sum >= 1000000) {
      return res.status(200).json({
        status: "failure",
        message: "Overflow",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "the sum of given two numbers",
      sum: sum,
    });
  } else {
    return res.status(200).json({
      status: "failure",
      message: "Invalid data types",
    });
  }
};

exports.subNumbers = (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== "string" && typeof num2 !== "string") {
    let difference = num1 - num2;
    if (Math.abs(difference) > 1000000) {
      return res.status(200).json({
        status: "failure",
        message: "Underflow",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "the difference of given two numbers",
      difference: difference,
    });
  } else {
    return res.status(200).json({
      status: "failure",
      message: "Invalid data types",
    });
  }
};

exports.mulNumbers = (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== "string" && typeof num2 !== "string") {
    let result = num1 * num2;

    if (result >= 1000000) {
      return res.status(200).json({
        status: "failure",
        message: "Overflow",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "The product of given numbers",
      result: result,
    });
  } else {
    return res.status(200).json({
      status: "failure",
      message: "Invalid data types",
    });
  }
};

exports.divNumbers = (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== "string" && typeof num2 !== "string") {
    if (num2 == 0) {
      return res.status(200).json({
        status: "failure",
        message: "Cannot divide by zero",
      });
    }
    let div = num1 / num2;

    return res.status(200).json({
      status: "success",
      message: "The division of given numbers",
      result: div,
    });
  } else {
    return res.status(200).json({
      status: "failure",
      message: "Invalid data types",
    });
  }
};
