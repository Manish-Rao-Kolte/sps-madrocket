import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { gsap } from "gsap";

// Validation schema
const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  message: z.string().nonempty({ message: "Message is required" }),
});

const ContactUs = () => {
  const formRef = useRef(null);
  const mapRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    reset();
    alert("Form submitted, we will contact you soon!");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "center 50%",
          markers: false,
        },
      }
    );

    gsap.fromTo(
      mapRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
          end: "center 50%",
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className='w-full min-h-[100vh] bg-gradient-to-br from-[#e8f4f8] to-[#d0e5f0] flex flex-col items-center justify-center'>
      <div className='container mx-auto px-6 py-16 lg:py-24'>
        <h2 className='text-4xl font-bold text-center text-[#00796b] mb-8'>
          Contact Us
        </h2>
        <div className='flex flex-col md:flex-row items-start justify-center gap-8'>
          <form
            ref={formRef}
            className='bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='mb-4'>
              <label
                className='block text-[#00796b] text-sm font-bold mb-2'
                htmlFor='name'
              >
                Name
              </label>
              <input
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00796b] ${
                  errors.name ? "border-red-500" : ""
                }`}
                type='text'
                id='name'
                {...register("name")}
                placeholder='Your name'
              />
              {errors.name && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className='mb-4'>
              <label
                className='block text-[#00796b] text-sm font-bold mb-2'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00796b] ${
                  errors.email ? "border-red-500" : ""
                }`}
                type='email'
                id='email'
                {...register("email")}
                placeholder='Your email'
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className='mb-4'>
              <label
                className='block text-[#00796b] text-sm font-bold mb-2'
                htmlFor='message'
              >
                Message
              </label>
              <textarea
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00796b] ${
                  errors.message ? "border-red-500" : ""
                }`}
                id='message'
                {...register("message")}
                rows='4'
                placeholder='Your message'
              ></textarea>
              {errors.message && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.message.message}
                </p>
              )}
            </div>
            <div className='text-center'>
              <button
                className='bg-[#00796b] hover:bg-[#004d40] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00796b]'
                type='submit'
              >
                Send Message
              </button>
            </div>
          </form>

          <div
            ref={mapRef}
            className='bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2'
          >
            <h3 className='text-3xl font-bold text-center text-[#00796b] mb-4'>
              Our Location
            </h3>
            <p className='text-center text-lg mb-4'>
              Springdale Public School <br />
              123 Education Lane, Cityville, State, ZIP Code
            </p>
            <p className='text-center text-lg mb-4'>
              <a href='tel:+11234567890' className='text-[#00796b]'>
                +1 (123) 456-7890
              </a>{" "}
              <br />
              <a href='mailto:info@springdale.edu' className='text-[#00796b]'>
                info@springdale.edu
              </a>
            </p>
            <div className='w-full h-64 rounded-lg overflow-hidden'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097316!2d144.95373631531676!3d-37.81720997975133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779dcd3e0b5b7e!2s123+Education+Lane%2C+Cityville%2C+State%2C+ZIP+Code!5e0!3m2!1sen!2s!4v1532586893424'
                width='100%'
                height='100%'
                frameBorder='0'
                allowFullScreen=''
                aria-hidden='false'
                tabIndex='0'
                title='School Location'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
