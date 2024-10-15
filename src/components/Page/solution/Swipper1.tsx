import React from 'react';
import Image from 'next/image';
import { Grid, Box, Typography } from '@mui/material';

const Swiper1 = () => {
  const items = [
    {
      src: '/images/SOLUTION/setting.png',
      title: 'The process is based on the roles of units and types of food',
      description:
        'For BLOCKCHAIN FARM, each unit (farm, slaughterhouse,...) has its own processes, options, and functions.',
    },
    {
      src: '/images/SOLUTION/expand.png',
      title: 'Large-scale data',
      description:
        'Transportation transactions (delivery and receipt), food safety information (about weight, feed, vaccination, antibiotic use, quarantine,...).',
    },
    {
      src: '/images/SOLUTION/wifi.png',
      title: 'Offline connection',
      description:
        "The app uses the phone's camera to read 1D or 2D barcodes to identify objects (livestock, transport, food) as part of the process.",
    },
    {
      src: '/images/SOLUTION/environment.png',
      title: 'Suitable for developing countries',
      description:
        'BLOCKCHAIN FARM requires no special phone configuration. All features of the application work well on all phones.',
    },
    {
      src: '/images/SOLUTION/customer.png',
      title: 'Multi-language support',
      description:
        'Currently, 3 languages are integrated. New languages will be integrated very quickly as needed.',
    },
    {
      src: '/images/SOLUTION/language.png',
      title: 'Management of identification materials',
      description:
        'The function of ordering and managing traceable material inventory is integrated in the application.',
    },
  ];

  return (
    <Box className="bg-customSwiper1 text-white py-10  mx-auto container w-10/12">
      <Grid container spacing={4} justifyContent="center">
        {items.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box className=" py-10 mx-auto rounded-3xl bg-customBlue shadow-custom relative text-center  h-[300px]">
              <div className='w-11/12 mx-auto'>
                <Box className="flex justify-center py-1">
                  <Image
                    src={card.src}
                    alt=""
                    width={80}
                    height={75}
                    className=""
                  />
                </Box>
                <Typography className="text-white text-4xl leading-10 py-3">
                  {card.title}
                </Typography>
                <Typography className="text-white text-xl py-1 leading-8">
                  {card.description}
                </Typography>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Swiper1;
