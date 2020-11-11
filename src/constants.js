const dev = {
  API_ENDPOINT: "http://localhost:3000"
};

const prod = {
  API_ENDPOINT: "http://34.69.208.19"
};

export default process.env.NODE_ENV === "production" ? prod : dev;