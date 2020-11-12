const dev = {
  API_ENDPOINT: "http://localhost:3000"
};

const prod = {
  API_ENDPOINT: "https://like-service-295414.uc.r.appspot.com"
};

export default process.env.NODE_ENV === "production" ? prod : dev;