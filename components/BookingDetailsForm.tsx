"use client";

import { useState } from "react";

interface BookingFormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  selectedService: string;
  selectedGuide: string;
  sessionType: "online" | "offline" | "";
  preferredDateTime: string;
  concern: string;
}

export default function BookingDetailsForm() {
  const [form, setForm] = useState<BookingFormData>({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    selectedService: "",
    selectedGuide: "",
    sessionType: "",
    preferredDateTime: "",
    concern: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="w-full md:max-w-3xl lg:max-w-4xl  xl:max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <h2 className="text-xl md:text-2xl text-[#2f2a25] mb-1">
        Step 2: Enter Your Details
      </h2>
      <p className="text-sm md:text-lg text-[#736345]/70 mb-6">
        Please fill in your details to proceed with booking
      </p>

      {/* Card */}
      <div className="bg-[#e9dac9] rounded-3xl px-3 py-8">
        <div className="flex flex-col gap-5">

          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#736345] font-medium">
              Full Name*
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full bg-white rounded-lg px-3 py-2 text-sm text-gray-700 outline-none border border-transparent focus:border-[#736345]/40"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#736345] font-medium">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white rounded-lg px-3 py-2 text-sm text-gray-700 outline-none border border-transparent focus:border-[#736345]/40"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#736345] font-medium">
                Phone Number*
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className="w-14 bg-white rounded-lg px-2 py-2 text-sm text-gray-700 outline-none border border-transparent focus:border-[#736345]/40 text-center"
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="flex-1 bg-white rounded-lg px-3 py-2 text-sm text-gray-700 outline-none border border-transparent focus:border-[#736345]/40"
                />
              </div>
            </div>
          </div>

          {/* Selected Service + Guide */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#736345] font-medium">
                Selected Service
              </label>
              <input
                type="text"
                name="selectedService"
                value={form.selectedService}
                onChange={handleChange}
                readOnly
                className="w-full bg-white rounded-lg px-3 py-2 text-sm text-gray-700 outline-none border border-transparent cursor-default"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#736345] font-medium">
                Selected Guide
              </label>
              <input
                type="text"
                name="selectedGuide"
                value={form.selectedGuide}
                onChange={handleChange}
                readOnly
                className="w-full bg-white rounded-lg px-3 py-2 text-sm text-gray-700 outline-none border border-transparent cursor-default"
              />
            </div>
          </div>

          {/* Session Type */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#736345] font-medium">
              Session Type*
            </label>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
              <label className="flex items-start md:items-center gap-2 text-sm text-[#736345] cursor-pointer">
                <input
                  type="radio"
                  name="sessionType"
                  value="online"
                  checked={form.sessionType === "online"}
                  onChange={handleChange}
                  className="accent-[#736345]"
                />
                Online (Zoom / Google Meet)
              </label>
              <label className="flex items-start md:items-center gap-2 text-sm text-[#736345] cursor-pointer">
                <input
                  type="radio"
                  name="sessionType"
                  value="offline"
                  checked={form.sessionType === "offline"}
                  onChange={handleChange}
                  className="accent-[#736345]"
                />
                Offline (Studio)
              </label>
            </div>
          </div>

          {/* Preferred Time & Date */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#736345] font-medium">
              Preffered Time & Date
            </label>
            <input
              type="datetime-local"
              name="preferredDateTime"
              value={form.preferredDateTime}
              onChange={handleChange}
              className="w-full bg-white rounded-lg px-3 py-2 text-sm text-gray-700 outline-none border border-transparent focus:border-[#736345]/40"
            />
          </div>

          {/* Concern / Focus Area */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#736345] font-medium">
              Concern / Focus Area*
            </label>
            <textarea
              name="concern"
              value={form.concern}
              onChange={handleChange}
              rows={4}
              className="w-full bg-white rounded-lg px-3 py-2 text-sm text-gray-700 outline-none border border-transparent focus:border-[#736345]/40 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-[#3f5c4a] hover:bg-[#162d22] text-white font-medium py-3 rounded-xl text-sm transition-colors duration-200"
          >
            Submit
          </button>

          <p className="text-center text-xs text-[#736345]/60">
            You'll be redirected to Payment securely
          </p>
        </div>
      </div>
    </div>
  );
}