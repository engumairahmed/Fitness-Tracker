import { MdMail } from "react-icons/md";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
import { MdEmail, MdMessage } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
export const Contactus = () => {
  const URL = import.meta.env.VITE_SERVER_URL;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const schema = Yup.object({
    firstname: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters long"),

    lastname: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters long"),

    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 11 digits")
      .required("Phone number is required"),

    email: Yup.string()
      .required("Email is required")
      .matches(emailRegex, "Invalid email address"),

    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters long"),

    subject: Yup.string().required("please select the subject"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      message: "",
      subject: "",
    },
    validationSchema: schema,
    onSubmit: (values, {resetForm }) => {
      axios.post(`${URL}/contact-us`, {
        ...values,
      }).then(() => {
        toast.success("Message Sent Successfully");
        setTimeout(() => {
        }, 1000);
        resetForm();
      })
      .catch((err) => {
        console.error("Error submitting the form:", err);
        toast.error("Failed to Sent the Message");
      })
    },
  });
  return (
    <div>
      <div className="max-w-5xl max-lg:max-w-3xl mx-auto bg-white my-6 font-[sans-serif] mt-10">
        <div className="text-center px-6">
          <h2 className="md:text-5xl text-4xl font-bold mb-6 text-[#31C48D]">
            Contact Us
          </h2>
          <p className="text-sm text-gray-500 mt-4">
            Have questions about achieving your fitness goals? We’re here to
            help you every step of the way!
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
                  className="text-white text-sm ml-4"
                >
                  info@example.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-white w-[16px] h-[16px]" />
                <a
                  href="javascript:void(0)"
                  className="text-white text-sm ml-4"
                >
                  +158 996 888
                </a>
              </li>
              <li className="flex items-center">
                <FaLocationDot className="text-white w-[16px] h-[16px]" />
                <a
                  href="javascript:void(0)"
                  className="text-white text-sm ml-4"
                >
                  123 Street 256 House
                </a>
              </li>
            </ul>

            <ul className="flex flex-wrap gap-2 mt-16">
              <Link to={"http://facebook.com"}  className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white hover:bg-blue-900 transition">
                <FiFacebook className="text-[#67c3a2] w-[18px] h-[18px] " />
              </Link>
              <Link to={"http://linkedin.com"} className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white hover:bg-[#0077b5] transition">
                <FiLinkedin className="text-[#67c3a2] w-[18px] h-[18px] " />
              </Link>
              <Link to={"http://instagram.com"} className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white transition hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500">
                <FiInstagram className="text-[#67c3a2] w-[18px] h-[18px] " />
              </Link>
            </ul>
          </div>
         
         
          <div className="p-4 lg:col-span-2">
            <form onSubmit={formik.handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="relative flex flex-col items-center">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b-2 border-[#67c3a2] focus:border-[#67c3a2] outline-none"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FaUser className="w-[18px] h-[18px] absolute right-2 top-3 text-[#67c3a2]" />
                  {formik.touched.firstname && formik.errors.firstname && (
                    <div className="text-red-500 text-xs text-right">
                      {formik.errors.firstname}
                    </div>
                  )}
                </div>

                <div className="relative flex flex-col items-center">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b-2 border-[#67c3a2] focus:border-[#67c3a2] outline-none"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FaUser className="w-[18px] h-[18px] absolute right-2 top-3 text-[#67c3a2]" />
                  {formik.touched.lastname && formik.errors.lastname && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.lastname}
                    </div>
                  )}
                </div>

                <div className="relative flex flex-col items-center">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone No."
                    className="px-2 py-3 bg-white text-black w-full text-sm  border-b-2 border-[#67c3a2] focus:border-[#67c3a2] outline-none"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FaPhoneAlt className="w-[18px] h-[18px] absolute right-2 top-3 text-[#67c3a2]" />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.phone}
                    </div>
                  )}
                </div>

                <div className="relative flex flex-col items-center">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="px-2 py-3 bg-white text-black w-full text-sm  border-b-2 border-[#67c3a2] focus:border-[#67c3a2] outline-none"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <MdEmail className="w-[19px] h-[19px] absolute right-2 top-3 text-[#67c3a2]" />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                <div className="relative flex flex-col items-center sm:col-span-2">
                  <textarea
                    placeholder="Write Message"
                    name="message"
                    className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 border-[#67c3a2] focus:border-[#67c3a2] outline-none"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <MdMessage className="w-[18px] h-[18px] absolute right-2 top-3 text-[#67c3a2]" />
                  {formik.touched.message && formik.errors.message && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.message}
                    </div>
                  )}
                </div>

                <div className="col-span-full flex flex-col">
                  <h6 className="text-sm text-gray-400">Select Subject</h6>
                  <div className="flex max-lg:flex-col gap-6 mt-4">
                    <div className="flex items-center">
                      <input
                        id="radio1"
                        type="radio"
                        name="subject"
                        value="General Inquiry" // Set the value of this option
                        className="hidden peer"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.subject === "General Inquiry"}
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
                        name="subject"
                        value="Technical Support" // Set the value of this option
                        className="hidden peer"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.subject === "Technical Support"}
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
                        name="subject"
                        value="Webapplication Feedback" // Set the value of this option
                        className="hidden peer"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={
                          formik.values.subject === "Webapplication Feedback"
                        }
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

                  {formik.touched.subject && formik.errors.subject && (
                    <div className="text-red-500 text-xs mt-2 text-center">
                      {formik.errors.subject}
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide text-white bg-[#31c48d] hover:bg-[#67C3A2]"
              >
                <RiSendPlaneFill className="text-white w-[16px] h-[16px] mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
    
  );
};
