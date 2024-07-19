import React, { useState } from "react";
import Buttons from "../../assets/Contact/Button_Controls.svg";
import Vector from "../../assets/Vector.svg";
import Frame from "../../assets/Contact/Frame.svg";
import Github from "../../assets/Contact/Github.svg";
import LinkedIn from "../../assets/Contact/LinkedIn.svg";
import Twitter from "../../assets/Contact/Twitter.svg";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
    to_name: "Srinivasan",
    from_name: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      to_name: formData.to_name,
      from_name: formData.name,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_l8hwoab",
        "template_2v3ykau",
        templateParams,
        "TvGK3F0-DTgbMCHz5"
      )
      .then(
        (response) => {
          setSending(false);
          setSuccess(true);
          setFormData({
            email: "",
            name: "",
            subject: "",
            message: "",
            to_name: "Srinivasan",
            from_name: "",
          });
          console.log("Success:", response);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setSuccess(false);
              setFadeOut(false);
            }, 1000); // Allow time for fade-out animation
          }, 4000); // Show message for 4 seconds, then start fade-out
        },
        (err) => {
          setSending(false);
          setError("Failed to send message. Please try again.");
          console.error("Error:", err);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setError("");
              setFadeOut(false);
            }, 1000); // Allow time for fade-out animation
          }, 4000); // Show message for 4 seconds, then start fade-out
        }
      );
  };

  return (
    <>
      <div className="mb-[80px] relative scroll-smooth focus:scroll-auto">
        <div className="mx-auto w-[68%] mt-[15vh]">
          <p className="inter-font-style-1 text-white items-center flex gap-[15px] text-[80px]">
            Get in touch
          </p>
          <p className="text-neutral-600 w-[739px] font-medium text-[21px] leading-9 -mt-[10px]">
            Let’s build something awesome.
          </p>
        </div>
        <div className="h-[0.5px] w-full mt-14 bg-neutral-600"></div>
        <div className="mx-auto pt-[60px] w-[68%]">
          <div className="w-full bg-neutral-900 rounded-2xl h-[650px]">
            <div className="flex items-center justify-between">
              <img src={Buttons} alt="" className="p-4" />
              <p className="text-white font-medium text-[13px]">New message</p>
              <img
                src={Buttons}
                alt=""
                className="p-4 opacity-0 -z-50 select-none"
              />
            </div>
            <div className="w-full h-[0.5px] -mt-1 bg-neutral-800"></div>
            <form onSubmit={handleSubmit} className="px-9 py-4">
              <div className="my-1">
                <label className="text-white font-medium text-[15px]">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Enter your email address"
                  required
                />
                <div className="w-full h-[1px] mt-3 bg-neutral-700"></div>
              </div>
              <div className="my-4">
                <label className="text-white font-medium text-[15px]">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
                <div className="w-full h-[1px] mt-3 bg-neutral-700"></div>
              </div>
              <div className="my-4">
                <label className="text-white font-medium text-[15px]">
                  Subject:
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-transparent text-neutral-400 text-[15px] w-[89%] ml-2 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Enter subject"
                  required
                />
                <div className="w-full h-[1px] mt-3 bg-neutral-700"></div>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  className="textarea text-neutral-400 p-4 w-full h-[300px] bg-neutral-950 mt-4 rounded-xl border-0 focus:ring-0 focus:outline-none"
                  required
                />
              </div>
              <div className="flex gap-4 mt-5 justify-end mr-5 items-center">
                {success && (
                  <p className={`text-green-500 ${fadeOut ? "fade-out" : ""}`}>
                    Message sent successfully!
                  </p>
                )}
                {error && (
                  <p className={`text-red-500 ${fadeOut ? "fade-out" : ""}`}>
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="shadow-inner flex gap-2.5 items-center text-[16px] bg-neutral-900 shadow-neutral-700 rounded-lg font-medium text-white py-4 px-7"
                  disabled={sending}
                >
                  {sending ? (
                    "Sending..."
                  ) : (
                    <>
                      <img src={Vector} alt="" className="w-[20px]" /> Get in
                      touch
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="flex w-[200px] mt-10 mb-[-20px] items-center opacity-75 justify-between mx-auto">
            <Link
              target="_blank"
              to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqVNNXjRVQcSgJwJZbBWwchqwHsxQGjgLGPbtxrRcNXZjXgXqJsHLHdcBvdSlplzJGlWKg"
            >
              <img src={Frame} alt="" className="w-[26px] h-[26px]" />{" "}
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/srinivasan-p-32583127a/"
            >
              <img src={LinkedIn} alt="" className="w-[26px] h-[26px]" />{" "}
            </Link>
            <Link target="_blank" to="https://github.com/Srini-10">
              <img src={Github} alt="" className="w-[26px] h-[26px]" />
            </Link>
            <Link target="_blank" to="https://x.com/SrinivasanP1018">
              <img src={Twitter} alt="" className="w-[26px] h-[26px]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
