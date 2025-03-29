const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "الاسم الكامل مطلوب"],
      trim: true,
      minlength: [5, "يجب أن يكون الاسم 5 أحرف على الأقل"],
      maxlength: [50, "يجب أن يكون الاسم أقل من 50 حرفًا"],
    },
    username: {
      type: String,
      required: [true, "اسم المستخدم مطلوب"],
      unique: true,
      trim: true,
      minlength: [5, "يجب أن يكون اسم المستخدم 5 أحرف على الأقل"],
      maxlength: [35, "يجب أن يكون اسم المستخدم أقل من 35 حرفًا"],
    },
    email: {
      type: String,
      required: [true, "البريد الإلكتروني مطلوب"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "يجب إدخال بريد إلكتروني صالح",
      ],
    },
    password: {
      type: String,
      required: [true, "كلمة المرور مطلوبة"],
      minlength: [8, "يجب أن تكون كلمة المرور 8 أحرف على الأقل"],
    },
    phoneNumber: {
      type: String,
      required: [true, "رقم الهاتف مطلوب"],
      unique: true,
      match: [/^\d{8,11}$/, "يجب أن يتراوح طول رقم الهاتف بين 8 و 11 رقمًا"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "تاريخ الميلاد مطلوب"],
    },
    gender: {
      type: String,
      enum: ["ذكر", "أنثى"],
      required: [true, "الجنس مطلوب"],
    },
    profileImage: {
      type: String,
      default: "default-profile.png",
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    role: {
      type: String,
      enum: ["student"],
      default: "student",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
