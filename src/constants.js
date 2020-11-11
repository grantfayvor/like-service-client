const dev = {
  API_ENDPOINT: "http://localhost:3000"
};

const prod = {
  API_ENDPOINT: "https://bikelane-89992883.uc.r.appspot.com"
};

export default process.env.NODE_ENV === "production" ? prod : dev;