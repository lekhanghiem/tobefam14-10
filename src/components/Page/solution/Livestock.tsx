import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  boxShadow: 'none',
  height: '400px',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Livestock = () => {
  const itemData = [
    {
      src: '/images/SOLUTION/analyze.png',
      title: 'Easy to do',
      description:
        'No additional equipment is required and complete training is available.',
    },
    {
      src: '/images/SOLUTION/thumbup.png',
      title: 'Benefits for everyone',
      description:
        'Direct consulting helps companies in the supply chain improve operational efficiency.',
    },
    {
      src: '/images/SOLUTION/financialchat.png',
      title: 'Full comprehensive report',
      description:
        'Real-time information about the livestock situation of a region or country.',
    },
  ];
  return (
    <div className="w-full h-full pt-10 pb-20 container mx-auto">
      <div className="gap-3 text-white flex items-center justify-center flex-col relative">
        <div className=" text-center text-4xl font-bold relative leading-10 pb-5">
          Livestock registration and management system
        </div>
        <div className="w-2/12 h-2 bg-white rounded-full "></div>
        <div className="text-xl leading-10 w-10/12 text-center pt-3">
          As part of the food safety control tools provided to authorities, our
          Livestock Registration and Management System allows national or local
          authorities to receive reports periodically directly from the farms.
        </div>
        <div className="text-xl leading-10 w-10/12 text-center">
          The system provides complete information from farm livestock
          inventories to sales and export reports. To provide the necessary
          data, farms need to download the mobile app or connect their system to
          BLOCKCHAIN FARM's API.
        </div>
      </div>
      <Box sx={{ flexGrow: 1, py: 5 }}>
        <Grid container spacing={2}>
          {itemData.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Item>
                <div className="flex flex-col mx-auto text-white w-10/12 h-full gap-7 py-32 px-3 hoverlive">
                  <div className="flex justify-center">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={59}
                      height={59}
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl leading-10">{item.title}</div>
                    <div className="leading-10 py-6 text-sm">
                      {item.description}
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <div className="grid xl:grid-cols-3 grid-cols-1 pt-20 w-full mx-auto"></div>
    </div>
  );
};

export default Livestock;
