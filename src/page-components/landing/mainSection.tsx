import {FC} from "react";
import {Box} from "@mui/material"

const MainSection: FC = () => {
  return (
    <div className="flex-col bg-black-secondary overflow-hidden relative z-[1] flex  mt-0 w-full items-stretch max-md:max-w-full max-md:mt-0">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f1b6679f8591557ed2d9b696e22c075a03872d1538f231d852a85f1ec8eebd46?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1b6679f8591557ed2d9b696e22c075a03872d1538f231d852a85f1ec8eebd46?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1b6679f8591557ed2d9b696e22c075a03872d1538f231d852a85f1ec8eebd46?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1b6679f8591557ed2d9b696e22c075a03872d1538f231d852a85f1ec8eebd46?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1b6679f8591557ed2d9b696e22c075a03872d1538f231d852a85f1ec8eebd46?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1b6679f8591557ed2d9b696e22c075a03872d1538f231d852a85f1ec8eebd46?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1b6679f8591557ed2d9b696e22c075a03872d1538f231d852a85f1ec8eebd46?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1b6679f8591557ed2d9b696e22c075a03872d1538f231d852a85f1ec8eebd46?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <div className="relative flex flex-col items-center mb-3.5 px-20 max-md:max-w-full max-md:px-5">
        <div className="self-stretch ml-5 mr-4 max-md:max-w-full max-md:mr-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
              <div
                className="text-gray-200 text-6xl font-bold leading-[94px] tracking-tighter max-md:text-4xl max-md:leading-[65px] max-md:mt-10">
                WHO <br/>
                WE
                <br/>
                ARE?
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[79%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10">
                <div
                  className="text-amber-500 text-5xl font-bold leading-[71px] tracking-tighter self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[66px]">
                  We are a communication channel
                </div>
                <div className="flex items-center gap-4 max-md:max-w-full max-md:flex-wrap">
                  <div
                    className="text-white text-4xl font-bold leading-[58.96px] tracking-tighter grow whitespace-nowrap my-auto">
                    Between
                  </div>
                  <div className="self-stretch flex grow ml-4 flex-col items-stretch">
                    <div className="text-stone-300  text-2xl font-medium leading-9 tracking-tighter">
                      Nations and countries
                    </div>
                    <div className="text-stone-300 text-2xl font-medium leading-9 tracking-tighter">
                      People and governments
                    </div>
                  </div>
                </div>
                <div
                  className="text-stone-300 text-2xl font-medium leading-9 tracking-tighter self-stretch mt-9 max-md:max-w-full">
                  And most importantly, a bridge between people themselves
                  <br/>
                  Between you, and you, who have no boundaries!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch ml-5 mr-4 mt-9 max-md:max-w-full max-md:mr-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2b4a9e2009120dbb0485062cbfa430179441ecdfe4ba7acf78be2a3d63738cf2?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b4a9e2009120dbb0485062cbfa430179441ecdfe4ba7acf78be2a3d63738cf2?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b4a9e2009120dbb0485062cbfa430179441ecdfe4ba7acf78be2a3d63738cf2?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b4a9e2009120dbb0485062cbfa430179441ecdfe4ba7acf78be2a3d63738cf2?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b4a9e2009120dbb0485062cbfa430179441ecdfe4ba7acf78be2a3d63738cf2?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b4a9e2009120dbb0485062cbfa430179441ecdfe4ba7acf78be2a3d63738cf2?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b4a9e2009120dbb0485062cbfa430179441ecdfe4ba7acf78be2a3d63738cf2?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b4a9e2009120dbb0485062cbfa430179441ecdfe4ba7acf78be2a3d63738cf2?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&"
                className="aspect-[1.46] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch mt-32 max-md:max-w-full max-md:mt-10">
                <div
                  className="justify-center text-gray-200 text-justify text-2xl font-medium leading-9 tracking-tighter max-md:max-w-full">
                  “Solidarity Front Line” helps coordinate the strikes and other
                  movements of resistance. And it leaves a lot of room for the
                  creativity of the activists to come with new plans to{" "}
                </div>
                <div
                  className="text-neutral-900 text-center text-base font-bold leading-5 tracking-wider uppercase max-w-[348px] justify-center items-center bg-gray-200 mt-11 px-16 py-4 rounded-lg max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <a href="https://libcom.org/article/poll-tax-rebellion-danny-burns" target="_blank">LEARN MORE{" "}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Box className="flex w-full  items-stretch justify-between gap-5 mt-24 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <Box className="flex flex-row gap-4">
            <div
              className="justify-center text-gray-200 text-right text-xl font-semibold leading-5 tracking-wider uppercase grow whitespace-nowrap my-auto">
              open source{" "}
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a268593a23f82791b80f25ad25249b51dff4e3da06e3144f44cc660bdcd459b?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&"
              className="aspect-square object-contain object-center w-[72px] overflow-hidden self-stretch shrink-0 max-w-full"
            />
          </Box>
          <Box className="flex flex-row gap-4">
            <Box className="justify-center text-gray-200 text-right text-xl font-semibold leading-5 tracking-wider uppercase grow whitespace-nowrap my-auto">
              global
            </Box>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d031ada26468fb7abf49ad631e6965e6d5470ff55bbbe25be461470c4763ae1?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&"
              className="aspect-square object-contain object-center w-[72px] overflow-hidden self-stretch shrink-0 max-w-full"
            />
          </Box>
          <Box className="flex flex-row gap-4">
            <Box
              className="justify-center text-gray-200 text-right text-xl font-semibold leading-5 tracking-wider uppercase my-auto">
              Solidarity
            </Box>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d63c3e45a145b471054fcff5e06d9d75a3ed3b6e34016f0e085a1b5dae4b119?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&"
              className="aspect-square object-contain object-center w-[72px] overflow-hidden self-stretch shrink-0 max-w-full"
            />
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default MainSection;
