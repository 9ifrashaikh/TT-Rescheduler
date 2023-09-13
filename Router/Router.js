import express from "express";
import * as auth_control from "../Controllers/auth.js";
import * as admin_control from "../Controllers/admin.js";
import { checkAdmin } from "../Controllers/authMiddleware.js";
import * as prof_control from "../Controllers/faculty.js";
import * as api from "../Controllers/api.js";

const router = express.Router();

router.get("/", auth_control.home);

router.get("/login-prof", auth_control.profLoginGet);
router.post("/login-prof", auth_control.profLoginPost);

router.get("/signup-admin", auth_control.adminSignupGet);
router.post("/signup-admin", auth_control.adminSignupPost);

router.get("/login-admin", auth_control.adminLoginGet);
router.post("/login-admin", auth_control.adminLoginPost);

// should prob create different routes.js file
// for /admin and /faculty
router.get("/admin/dashboard", checkAdmin, admin_control.adminDashGet);
router.get("/prof/dashboard", auth_control.profDashBoardGet);
router.post(
  "/admin/dashboard/createFaculty",
  checkAdmin,
  admin_control.createFacultyPost
);

router.get("/faculty/dashboard", prof_control.profDashGet);

router.get("/admin/dashboard/:id", admin_control.editTimetabeGet);
router.post("/admin/dashboard/:id", admin_control.saveTimetablePost);

// api to get faculty objects
router.get("/api/get/faculty", api.getFaculty);

export default router;
