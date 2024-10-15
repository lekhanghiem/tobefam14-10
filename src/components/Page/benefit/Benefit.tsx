import React from 'react';
import Image from 'next/image';
import Solve from '@/components/Global/Solve';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: '0px 4px 4px 0px #2AFCFF40',
  backgroundColor: '#023042',
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
// Benefit Data Interface
interface BenefitData {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

// Component Props Interface for BenefitCard
interface BenefitCardProps {
  benefit: BenefitData;
}

// Main Benefit Component
const Benefit: React.FC = () => {
  const benefitData: BenefitData[] = [
    {
      icon: '/images/BENEFIT/banking.png',
      alt: 'State Management',
      title: 'Support for State Management',
      description:
        'Government agencies have real-time information on food supply and demand in localities, can control the Farming - Planting situation and immediately handle any abnormalities.',
    },
    {
      icon: '/images/BENEFIT/performance.png',
      alt: 'Consumer Confidence',
      title: 'Increase Consumer Confidence',
      description:
        'According to statistics, 66% of consumers do not believe in the content written on product labels. Blockchain FARM can improve consumer trust in companies and products.',
    },
    {
      icon: '/images/BENEFIT/international.png',
      alt: 'Export Support',
      title: 'Support Export Businesses',
      description:
        'Most importing countries have introduced regulations on traceability for food products with increasingly strict standards. Using BLOCKCHAIN FARM Blockchain technology, export companies easily meet these regulations',
    },
    {
      icon: '/images/BENEFIT/diet.png',
      alt: 'Food Fraud Prevention',
      title: 'Prevent Food Fraud',
      description:
        'Governments, corporations and food companies strive to ensure food safety due to the demands of buyers – the growing global middle class. BLOCKCHAIN FARM has the ability to assist in detecting fraud in the food industry.',
    },
    {
      icon: '/images/BENEFIT/protection.png',
      alt: 'Trademark Protection',
      title: 'Trademark Protection',
      description:
        'Removing the space after the word "province", geographical regions and traditional local specialties are often faked on the outside market. BLOCKCHAIN FARM can prove the origin of these products',
    },
    {
      icon: '/images/BENEFIT/deliveryservice.png',
      alt: 'Product Recall',
      title: 'Reduce Product Recall Time',
      description:
        'BLOCKCHAIN FARM can shorten the process of finding the source of contaminated food - previously it took weeks, now it only takes a few seconds - helping authorities protect people s health.',
    },
  ];

  return (
    <div className="relative">
      <div className="absolute">
        <Image
          src="/images/BENEFIT/168.png"
          alt="Background Image 1"
          width={541}
          height={602}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="absolute right-0 bottom-60">
        <Image
          src="/images/BENEFIT/171.png"
          alt="Background Image 2"
          width={1000}
          height={780}
          className="w-full h-full"
        />
      </div>

      <div className=" mx-auto w-10/12 py-20">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={5}>
            {benefitData.map((benefit, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Item>
                  <div className="w-10/12 mx-auto">
                    <div className="flex justify-center pt-20 ">
                      <Image
                        src={benefit.icon}
                        alt={benefit.alt}
                        width={120}
                        height={120}
                        className="absolute"
                      />
                    </div>
                    <div className="pt-36  text-center">
                      <h2 className="text-white text-4xl py-10 leading-10">
                        {benefit.title}
                      </h2>
                      <p className="text-white text-xl ">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>

        <div className="mt-10">
          <Solve />
        </div>
      </div>
    </div>
  );
};

// BenefitCard Component

export default Benefit;
