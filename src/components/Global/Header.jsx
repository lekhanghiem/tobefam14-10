'use client';
import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IoClose, IoMenu } from 'react-icons/io5';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  ...theme.typography.body2,
  alignItems: 'center',
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const drawerWidth = 240;

const Header = () => {
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

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    typeof window !== 'undefined' ? () => document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <div className=" flex justify-center py-5">
        <Image
          src="/images/HOME/logo.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="font-bold hover:bg-white py-3 rounded-md hover:border-white"
          >
            {item.dropdown ? (
              <div className="dropdown relative">
                <div className="flex gap-1 ">
                  <Link href="#" className="dark:text-white hover:underline ">
                    {item.name}
                  </Link>
                  <div className="flex items-center">
                    <KeyboardArrowDownIcon />
                  </div>
                </div>
                <div className="dropdown-content absolute left-[-55px]">
                  <ul className="dropdown-menu  justify-center bg-white rounded-md px-4 py-1">
                    {item.items.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="font-bold py-2 px-9 hover:bg-[#01fb94] rounded-md whitespace-nowrap"
                      >
                        <Link href={subItem.href} className="text-black">
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                href={item.href}
                className="dark:text-white hover:underline"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="bg-[#012133]">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      <div className="sticky top-0 z-50">
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
          <div className="flex gap-10 text-white px-3 text-xl py-3 justify-end pr-5">
            <p>Tel-icon : +234 81 - 3624 - 379 - 6</p>
            <p>Email : @gmail.com</p>
            <p>Get Directions</p>
          </div>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={6} md={3}>
                <Item>
                  <div className="flex justify-center items-center h-full w-full">
                    <Image
                      src="/images/HOME/logo.png"
                      alt="logo"
                      width={287}
                      height={53}
                    />
                  </div>
                </Item>
              </Grid>

              <Grid item xs={6} md={9}>
                <Item>
                  <div className="relative">
                    <div
                      className="cursor-pointer absolute xl:hidden flex right-10 top-[-10px]"
                      onClick={handleDrawerToggle}
                    >
                      {mobileOpen ? (
                        <IoClose fontSize={60} color="white" />
                      ) : (
                        <IoMenu fontSize={60} color="white" />
                      )}
                    </div>

                    <div className="relative hidden xl:block">
                      <div className="h-24 w-full bg-custom-bgmenu diamond"></div>

                      <nav className="dark:bg-gray-700 w-full">
                        <ul className="flex font-bold mt-0 text-2xl whitespace-nowrap gap-5 absolute left-[5%] top-4">
                          {menuItems.map((item, index) => (
                            <li
                              key={index}
                              className="font-bold hover:bg-white py-3 rounded-md hover:border-white"
                            >
                              {item.dropdown ? (
                                <div className="dropdown relative">
                                  <div className="flex gap-1">
                                    <Link
                                      href="#"
                                      className="dark:text-white hover:underline"
                                    >
                                      {item.name}
                                    </Link>
                                    <div className="flex items-center">
                                      <KeyboardArrowDownIcon />
                                    </div>
                                  </div>
                                  <div className="dropdown-content absolute left-0">
                                    <ul className="dropdown-menu absolute justify-center bg-white rounded-md px-4 py-1">
                                      {item.items.map((subItem, subIndex) => (
                                        <li
                                          key={subIndex}
                                          className="font-bold py-2 px-9 hover:bg-[#01fb94] rounded-md"
                                        >
                                          <Link
                                            href={subItem.href}
                                            className="text-black"
                                          >
                                            {subItem.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  href={item.href}
                                  className="dark:text-white hover:underline"
                                >
                                  {item.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
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
