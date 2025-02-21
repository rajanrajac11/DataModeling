import mongoose from "mongoose";

const hospitalHourSchema = new mongoose.Schema({
  hour: {
    type: Number,
    required: true,
    dafault: 1,
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
      default: "MBBS",
    },
    experienceInYears: {
      type: Number,
      required: true,
      default: 0,
    },
    worksInHospitals: [
      {
        hospital: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Hospital",
        },
        hours: hospitalHourSchema,
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
