let axios = require("axios");
let https = require("https");

const agent = new https.Agent({
  rejectUnauthorized: false,
});
const getData = async () => {
  const req = await axios
    .get("https://api.instantwebtools.net/v1/airlines", { httpsAgent: agent })
    .then((res) => {
      let data = res.data.forEach((ele) => {
        if ((ele.country = " ‘Germany")) {
          console.log(ele);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
getData();
