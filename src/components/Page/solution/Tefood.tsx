'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Blockchian = () => {
  return (
    <div className="relative pb-40 md:pb-52">
      <div
        className="absolute top-0 w-full h-full "
        style={{
          backgroundImage: `url('/images/SOLUTION/Grouptefood.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative w-10/12 container  mx-auto ">
        <div className="gap-3 text-white flex items-center justify-center flex-col pt-10 w-10/12 mx-auto">
          <div className="text-center text-4xl  font-bold pb-7">
            TE-FOOD BLOCKCHAIN ​​SYSTEM - TRACKING THE ORIGIN OF ESSENTIAL FOOD
            FOR PROVINCES
          </div>
          <div className="h-2 bg-white w-3/12"></div>
        </div>
        <Box sx={{ flexGrow: 1, py: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Item>
                <div className="text-white text-left leading-10 text-xl ">
                  Since 2016, the "BLOCKCHAIN FARM Blockchain Food Traceability"
                  system has been operating for Ho Chi Minh City with the
                  capacity to trace the supply chain for 18,000 pigs, 200,000
                  poultry and 2.5 million eggs daily from 19 provinces. wall.
                  This is a large system suitable for the management model of
                  diverse supply chains, with distribution models from exporters
                  and importers, agents, wholesale markets, retail markets,
                  supermarket systems and stores. convenience goods. In 2018,
                  BLOCKCHAIN FARM continues to develop the "BLOCKCHAIN FARM
                  Blockchain" system for Provinces, where there are rich local
                  sources of supply and traceability needs from breeding, food,
                  vaccination to transportation. transport, slaughter and
                  distribution to retail chains, collective kitchens and
                  restaurants. The new BLOCKCHAIN FARM system also meets food
                  safety control requirements at retail markets, applies 4.0
                  technologies such as Blockchain, IoT, BigData,... and connects
                  and shares data with available systems. available from the
                  Province or Central Government. Daily automatic reporting
                  system provides automated reports and analysis for state
                  management agencies, and supply chains.
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item className="flex justify-center">
                <div>
                  <Image
                    src="/images/SOLUTION/Frametefood.png"
                    alt=""
                    width={459}
                    height={284}
                    className=""
                  />
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Blockchian;
