import React from 'react'
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow:'none',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Youwant = () => {
    return (
      <div className="custom-gradient w-full h-full text-white relative bg-gradient-to-r from-[rgba(0,48,76,1)] to-[rgba(0,114,178,1)]">
        <div className='container mx-auto'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Item>
                  <div className="w-10/12 pt-5 text-white ">
                    <div className="leading-10 text-3xl font-bold ">
                      You want to use your own identification material. No
                      problem at all!
                    </div>
                    <div className="leading-8 text-xl ">
                      BLOCKCHAIN FARM works with companies and partners that
                      supply identification materials. What you need to do is
                      connect to our system via API to request an ID code from
                      BLOCKCHAIN FARMand this code can be assigned to an ID in
                      your system.
                    </div>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item>
                  {' '}
                  <div className="flex justify-center">
                    <Image
                      src="/images/SOLUTION/frame1.png"
                      alt=""
                      width={282}
                      height={215}
                      className=" "
                      property="loading"
                    />
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className="absolute left-0 top-0">
          <Image
            src="/images/SOLUTION/Ellipse174.png"
            alt=""
            width={282}
            height={215}
            className="w-12/12 h-full "
          />
        </div>
      </div>
    );
}

export default Youwant
