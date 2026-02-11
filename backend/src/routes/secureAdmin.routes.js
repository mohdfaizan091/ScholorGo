const router = require("express").Router();
const { adminLogin } = require("../controllers/secureAdmin.controller");
const verifyAdminJWT = require("../middlewares/adminAuthJWT");
const { exportInquiries, getAllInquiries } = require("../controllers/admin.controller");

// Login
router.post("/login", adminLogin);

// Protected routes
router.get("/inquiries", verifyAdminJWT, getAllInquiries);
router.get("/inquiries/export", verifyAdminJWT, exportInquiries);

module.exports = router;
