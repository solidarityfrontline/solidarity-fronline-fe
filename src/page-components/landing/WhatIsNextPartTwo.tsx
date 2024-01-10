import * as React from "react";
import {FC} from "react";
import {Box, Typography, Button, } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
const WhatIsNextPartTwo: FC = () => {
  return (
    <Box component="section" className="bg-yellow-50 flex flex-col items-stretch pr-0 pt-7 pb-20 md:pr-5">
      <div className="max-md:max-w-full">
        <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch mt-32 max-md:max-w-full max-md:mt-10">
              <div className="bg-black-secondary py-16 flex flex-row justify-end relative">
                <Box className="w-full md:w-2/3 ">
                  <Typography className="text-yellow-50 text-8xl text-center md:text-start">
                    What’s next?
                  </Typography>
                </Box>
                <Box className="absolute w-full md:w-2/5 -top-[40%] left-0 hidden md:block">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/86f79b7d10937f0f476043937871b37aa3d4e3a55f432d4beddc66f6e847b79a?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/86f79b7d10937f0f476043937871b37aa3d4e3a55f432d4beddc66f6e847b79a?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86f79b7d10937f0f476043937871b37aa3d4e3a55f432d4beddc66f6e847b79a?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/86f79b7d10937f0f476043937871b37aa3d4e3a55f432d4beddc66f6e847b79a?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/86f79b7d10937f0f476043937871b37aa3d4e3a55f432d4beddc66f6e847b79a?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86f79b7d10937f0f476043937871b37aa3d4e3a55f432d4beddc66f6e847b79a?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/86f79b7d10937f0f476043937871b37aa3d4e3a55f432d4beddc66f6e847b79a?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/86f79b7d10937f0f476043937871b37aa3d4e3a55f432d4beddc66f6e847b79a?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&"
                    className="aspect-[1.12] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
                  />
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-end mt-9 px-4 md:px-0">
        <Typography component="p" className="w-full md:w-2/3 text-black-secondary text-2xl font-normal">
          This service is under construction! The development is planned to be finished by April 1st and the official launch will take place by May 1st. In the meantime, feel free to check our Github repositories. SolidarityFrontLine is and will remain free and open source :-)
        </Typography>
        <Box className="w-full md:w-2/3 mt-12">
        <Button startIcon={<GitHubIcon />} className="bg-black-secondary text-white h-12 px-8" href="https://github.com/solidarityfrontline/solidarity-fronline-fe" target="_blank">
          Check on Github
        </Button>
        </Box>
      </div>
    </Box>
  );
}

export default WhatIsNextPartTwo;


