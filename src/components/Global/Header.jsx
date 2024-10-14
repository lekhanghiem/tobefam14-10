'use client';
import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { IoMenu } from 'react-icons/io5';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  height:'100%',
  boxShadow: 'red',
  border: 'red 10px solid',
  ...theme.typography.body2,
  alignItems: 'center',
  // textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Header = () => {
  const [isclick, setisclick] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'HOME', href: { pathname: '/', query: { name: 'test' } } },
    { name: 'BENEFIT', href: '/benefit' },
    { name: 'SOLUTION', href: '/solution' },
    {
      name: 'FOR CONSUMERS',
      dropdown: true,
      items: [
        { name: 'Seek an origin', href: '/seek' },
        { name: 'Consumer phone application', href: '#' },
        { name: 'Point of sale', href: '#' },
        { name: 'Privacy Policy', href: '#' },
      ],
    },
    { name: 'ABOUT US', href: '/about-us' },
    { name: 'NEWS', href: '/news' },
    { name: 'CONTACT', href: '/contact' },
  ];
  return (
    <div className="bg-[#012133]">
      <div className="  sticky top-0 z-50 ">
        <Head>
          <title>Trang chủ - EG Fam</title>
          <meta name="description" content="Trang web của cộng đồng EG Fam" />
          <meta property="og:title" content="Trang chủ - EG Fam" />
          <meta
            property="og:description"
            content="Trang web của cộng đồng EG Fam"
          />
          <meta property="og:type" content="website" />
        </Head>

        <div>
          <div className="flex gap-10 text-white px-3 text-xl py-3  justify-end pr-5">
            <p className=" ">Tel-icon : +234 81 - 3624 - 379 - 6</p>
            <p className="">Email : @gmail.com</p>
            <p className=" ">Get Directions</p>
          </div>
          <Box sx={{ flexGrow: 1, border: 'red 10px solid' }}>
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <Item>
                  <div className="flex justify-center items-center h-full">
                    <Image
                      src="/images/HOME/logo.png"
                      alt=""
                      width={287}
                      height={53}
                    />
                  </div>
                </Item>
              </Grid>
              <Grid item xs={9}>
                <Item>
                  <div className='flex justify-end'>
                    <IoMenu
                      fontSize={50}
                      color="white"
                      className="flex items-center justify-end"
                    />
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Header;
