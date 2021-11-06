const fs = require("fs");
const root = () => {
  const { DEPLOY_ENV } = process.env;
  console.log(DEPLOY_ENV);

  fs.copyFile(`serverless.${DEPLOY_ENV}.yml`, "../serverless.yml", function(
    err
  ) {
    if (err) throw err;
    console.log("File Renamed!");
  });
};

root();
