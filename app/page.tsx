import React from "react";
import Scroll from "../components/Scroll";
import CardSection from "../components/CardSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      <div
        className="w-full h-[560px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#00000077]"></div>


        <div className="flex flex-col items-center justify-center h-full text-white relative z-10 px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-playfair">
            THE DAILY BITE
          </h1>
          <div className="flex flex-col sm:flex-row items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="font-roboto text-white font-medium px-6 py-3 rounded-full border-2 text-sm hover:bg-green-950 hover:text-white transition duration-200">
              ORDER ONLINE
            </button>
            <button className="font-roboto text-white font-medium px-6 py-3 rounded-full border-2 text-sm hover:bg-green-950 hover:text-white transition duration-200">
              RESERVATIONS
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start mt-20 mx-4 md:mx-10 bg-white">
        <h2 className="text-green-950 text-4xl md:text-7xl font-semibold font-roboto">
          ABOUT US
        </h2>
        <p className="text-green-950 text-lg md:text-xl font-roboto mt-4 max-w-3xl leading-relaxed">
          We are passionate about serving delicious, authentic Zimbabwean cuisine
          that brings people together. Our story began with a love for different
          flavours and a desire to share them with the world.
        </p>
        <button className="text-green-950 px-6 py-2 rounded-full border-2 mt-7 text-sm font-roboto hover:bg-green-950 hover:text-white">
          READ MORE
        </button>
      </div>

      <div className="flex flex-col md:flex-row w-full min-h-[550px] mt-16">
        <div
          className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
          style={{ backgroundImage: "url('/fried.jpg')" }}
        ></div>
        <div className="w-full md:w-1/2 bg-green-950 flex items-center justify-center p-6 md:p-10">
          <div className="text-center">
            <h1 className="text-white font-playfair text-3xl md:text-5xl">
              OUR MENU
            </h1>
            <p className="text-white font-roboto text-base md:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
              Our top menus include gourmet burgers, artisan pizzas, grilled
              salmon or fish tacos, Caesar or quinoa salads, pasta dishes like
              carbonara and penne arrabbiata, steak with garlic butter, Asian
              stir-fry bowls, sushi rolls, loaded fries or sweet potato fries,
              smoothie bowls and fresh juices, cheesecakes and chocolate lava
              cake, plus specialty coffees and craft cocktails.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white h-12 flex items-center">
        <Scroll text="The Daily Bite • " speed={10} />
      </div>

      <div className="flex flex-col md:flex-row w-full min-h-[550px]">
        <div className="w-full md:w-1/2 bg-green-950 flex items-center justify-center p-6 md:p-10">
          <div className="text-center">
            <h1 className="text-white font-playfair text-3xl md:text-6xl">
              DINING OPTIONS
            </h1>
            <p className="text-white font-roboto text-base md:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
              At The Daily Bite, we offer a variety of dining options to suit
              your lifestyle including dine-in, takeaway, and delivery. Enjoy
              outdoor seating, weekend brunch, late-night meals, or reserve a
              private dining experience. We also provide catering services, a
              buffet setup, and special menus for kids, vegans, and gluten-free
              diners.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-auto flex items-center justify-center">
          <video
            className="w-full h-full object-cover aspect-video"
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      <div className="mt-20 min-h-[500px] px-4 bg-white">
        <h2 className="text-3xl font-playfair font-semibold mb-6 ml-2 md:ml-4 text-green-950">
          OUR SPECIALS
        </h2>
        
        <CardSection />
        
      </div>
  <div className="mt-10 md:mt-0">
      <Footer  />
      </div>
    </div>
  );
}
