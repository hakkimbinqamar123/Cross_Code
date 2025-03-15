const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log("🛠 Checking environment variables...");
    console.log("MONGO_URI:", process.env.MONGO_CONNECTION ? "✔ Available" : "❌ Not Found");

    if (!process.env.MONGO_CONNECTION) {
      console.error("❌ MONGO_URI is undefined! Check Vercel env variables.");
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
