import React from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Lyford Mwanza",
      feedback:
        "Great Interiors Works exceeded my expectations with their attention to detail and exceptional customer service. From start to finish, they were professional, reliable, and truly passionate about creating a space that fit my personal style and needs. I would highly recommend their services to anyone looking for top-notch interior design.",
      company: "ABC Studios",
    },
    {
      name: "Themba Kateshi",
      feedback:
        "I was blown away by the transformation of my living room by Great Interiors Works. They took my vague ideas and turned them into a stunning reality, with a perfect balance of style and functionality. Their team was always prompt, courteous, and patient throughout the process. I cannot thank them enough for their hard work and dedication to making my dream home a reality.",
      company: "Easy Construction and Engineering",
    },
    {
      name: "Plight Mwamba",
      feedback:
        "Working with Great Interiors Works was an absolute pleasure. Their creativity and expertise in interior design are unparalleled. They took the time to understand my vision and seamlessly incorporated it into every aspect of my space. Their attention to detail and commitment to quality are truly remarkable. I would highly recommend them to anyone looking for exceptional interior design services.",
      company: "Plight Contractors",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className="bg-gray-200 rounded-lg shadow-lg p-8">
          <p className="mb-4 text-gray-800 font-jost">"{testimonial.feedback}"</p>
          <h3 className="font-bold mb-2 font-dm text-darkgrey">{testimonial.name}</h3>
          <p className="text-gray-600 font-jost">{testimonial.company}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
