const Inquiry = require("../models/Inquiry.model");
const ExcelJS = require("exceljs");

async function getAllInquiries(req, res) {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json(inquiries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

async function exportInquiries(req, res) {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Inquiries");

    sheet.columns = [
      { header: "Full Name", key: "fullName", width: 20 },
      { header: "Phone", key: "phone", width: 15 },
      { header: "Email", key: "email", width: 25 },
      { header: "City", key: "city", width: 15 },
      { header: "State", key: "state", width: 15 },
      { header: "Date", key: "createdAt", width: 20 },
    ];

    inquiries.forEach((inq) => {
      sheet.addRow({
        fullName: inq.fullName,
        phone: inq.phone,
        email: inq.email,
        city: inq.city,
        state: inq.state,
        createdAt: inq.createdAt,
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=inquiries.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Excel export failed" });
  }
}

module.exports = {
  getAllInquiries,
  exportInquiries,
};
