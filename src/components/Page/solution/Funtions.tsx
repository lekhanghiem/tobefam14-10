import React from 'react';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  background:
    'linear-gradient(180deg, rgba(0, 79, 96, 0.3) 0%, rgba(0, 162, 198, 0.3) 100%);',
  borderRadius: '12px',
  boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  py: 6,
  gap: 20,
  height: '100%',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Functions = () => {
  const solutionCards = [
    {
      image: '/images/SOLUTION/gear.png',
      description:
        'We don\'t believe there is "one size fits all"! BLOCKCHAIN FARM provides tailor-made processes for each type and industry of food.',
      size: {
        width: 61,
        height: 61,
      },
    },
    {
      image: '/images/SOLUTION/bitcoin.png',
      description:
        'Although applying the most modern technology, BLOCKCHAIN FARM is the most suitable choice for developing countries due to: low price, excellent service and no need to invest in additional equipment or human resources.',
      size: {
        width: 58,
        height: 58,
      },
    },
    {
      image: '/images/SOLUTION/diversity.png',
      description:
        'BLOCKCHAIN FARM connects authorities, consumers and the entire supply chain into a traceability process to provide all necessary information such as reports, forecasts, and alarms. Fully automated Big Data analysis.',
      size: {
        width: 61,
        height: 61,
      },
    },
    {
      image: '/images/SOLUTION/trade.png',
      description:
        'Food supply chains are increasingly global, so BLOCKCHAIN FARM has applied international standards such as GS1 and Global GAP to meet all requirements of every country in the world.',
      size: {
        width: 62,
        height: 62,
      },
    },
  ];

  return (
    <Box
      sx={{
        background:
          'linear-gradient(103.58deg, #00FB91 -13.81%, #036399 102.15%)',
        py: 10,
      }}
    >
      <div className="text-white container mx-auto">
        <div className="text-4xl font-bold text-center ">Functions</div>
        <div className="w-10/12 mx-auto pt-10">
          <Grid container spacing={5}>
            {solutionCards.map((card, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Item>
                  <Image
                    src={card.image}
                    alt={card.image}
                    width={card.size.width}
                    height={card.size.height}
                    className="h-32"
                  />
                  <Typography variant="h6" sx={{ lineHeight: 1.8,color:'white' }}>
                    {card.description}
                  </Typography>
                </Item>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Box>
  );
};

export default Functions;
