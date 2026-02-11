const express = require("express");
const router = express.Router();

const adminGuard = require("../middlewares/admin.middleware");
const {
  getAllInquiries,
  exportInquiries,
} = require("../controllers/admin.controller");

router.get("/inquiries", adminGuard, getAllInquiries);
router.get("/inquiries/export", adminGuard, exportInquiries);

module.exports = router;
