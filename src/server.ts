import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  try {
    await mongoose.connect(config.dbbl_url as string);

    app.listen(config.port, () => {
      console.log(`Blog Project app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
