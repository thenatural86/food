import axios from "axios"

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Nxip9tMenYuuUFDrTZWUcq9FRd_M7EZhYCt0PuywdJuxgUvN3upJW-1C7SCrw0mvCjMKd5YcTCIWOl3wFuXQUmbTjRetiB_7zv6BxByaQI7L6Liyq-MNnS84XIw4XnYx"
  }
})
