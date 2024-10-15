import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  width: '60%',
  height: '100%',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...(theme.palette.mode === 'dark' && {
    backgroundColor: '#1A2027',
    color: theme.palette.text.primary,
  }),
}));

const Blockchain = () => {
  return (
    <div className="relative ">
      <Image
        src="/images/SOLUTION/Group48.png"
        alt="Blockchain background"
        width={4051}
        height={7800}
        className="absolute w-full h-full"
        priority 
      />
      <div className="w-10/12 container mx-auto py-20">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={12}>
              <Item>
                <Box
                  className=" rounded-xl text-white "
                  sx={{ boxShadow: '0px 4px 4px 0 #2AFCFF40' }}
                >
                  <div className="py-10">
                    <div className="font-bold leading-10 text-4xl pl-4">
                      Blockchain Ledger
                    </div>
                    <div className="flex flex-col gap-5 pt-5 w-11/12 mx-auto">
                      {[
                        {
                          src: '/images/SOLUTION/openlock.png',
                          alt: 'Open lock icon',
                          text: 'Blockchain provides a reliable and immutable network of traceable information. This commits to eliminating any possibility of supply chain data corruption.',
                        },
                        {
                          src: '/images/SOLUTION/world.png',
                          alt: 'World icon',
                          text: 'It provides a global network of food quality and transportation information for livestock products and fresh foods.',
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex flex-row gap-3">
                          <div>
                            <Image
                              src={item.src}
                              alt={item.alt}
                              width={40}
                              height={40}
                              className="h-10"
                            />
                          </div>
                          <div className="text-xl leading-8 text-white">
                            {item.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Blockchain;
