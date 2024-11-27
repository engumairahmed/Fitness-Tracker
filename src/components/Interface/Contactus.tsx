import React from "react";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
import { MdEmail, MdMessage } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
export const Contactus = () => {
  return (
    <div>
      <div className="max-w-5xl max-lg:max-w-3xl mx-auto bg-white my-6 font-[sans-serif] mt-10">
        <div className="text-center px-6">
        <h2 className="md:text-5xl text-4xl font-bold mb-6 text-[#31C48D]">
            Contact Us
          </h2>
          <p className="text-sm text-gray-500 mt-4">
          Have questions about achieving your fitness goals? We’re here to help you every step of the way!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 items-start gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-12">
          <div className="bg-[#31C48D] rounded-lg p-6 h-full max-lg:order-1">
            <h2 className="text-2xl font-semibold text-white">
              Contact Information
            </h2>
            <p className="text-sm text-white mt-4">
              We're open for any suggestion or just to have a chat...
            </p>

            <ul className="mt-16 space-y-8">
              <li className="flex items-center">
                <MdMail className="text-white w-[16px] h-[16px]" />
                <a
                  href="javascript:void(0)"
                  className="text-white text-sm text-white ml-4"
                >
                  info@example.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-white w-[16px] h-[16px]" />
                <a
                  href="javascript:void(0)"
                  className="text-white text-sm text-white ml-4"
                >
                  +158 996 888
                </a>
              </li>
              <li className="flex items-center">
                <FaLocationDot className="text-white w-[16px] h-[16px]" />
                <a
                  href="javascript:void(0)"
                  className="text-white text-sm text-white ml-4"
                >
                  123 Street 256 House
                </a>
              </li>
            </ul>

            <ul className="flex flex-wrap gap-2 mt-16">
              <li className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white hover:bg-blue-800 transition">
                <FiFacebook className="text-[#67c3a2] w-[18px] h-[18px] " />
              </li>
              <li className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white hover:bg-[#0077b5] transition">
                <FiLinkedin className="text-[#67c3a2] w-[18px] h-[18px] " />
              </li>
              <li className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white transition hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500">
                <FiInstagram className="text-[#67c3a2] w-[18px] h-[18px] " />
              </li>
            </ul>
          </div>

          <div className="p-4 lg:col-span-2">
            <form>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b-2 border-[#67c3a2] focus:border-[#67c3a2] outline-none"
                  />
                <FaUser className="w-[18px] h-[18px] absolute right-2 text-[#67c3a2]"/>
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b-2 border-[#67c3a2] focus:border-[#67c3a2] outline-none"
                  />
                    <FaUser className="w-[18px] h-[18px] absolute right-2 text-[#67c3a2]"/>
                </div>

                <div className="relative flex items-center">
                  <input
                    type="number"
                    placeholder="Phone No."
                    className="px-2 py-3 bg-white text-black w-full text-sm text-gray-800 border-b-2 border-[#67c3a2] focus:border-[#67c3a2] outline-none"
                  />
                   <FaPhoneAlt className="w-[18px] h-[18px] absolute right-2 text-[#67c3a2]" />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-2 py-3 bg-white text-black w-full text-sm text-gray-800 border-b-2 border-[#67c3a2] focus:border-[#67c3a2] outline-none"
                  />
                <MdEmail className="w-[19px] h-[19px] absolute right-2 text-[#67c3a2]"/>
                </div>

                <div className="relative flex items-center sm:col-span-2">
                  <textarea
                    placeholder="Write Message"
                    className="px-2 pt-3 bg-white text-black w-full text-sm text-gray-800 border-b-2 border-[#67c3a2] focus:border-[#67c3a2] outline-none"
                  ></textarea>
                  <MdMessage className="w-[18px] h-[18px] absolute right-2 text-[#67c3a2]" />
                </div>

                <div className="col-span-full">
                  <h6 className="text-sm text-gray-800">Select Subject</h6>
                  <div className="flex max-lg:flex-col gap-6 mt-4">
                    <div className="flex items-center">
                      <input
                        id="radio1"
                        type="radio"
                        name="value1"
                        className="hidden peer"
                        checked
                      />
                      <label
                        htmlFor="radio1"
                        className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#31c48d] rounded-full overflow-hidden"
                      >
                        <span className="border-[4px] border-[#67c3a2] rounded-full w-full h-full"></span>
                      </label>
                      <p className="text-sm text-gray-500 ml-4">
                        General Inquiry
                      </p>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="radio2"
                        type="radio"
                        name="value1"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="radio2"
                        className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#31c48d] rounded-full overflow-hidden"
                      >
                        <span className="border-[4px] border-[#67c3a2] rounded-full w-full h-full"></span>
                      </label>
                      <p className="text-sm text-gray-500 ml-4">
                        Technical Support
                      </p>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="radio3"
                        type="radio"
                        name="value1"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="radio3"
                        className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#31c48d] rounded-full overflow-hidden"
                      >
                        <span className="border-[4px] border-[#67c3a2] rounded-full w-full h-full"></span>
                      </label>
                      <p className="text-sm text-gray-500 ml-4">
                        Webapplication Feedback
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide text-white bg-[#31c48d] hover:bg-[#67C3A2]"
              >
              <RiSendPlaneFill className="text-white w-[16px] h-[16px] mr-2"/>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
