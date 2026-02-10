const Inquiry = require("../models/Inquiry.model");

async function createInquiry(req, res) {
  try {
    const { fullName, phone, email, city, state, message } = req.body;

    if (!fullName || !phone || !email || !city || !state) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const inquiry = await Inquiry.create({
      fullName,
      phone,
      email,
      city,
      state,
      message,
    });

    res.status(201).json({
      message: "Inquiry submitted successfully",
      id: inquiry._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  createInquiry,
};
