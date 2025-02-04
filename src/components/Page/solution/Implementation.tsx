import React from 'react';
import Image from 'next/image';
const Implementation = () => {
  return (
    <div className="h-full  mx-auto">
      <div className=" text-white">
        <div className=" ">
          <div className="gap-5  flex items-center justify-center flex-col relative">
            <div>
              <Image
                src="/images/SOLUTION/Ellipse170.png"
                alt=""
                width={451}
                height={780}
                className="absolute top-56 right-0"
              />
            </div>
            <div className="container mx-auto">
              <div className=" text-center text-4xl  font-bold relative">
                Implementation
              </div>
              <div className="py-5">
                <div className="w-2/12 h-2 bg-white rounded-full mx-auto"></div>
              </div>
              <div className="text-xl leading-10  text-center">
                We have a lot of experience and lessons in implementing and
                applying food traceability systems in Vietnam, in the EU as well
                as in the US. We have faced many difficult challenges in many
                countries to gain practical knowledge and advice to help
                authorities carry out their tasks and propagate the benefits of
                food traceability systems. Products.
              </div>
              <div className="text-xl leading-10  text-center">
                With a team of IT, Agriculture and Food Processing experts from
                Australia, the EU and Vietnam, we are confident we will
                successfully implement a traceability system for companies of
                all models and sizes. different.
              </div>
              <div className=" text-center text-4xl  font-bold py-5">
                Implementation steps
              </div>
              <div className="px-10 ">
                <div className="flex justify-center py-6">
                  <Image
                    src="/images/SOLUTION/Frame3.png"
                    alt=""
                    width={724}
                    height={815}
                    quality={100}
                    className="w-12/12 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;
