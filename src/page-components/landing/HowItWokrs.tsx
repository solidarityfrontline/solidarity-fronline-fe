import * as React from "react";
import {FC} from "react";
import Box from "@mui/material/Box"
const HowItWorks: FC = () => {
  return (
    <div className="flex items-center justify-center py-12 max-md:flex-wrap px-4 md:px-0">
      <div className="flex flex-col">
        <div className="self-center flex w-full flex-col max-md:max-w-full container">
          <div className="text-transparent text-center text-stroke-orange text-8xl font-bold leading-[142px] tracking-tighter self-center max-w-[941px] max-md:max-w-full max-md:text-4xl max-md:leading-[66px]">
            How it works
          </div>
          <div className="text-amber-500 text-center text-2xl font-medium leading-9 tracking-tighter self-stretch mt-10 max-md:max-w-full max-md:mt-10">
            <span className="font-medium text-yellow-50">
              A good campaign needs to maintain a good communication channel
              with its participants and unite them in time when required.{" "}
            </span>
            <span className="font-bold text-amber-500">
              SolidarityFrontLine
            </span>
            <span className="font-medium text-yellow-50">
              {" "}
              is designed to give to the people a decisive voice whenever the
              power stirs away from democracy. Community resistance takes place
              by collectively ignoring or moving against the governing
              structures that do not serve the public’s demand.
            </span>
          </div>
          <div className="justify-center text-amber-500 text-center text-2xl font-bold leading-9 tracking-tighter self-center max-w-[719px] mt-16 max-md:max-w-full max-md:mt-10">
            The campaigns on SolidarityFrontLine have 3 main elements:
          </div>
          <Box className="flex w-full justify-between gap-8 mt-14 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <Box className="felx felx-col w-full md:w-1/3 pb-8 md:pb-0 border-b border-solid border-amber-50 md:border-0">
              <div
                className="justify-center text-yellow-50 text-center text-4xl font-bold leading-[58.96px] tracking-tighter">
                CAUSE
              </div>
              <div
                className="justify-center text-yellow-50 text-center text-2xl font-medium leading-9 tracking-tighter mt-8 max-md:mt-7">
                A cause which brings forth a public concern that is actively
                being ignored by the powerful.
              </div>
            </Box>
            <Box className="felx felx-col w-full md:w-1/3 pb-8 md:pb-0 border-b border-solid border-amber-50 md:border-0">
              <div
                className="justify-center text-yellow-50 text-center text-4xl font-bold leading-[58.96px] tracking-tighter">
                ACTION
              </div>
              <div
                className="justify-center text-yellow-50 text-center text-2xl font-medium leading-9 tracking-tighter mt-8 max-md:mt-6">
                An action that those who participate in the campaign will commit
                to, given the issue remains unaddressed.
              </div>
            </Box>
            <Box className="felx felx-col w-full md:w-1/3 pb-8 md:pb-0 border-b border-solid border-amber-50 md:border-0">
              <div
                className="justify-center text-yellow-50 text-center text-4xl font-bold leading-[58.96px] tracking-tighter self-stretch grow shrink basis-auto">
                QUOTA{" "}
              </div>
              <div className="justify-center text-yellow-50 text-center text-2xl font-medium leading-9 tracking-tighter mt-8 max-md:mt-8">
                A minimum number of participants required to make the campaign
                effective and a deadline by when this number should be reached.
              </div>
            </Box>
          </Box>
        </div>
        <div className="text-center text-yellow-50 text-2xl font-medium leading-9 tracking-tighter self-center max-w-[1040px] mt-24 max-md:max-w-full max-md:mt-10">
          The mindset for these types of campaigns is that when the public
          already knows what it wants, it doesn’t need to wait for the governors
          to give them permission. Rather, the governing class has to bend to
          the public’s will if it wants to remain relevant. Hence, it works best
          when enough awareness raising work has been done to have turned the
          cause into a public demand.
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;


