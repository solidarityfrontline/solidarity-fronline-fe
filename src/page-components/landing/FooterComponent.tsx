import {FC} from "react";
import {Box, Typography, List,  ListItem, ListItemText} from "@mui/material";
import {Telegram, Instagram, Twitter, GitHub, Facebook, Google} from '@mui/icons-material';
const FooterComponent: FC = () => {
  return(
    <Box component="section">
      <Box component="footer" className="flex flex-row flex-wrap md:flex-nowrap justify-between gap-5 relative py-12 px-4 md:px-12">
        <Box className="w-1/3">
          <Box className="justify-center items-center bg-white flex flex-col px-7 py-2 rounded-b-lg w-36 absolute top-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/42bf857272cf63b533bf82c6c2dab6373ea9cbba08b6c2e21295d152bc579ed7?apiKey=f8f17b81c58c4b89ab7d3db6b3fae9e2&"
              className="aspect-[3.33] object-contain object-center w-20 overflow-hidden"
            />
          </Box>
          <List className="text-gray-400">
            <a href="#">
              <ListItem>
                <ListItemText primary="Info /"/>
              </ListItem>
            </a>
            <a href="#">
              <ListItem>
                <ListItemText primary="Home /"/>
              </ListItem>
            </a>
            <a href="#whoweare">
              <ListItem>
                <ListItemText primary="About /"/>
              </ListItem>
            </a>
            <a href="#getintouch">
              <ListItem>
                <ListItemText primary="Contact us /"/>
              </ListItem>
            </a>
          </List>
        </Box>
        <Box className="w-1/3 flex-col hidden md:flex">
          <img
            loading="lazy"
            srcSet="slogan_white.png"
            className="aspect-[4.186] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
          />
        </Box>
        <Box className="w-1/3 flex flex-col items-end">
          <Box className="bg-white rounded-full w-8 h-8 flex justify-center items-center mt-6">
            <a href="https://t.me/SolidarityFrontLine" target="_blank"><Telegram></Telegram></a>
          </Box>
          <Box className="bg-white rounded-full w-8 h-8 flex justify-center items-center mt-6">
          <a href="https://www.instagram.com/solidarityfrontline" target="_blank"><Instagram></Instagram></a>
          </Box>
          {/* <Box className="bg-white rounded-full w-8 h-8 flex justify-center items-center mt-6">
            <Twitter></Twitter>
          </Box> */}
          {/* <Box className="bg-white rounded-full w-8 h-8 flex justify-center items-center mt-6">
            <Facebook></Facebook>
          </Box> */}
          {/* <Box className="bg-white rounded-full w-8 h-8 flex justify-center items-center mt-6">
            <Google></Google>
          </Box> */}
          <Box className="bg-white rounded-full w-8 h-8 flex justify-center items-center mt-6">
          <a href="https://github.com/solidarityfrontline" target="_blank"><GitHub></GitHub></a>
          </Box>
        </Box>
      </Box>
      <Box className="w-full h-8 flex flex-row justify-center">
        <Typography className="text-xs text-gray-500 mb-3 ml-4">
          © 2024 — copyright
        </Typography>
      </Box>
    </Box>
  )
}
export default FooterComponent;
