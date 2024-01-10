import {FC} from "react";

const Header:FC = (props) => {
  return (
    <div className="h-20 backdrop-blur-md bg-black-secondary relative flex w-full items-stretch justify-between gap-5 px-20 py-5 max-md:max-w-full max-md:flex-wrap mt-0 max-md:px-5">
      <div className="flex items-stretch justify-between gap-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div className="justify-center text-yellow-50 text-base font-medium leading-7 grow whitespace-nowrap">
          <a href="#whoweare">Who we are?</a>
        </div>
        <div className="justify-center text-yellow-50 text-base font-medium leading-7">
          <a href="#getintouch">contact us</a>
        </div>
        <div className="justify-center text-yellow-50 text-base font-medium leading-7 grow whitespace-nowrap">
          <a href="https://github.com/solidarityfrontline/solidarity-fronline-fe">Github{" "}</a>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/92e20dbd2d216e17eaaf3b290862c951fbafc122b574fc29b2c98a2be355d589?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&"
        className="aspect-[3.34] object-contain object-center w-[107px] overflow-hidden self-center shrink-0 max-w-full my-auto"
      />
    </div>
  );
}
export default Header;


