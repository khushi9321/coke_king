const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const db = require("../db"); // Ensure this points to your database connection

// Update password endpoint
router.post("/updatepassword", async (req, res) => {
  const { name, email, currentPassword, newPassword } = req.body;

  // ✅ Validate required fields
  if (!name || !email || !currentPassword || !newPassword) {
    return res.status(400).json({
      success: false,
      message: "name, email, current password, and new password are required.",
    });
  }

  try {
    // ✅ Debugging: Log the incoming request
    console.log("🔍 Received update password request:", req.body);

    // ✅ Fetch the user from the database
    const userQuery = "SELECT * FROM users WHERE name = ? AND email = ?";
    const [rows] = await db.query(userQuery, [name, email]);

    // ✅ Debugging: Log database response
    console.log("📌 User lookup result:", rows);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    const user = rows[0]; // Get the user object

    // ✅ Verify the current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    console.log("🔑 Password match:", isMatch); // Debugging

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect.",
      });
    }

    // ✅ Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // ✅ Update password in database
    const updateQuery = "UPDATE users SET password = ? WHERE name = ? AND email = ?";
    const [result] = await db.query(updateQuery, [hashedPassword, name, email]);

    console.log("✅ Update result:", result); // Debugging

    if (result.affectedRows > 0) {
      return res.status(200).json({
        success: true,
        message: "Password updated successfully!",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Failed to update password.",
      });
    }
  } catch (error) {
    console.error("❌ Error fetching user:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching user",
      error: error.message,
    });
  }
});

module.exports = router;
