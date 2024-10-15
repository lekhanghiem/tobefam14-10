import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Identification = () => {
  return (
    <div className="h-full w-full text-white relative  ">
      <div className=" mx-auto container py-10">
        <div className="absolute top-5 right-0">
          <Image
            src="/images/SOLUTION/Ellipse170.png"
            alt=""
            width={451}
            height={780}
          />
        </div>
        <div>
          <div className="text-center leading-10 text-4xl font-bold py-10">
            Identification materials
          </div>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Item>
                <div className="py-10">
                  <div className="">
                    <div className="leading-8 text-3xl">
                      For the upstream supply chain
                    </div>
                    <div className="leading-8 pt-5 text-xl">
                      The plastic security ring containing the QR code and RFID
                      tag is made from non-toxic materials with a water and
                      sun-resistant printing technique.
                    </div>
                  </div>

                  <div className="pl-10 pt-10">
                    <div className="flex  gap-3">
                      <div className="">
                        <Image
                          src="/images/SOLUTION/transport.png"
                          alt=""
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="leading-8 text-xl text-left">
                        Security rings are used to identify livestock, transport
                        vehicles, shipments and product packages.
                      </div>
                    </div>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src="/images/SOLUTION/procurement.png"
                          alt=""
                          width={60}
                          height={60}
                          className=""
                        />
                      </div>
                      <div className="leading-8 text-left text-xl">
                        Inventory-aware materials management tools and smart
                        ordering modes help reduce companies' costs.
                      </div>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={5}>
              <Item>
                <div className="w-full">
                  <Image
                    src="/images/SOLUTION/Group.png"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Divider
          sx={{
            backgroundColor: 'green',
            height: 4,
            border: 'none',
            width: '90%',
            mx: 'auto',
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Item>
                <div className="relative">
                  <div className="z-40 pl-2">
                    <Image
                      src="/images/SOLUTION/Vector.png"
                      alt=""
                      width={500}
                      height={500}
                      className="  "
                    />
                  </div>

                  <div className="z-0 absolute top-0 ">
                    <Image
                      src="/images/SOLUTION/frame.png"
                      alt=""
                      width={500}
                      height={500}
                      className="  "
                    />
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <div className="text-left">
                  <div className="leading-10 text-3xl  pt-3">
                    For the downstream supply chain
                  </div>
                  <div className="leading-8 text-xl pt-5">
                    Use QR codes on stamps and labels printed on shopping bags
                    to retrieve product information in retail channels.
                  </div>
                  <div className="flex gap-4 pt-4">
                    <div className="">
                      <Image
                        src="/images/SOLUTION/qrcode.png"
                        alt=""
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="leading-8 text-xl">
                      The QR code on the stamp is combined with an easily
                      recognizable color code (colorgram) to check validity by
                      image.
                    </div>
                  </div>
                  <div className="flex gap-4 py-6">
                    <div className="">
                      <Image
                        src="/images/SOLUTION/app.png"
                        alt=""
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="leading-8 text-xl">
                      BLOCKCHAIN FARM can integrate with smart scales to print
                      QR codes on product labels.
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Identification;
