import mongoose from "mongoose";

export default async () => {
  try {
    mongoose.set("strictQuery", false);
    console.log(process.env.DB_URI )
    const db = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected: MongoDb connected with ${db.connection.host}`);
  } catch (error) {
    // console.error(`ERROR: Not able to connect database due to ${error}`);
    process.exit(1);
  }
};
