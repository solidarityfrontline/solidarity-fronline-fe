import * as React from "react";
import {FC} from "react";
import {Box} from "@mui/material";

const WhoWeAre: FC =  () => {
  return (
    <Box className="mt-12 px-12" id="whoweare">
      <div className="bg-yellow-50 px-8 py-12 max-md:px-5">
        <div className="gap-8 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-1/3 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch mt-12 max-md:mt-10">
            <div className="justify-center text-black text-justify text-5xl font-bold leading-[70.75200000000001px] tracking-tighter whitespace-nowrap max-md:text-4xl">
              UK 1988
            </div>
            <div className="text-black text-justify text-xl font-medium leading-7 tracking-tighter mt-6">
              A group called Community Resistance starts advocating that people
              don’t pay their taxes! The group’s alternative movement was in
              response to the UK government’s ruling that “everyone must pay
              similar taxes irrespective of their income or occupation”. 17
              million people joined this call and finally the government was
              forced to change this law.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-1/3 max-md:w-full max-md:ml-0">
          <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
            <div className="justify-center text-black text-justify text-5xl font-bold leading-[70.75200000000001px] tracking-tighter self-stretch mt-44 max-md:max-w-full max-md:text-4xl max-md:mt-10">
              UK 2022
            </div>
            <div className="text-black text-justify text-xl font-medium leading-7 tracking-tighter self-stretch mt-6 max-md:max-w-full">
              A campaign called dontpay.uk inspired by the Community Resistance
              commences its activities. This campaign targets the new law that
              was established in disregard to the public determination. The law
              said: 1.Energy prices will increase. 2.Taxing of the rich will
              decrease.In the span of 80 days, three million people joined the
              dontpay.uk campaign against this imposed law. Finally, the
              government had to bend to the public’s will.
            </div>
            <div className="justify-center text-black text-justify text-5xl font-bold leading-[70.75200000000001px] tracking-tighter self-stretch mt-24 max-md:max-w-full max-md:text-4xl max-md:mt-10">
              NOW
            </div>
            <div className="text-black text-justify text-xl font-medium leading-7 tracking-tighter self-stretch mt-6 max-md:max-w-full">
              More than ever, the need for something to resist against the cruel
              will of the power machine was felt.SolidarityFrontline, with the
              purpose to make people aware that they are not alone and help them
              to stand against abuse with a unified front, came into existence
              and presented a solution to the public. Here is a campaigning
              platform for anyone of us who wants to easily practice solidarity.
              With this calling, a team of pioneering anonymous individuals came
              together to help unite the people in solidarity and bring us
              closer to the dream of a brighter future.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-1/3 max-md:w-full max-md:ml-0">
          <div className="justify-center text-transparent text-stroke text-8xl font-medium leading-[94px] tracking-tighter max-w-[347px] self-end max-md:text-4xl max-md:leading-10">
            Who <br/>
            we are?
          </div>
        </div>
      </div>
      </div>
    </Box>
  );
}

export default WhoWeAre;


