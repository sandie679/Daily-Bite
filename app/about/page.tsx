import React from "react";
import Footer from "@/components/Footer";
import { GiCookingPot } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import Image from "next/image";
import TeamSection from "@/components/team";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="w-full h-[560px] bg-cover bg-center relative"
        style={{ backgroundImage: "url(/meat.jpg)" }}
      >
        <div className="absolute inset-0 bg-[#0000008f] bg-opacity-50"></div>
        <div className="flex flex-col items-center justify-center h-full text-white relative z-10">
          <h2 className="text-4xl md:text-6xl text-white font-playfair font-semibold">
            BEHIND THE DISHES
          </h2>
          <p className="text-base md:text-lg text-white font-roboto mt-4 text-center px-4">
            Every dish tells a story. Behind the flavors is a passion for fresh{" "}
            <br className="hidden md:block" />
            ingredients, creativity, and love for good food. Step into our{" "}
            <br className="hidden md:block" />
            kitchen and discover what makes each plate special.”
          </p>
        </div>
      </div>

      <div className="mt-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-green-950 font-playfair">
              Why We Are Best?
            </h2>
            <p className="text-green-950 font-roboto">
              At Daily Bite Restaurant, we believe in more than just serving
              food we serve experiences. Our menu is crafted with love using the
              freshest local ingredients, blending traditional flavors with a
              modern twist. Whether you are grabbing a quick lunch or enjoying a
              cozy dinner, our warm atmosphere, exceptional service, and
              consistently delicious meals make every visit memorable.
            </p>

            <div className="flex items-start gap-4 mt-10">
              <div className="text-red-500 text-3xl">
                <GiCookingPot className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-950 font-roboto">
                  Crafted with Passion
                </h4>
                <p className="text-green-950 font-roboto">
                  At Daily Bite, From our sizzling burgers to our fresh salads,
                  we bring quality and flavor to your plate—every single time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mt-10">
              <div className="text-red-500 text-3xl">
                <FaUtensils />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-950 font-roboto">
                  Authentic Taste, Modern Twist
                </h4>
                <p className="text-green-950 font-roboto">
                  We mix traditional cooking with modern flair to create unique
                  dishes you will not find anywhere else.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mt-10">
              <div className="text-red-500 text-3xl">
                <MdDeliveryDining />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-950 font-roboto">
                  Fast, Fresh & Friendly
                </h4>
                <p className="text-green-950 font-roboto">
                  Whether you are dining in or grabbing takeout, our team is
                  dedicated to giving you quick service, fresh meals, and a warm
                  smile every time you visit.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full">
            <div className="flex flex-col items-center gap-6 lg:hidden">
              <Image
                src="/eat.jpg"
                alt=""
                width={350}
                height={150}
                className="
                 object-fill rounded-lg"
              />

              <video
                className="w-full h-[300px] object-cover rounded-lg border-4 border-white shadow-lg"
                src="/chick.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <div className="relative w-full h-full hidden lg:flex justify-center">
              <div className="w-4/5 relative z-10">
                <Image
                  src="/eat.jpg"
                  alt=""
                  width={350}
                  height={150}
                  className="  object-fill rounded-lg"
                />
              </div>

              <div className="absolute top-40 left-[300px] w-3/5 z-20 border-4 border-white rounded-lg shadow-lg">
                <video
                  className="w-full h-[400px] object-cover rounded-lg"
                  src="/chick.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TeamSection/>

      
      <div className="mt-10 md:mt-28">
        <Footer />
      </div>
    </div>
  );
}
