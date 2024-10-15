'use client'
import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(6, 100, 153, 0.3)',
  boxShadow: '0px 4px 4px 0px #2AFCFF40',

  height: '500px',
  borderRadius: '30px',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Benefit = () => {
  const solutions = [
    {
      title: 'Blockchain',
      description:
        'Blockchain technology is a revolution in storing, exchanging and authenticating data so that all information becomes honest, transparent and unchangeable .',
      image: '/images/SOLUTION/blockchain.png',
    },
    {
      title: 'Artificial intelligence',
      description:
        'Blockchain FARM uses automated fraud detection mechanisms. The system continuously improves the search for unusual activities and potential fraud in the supply chain to promptly prevent, making the supply chain more transparent.',
      image: '/images/SOLUTION/artificial.png',
    },
    {
      title: 'Internet of Things',
      description:
        'With a highly diverse network of sensors throughout the supply chain, data is automatically updated where events occur and traceability is real-time. The Internet of Things will bring a new era in food control, reduce the use of manual labor, and reduce human errors.',
      image: '/images/SOLUTION/internet.png',
    },
    {
      title: 'Deep data analysis',
      description:
        'BLOCKCHAIN FARM creates opportunities for farmers to improve profitability by 5% - 10% using deep data analysis modules. This is a high-tech and professional solution for farms of all sizes.Blockchain FARM helps farmers improve profitability by 5% - 10% using high-tech deep data analysis solutions for farms of all sizes.',
      image: '/images/SOLUTION/analytics.png',
    },
  ];
  return (
    <div className="bg-custombenefit text-white relative py-10">
      <div className="absolute top-0">
        <Image
          src="/images/SOLUTION/168.png"
          alt=""
          width={541}
          height={602}
          className="w-12/12 h-full "
          property="loading"
        />
      </div>
      <div className=" mx-auto container">
        <div className="text-center w-11/12 mx-auto">
          <h1 className="text-4xl font-bold leading-10">
            Revolutionizing Agriculture with new technologies
          </h1>
          <div className="text-xl  leading-10 py-10 ">
            The global Agriculture industry is at the frontier of revolutionary
            change. New technologies have become cheaper and more reliable. This
            takes automation and food safety control to a higher level for every
            supply chain. If we do not promptly apply advanced technologies,
            countries and companies will fall behind in the global economy.
          </div>
        </div>
        <div className='w-10/12 mx-auto'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5}>
              {solutions.map((solution, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Item>
                    <div className="w-10/12 mx-auto">
                      <div className="justify-center flex pt-10">
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          width={120}
                          height={120}
                          className=""
                          loading="lazy"
                        />
                      </div>
                      <div className="pt-10 text-center">
                        <div className="text-white text-4xl leading-10  ">
                          {solution.title}
                        </div>
                        <div className="text-white text-xl leading-10 pt-5">
                          {solution.description}
                        </div>
                      </div>
                    </div>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
