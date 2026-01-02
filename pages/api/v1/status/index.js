function status(request, response) {
  response.status(200).json({ message: "Gabi é uma pessoa sensacional!" });
}

export default status;
