import React from 'react'
import Image from 'next/image';
import Hr from "@/components/Global/Hr"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
const Thenew = () => {
    const items = [
      {
        text: 'Low cost, 24/7 technical support service, modern 4.0 technology system, has been successful in Vietnam and internationally for many years;',
      },
      {
        text: 'Large livestock corporations such as CP, CJ, Japfa, Emives, Sang Ha, Ba Huan, Vinh Thanh Dat, Vissan,... all use the BLOCKCHAIN FARM system daily;',
      },
      {
        text: 'Large retail systems such as Vinmart, BigC, AEON, Lotte mart, Mega Market, CO.OP mart, SATRA,... all use the BLOCKCHAIN FARM system.',
      },
      {
        text: 'The system of veterinary staff and slaughterhouses in many southern provinces has been proficient in using the BLOCKCHAIN FARM application for many years.',
      },
    ];
    return (
      <div className="h-full w-full  relative ">
        <div className="py-20">
          <div>
            <Image
              src="/images/SOLUTION/Ellipse172.png"
              alt=""
              width={541}
              height={602}
              property="loading"
              className="absolute top-0 "
            />
          </div>
          <div className="w-10/12 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
              <div>
                <Image
                  src="/images/SOLUTION/image.png"
                  alt=""
                  width={541}
                  height={602}
                />
              </div>
              <div className="text-white text-xl leading-10">
                This new BLOCKCHAIN FARM system can be deployed quickly within
                1-2 months on a province-wide scale from farmers and farms to
                dining tables at a very reasonable price. For example, the price
                of tracking pigs from weaning to eating on the table with full
                information about food, vaccination, etc. only costs about
                12,000 VND. Traceability stamps with European anti-counterfeit
                Cologram technology cost only 60 VND/1 stamp.
              </div>
            </div>
            <Grid
              container
              spacing={5}
              sx={{ width: '83.33%', margin: 'auto', py: 10 }}
            >
              {/* Left Section */}
              <Grid item xs={12} lg={6}>
                <Typography variant="h4" fontWeight="bold" color="white">
                  BLOCKCHAIN FARM Blockchain's full traceability service has
                  strengths:
                </Typography>
                <Box py={2}>
                  <Hr />
                </Box>
                {items.map((item, index) => (
                  <Grid
                    container
                    spacing={2}
                    key={index}
                    alignItems="center"
                    sx={{ height: 80 }}
                  >
                    <Grid item xs={2}>
                      <Box display="flex" justifyContent="start">
                        <Image
                          src="/images/SOLUTION/Vectorthenew.png"
                          alt="Icon"
                          width={50}
                          height={22}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6" color="white" lineHeight={1.5}>
                        {item.text}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>

              {/* Right Section */}
              <Grid item xs={12} lg={6} display="flex" justifyContent="center">
                <Image
                  src="/images/SOLUTION/Groupthenew.png"
                  alt="Blockchain Farm"
                  width={541}
                  height={602}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
}

export default Thenew