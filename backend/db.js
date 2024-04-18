const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://anuradha:12345@atlascluster.5svssha.mongodb.net/steadofoodsd?retryWrites=true&w=majority&appName=AtlasCluster";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    // console.log("Connected!");
    let fetched_data = mongoose.connection.db.collection("food_items");
    let data = await fetched_data.find({}).toArray();
    let fetched_catdata = mongoose.connection.db.collection("food_category");
    let catdata = await fetched_catdata.find({}).toArray();
    console.log("data");
    console.log(catdata);
    global.food_items=data;
    global.food_Category=catdata;
    console.log(global.food_items)
  } catch (error) {
    console.log("err: ", error);
  }
};

module.exports = mongoDB;
