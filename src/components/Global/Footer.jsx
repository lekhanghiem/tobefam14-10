'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollToTop from './ScrollToTop';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '1A2027',
  }),
}));
const footer = () => {
  const socialMediaIcons = [
    {
      src: '/images/HOME/icontelegram.png',
      alt: 'Telegram',
      width: 35,
      height: 23,
    },
    {
      src: '/images/HOME/icontiwter.png',
      alt: 'Twitter',
      width: 35,
      height: 23,
    },
    {
      src: '/images/HOME/iconfacebook.png',
      alt: 'Facebook',
      width: 35,
      height: 23,
    },
    {
      src: '/images/HOME/iconinstagram.png',
      alt: 'Instagram',
      width: 35,
      height: 23,
    },
  ];
  return (
    <div className="w-full h-full bg-[#012133]  pt-20">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Item>
              <div className="flex flex-col basis-1/4">
                <div className="flex justify-center  py-2">
                  <Image
                    src="/images/HOME/logo.png"
                    alt=""
                    width={287}
                    height={53}
                    className=""
                  />
                </div>
                <Link
                  href=" "
                  className="no-underline py-2 pt-5 text-center text-white hover:text-green-500 text-xl text-[97c7ff] "
                >
                  New agricultural solutions for you
                </Link>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={7}>
            <Item>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Item>
                      <div className="flex flex-col text-white   text-xl left-8 ">
                        <ul>
                          <li className="py-5 hover:text-green-400">
                            <Link href=""> Company</Link>
                          </li>
                          <li className="py-5 hover:text-green-400">
                            <Link href=""> About Us</Link>
                          </li>
                          <li className="py-5 hover:text-green-400">
                            <Link href=""> Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>
                      <div className="flex flex-col text-white   text-xl left-8 ">
                        <ul>
                          <li className="py-5 hover:text-green-400">
                            <Link href=""> Blog</Link>
                          </li>
                          <li className="py-5 hover:text-green-400">
                            <Link href=""> Support</Link>
                          </li>
                          <li className="py-5 hover:text-green-400">
                            <Link href=""> FAQ</Link>
                          </li>
                        </ul>
                      </div>
                    </Item>
                  </Grid>

                  <Grid item xs={4}>
                    <Item>
                      {' '}
                      <div className="flex flex-col text-white   text-xl left-8 ">
                        <ul>
                          <li className="py-5 hover:text-green-400">
                            <Link href=""> Terms of use</Link>
                          </li>
                          <li className="py-5 hover:text-green-400">
                            <Link href=""> Privacy Policy</Link>
                          </li>
                        </ul>
                      </div>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div className=" ">
        <div className="py-5 ">
          <div className="bg-gradient-to-r h-1 bg-green-400 w-full  pt-1" />
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between py-5  lg:px-20 px-3">
          <div className="text-white text-xl flex justify-end">
            CopyRight &copy; 2020 - 2022 EG FARM. All Rights Reserved.
          </div>
          <div className="">
            <div className="flex justify-end gap-10 lg:pt-0 pt-4">
              {socialMediaIcons.map((icon, index) => (
                <div key={index}>
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    className="hover:scale-150"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-4 right-4 absolute">
        <ScrollToTop />
      </div>
    </div>
  );
};

export default footer;
