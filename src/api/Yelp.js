import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer GO9mQI7s3CBc2wuJiFvKThW-ZK7068MMuuJ_qG1Fvzs0F0vrmWhAfHduJia-68vycTXE663HFhg3x3dpPp7aMJgQX_BQ6lwcknpnoO0JHgUFctl5-9hHk2qbCAZFY3Yx",
  },
});
