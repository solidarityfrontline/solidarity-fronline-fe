import {FC} from "react";
import {Box, Typography} from "@mui/material";
const GetInTouch: FC = () => {
  return (
    <Box component={"section"} className="w-full bg-yellow-50 flex justify-end flex-row  py-12" id="getintouch">

      <Box className="flex flex-col flex-wrap w-full md:w-3/4">
        <Box className="flex flex-row w-full">
          <Typography component="p" className="text-yellow-50 text-8xl font-bold tracking-tighter text-stroke max-w-full justify-center mt-3.5 pr-4 pt-20 pb-16 items-start max-md:max-w-full max-md:text-4xl max-md:pr-5">
            GET
          </Typography>
          <Typography
            component="p"
            className="text-yellow-50 text-8xl font-bold tracking-tighter bg-black-secondary w-full max-w-full justify-center mt-3.5 pr-16 pt-20 pb-16 items-start max-md:max-w-full max-md:text-4xl max-md:pr-5">
            IN TOUCH
          </Typography>
        </Box>
        <Box className="flex flex-row w-full">
          <Typography component="p" className="w-full md:w-3/4 ml-0  text-neutral-900 text-center md:text-justify text-2xl font-normal leading-9 tracking-tighter mt-9 max-md:max-w-full">
            To know more about us or our activities and for being in contact with
            us; we as a team have prepared some ways for communication, discussion
            and responding to your inquiries. Furthermore by joining these community
            links you can be in tune with us and our news.
          </Typography>
        </Box>
        <Box className="flex flex-row justify-start w-full mt-12 pr-24">
          <Box className="flex flex-col md:flex-row justify-start items-center gap-5 w-full bg-black-secondary py-12 px-12">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6923c4190f00d2c035813daccd063fe694e6ef86e7442b57ef847cb8a079b3d1?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&"
              className="aspect-square object-contain object-center w-20 justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <div className="flex flex-col mt-1 self-start max-md:max-w-full">
              <div className="justify-center text-yellow-50 text-2xl font-semibold leading-5 tracking-wider uppercase max-md:max-w-full">
                telegram group
              </div>
              <Box
                className="flex flex-row justify-start text-yellow-50 text-xl leading-5 tracking-wider uppercase mt-7 max-md:max-w-full">
                <Typography component="span" className="w-20">
                  join us:
                </Typography>
                <Typography component="span" className="break-all">
                  <a href="https://t.me/SolidarityFrontLine" target="_blank">https://t.me/SolidarityFrontLine</a>
                </Typography>

              </Box>
            </div>
          </Box>

        </Box>
        <Box className="w-full flex flex-row mt-4">
          <div className="w-full pl-0 md:pl-12 bg-yellow-50 flex justify-between gap-5 mb-5 py-12 max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bacb366ffa85d237f7d9ab9782051126662c6057624a5084c64419031e153f72?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&"
              className="aspect-square object-contain object-center w-20 overflow-hidden shrink-0 max-w-full"
            />
            <div className="flex grow basis-[0%] flex-col items-stretch mt-1 self-start max-md:max-w-full">
              <div className="justify-center text-neutral-900 text-2xl font-semibold leading-5 tracking-wider uppercase max-md:max-w-full">
                email{" "}
              </div>
              <Typography component="span" className="text-xl font-normal mt-4 break-all">
               TELL US YOUR FEEDBACK: <a href="mailto:solidarityfrontline@proton.com">SOLIDARITYFRONTLINE@PROTON.COM</a>
              </Typography>
            </div>
          </div>
        </Box>
      </Box>

    </Box>
  )
}
export default GetInTouch;


