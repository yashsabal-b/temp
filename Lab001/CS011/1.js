let axios = require("axios");

const getData = () => {
  axios
    .get("https://reqres.in/api/users?page=2")
    .then((res) => {
      let data = res.data.data.forEach((ele) => {
        if (ele.id % 2 == 0) {
          console.log(ele.first_name);
          console.log(ele.last_name);
        }
      });
    })
    .catch((err) => {
      console.log("Error");
    });
};
getData();
