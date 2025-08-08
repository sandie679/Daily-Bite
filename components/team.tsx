import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sandra Sibanda",
    role: "CEO",
    image: "/ceo.jpg",
    Bio: "Sandra Sibanda, CEO of The Daily Bite, is dedicated to creating unforgettable dining experiences through great food and warm hospitality.",
  },
  {
    name: "Charlotte Ncube",
    role: "Manager",
    image: "/manag.jpg",
    Bio: "Charlotte, our dedicated Manager, leads with professionalism, ensuring every guest enjoys exceptional service at Daily Bite.",
  },
  {
    name: "Helen Dube",
    role: "Head Chef",
    image: "/head.jpg",
    Bio: "Helen, our talented Head Chef, crafts every dish with passion and creativity, bringing fresh flavors and unforgettable meals to Daily Bite.",
  },
  {
    name: "Approved Mweemba",
    role: "Sous Chef",
    image: "/sou.jpg",
    Bio: "Approved, our skilled Sous Chef, supports the kitchen with expertise and dedication, helping deliver consistently delicious dishes at Daily Bite.",
  },
];

export default function TeamSection() {
  return (
    <div className=" mt-32 px-4 text-center text-green-950">
      <h2 className="text-3xl font-bold mb-8 font-playfair">Meet Our Team</h2>
      <div className="grid grid-cols-1 gap-y-14 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">

        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 mx-2 sm:mx-0    "
          >
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold font-roboto">{member.name}</h3>
            <p className="text-red-500 font-medium font-roboto">
              {member.role}
            </p>
            <p className="text-green-950 mt-2 text-sm font-roboto ">
              {member.Bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
