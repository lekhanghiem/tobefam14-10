'use client';

import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

// Tạo kiểu cho Item bằng MUI
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: '30px',
  justifyContent: 'center',
  display: 'flex',
  // flexDirection: 'column',
  // alignItems: 'center',
  background: 'rgba(6, 100, 153, 0.3)',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  position: 'relative',
}));

interface ComprehensiveItem {
  title: string;
  description: string;
  imageSrc: string;
  imgSize: { width: number; height: number };
}

const Comprehensive: React.FC = () => {
  const items: ComprehensiveItem[] = [
    {
      title: 'Easy to use',
      description:
        'Everyone can easily apply the EG FARM cycle without investing in additional hardware, software or human resources.',
      imageSrc: '/images/HOME/imgComPrehenSive1.png',
      imgSize: { width: 86, height: 120 }, // Kích thước cho hình ảnh đầu tiên
    },
    {
      title: 'Management and retrieval',
      description:
        'TE-FOOD can be integrated with existing software systems, used as an internal quality cycle management tool, can provide any traceability information suitable for any platform technology platform and "Smart City" model.',
      imageSrc: '/images/HOME/imgComPrehenSive2.png',
      imgSize: { width: 100, height: 150 },
    },
    {
      title: 'Smart identification tool',
      description:
        'Identification tools are attached to livestock, transport vehicles, and fresh food packages to track items throughout the supply chain. Fresh food products in retail stores may be traceable and may contain some information related to food safety.',
      imageSrc: '/images/HOME/imgComPrehenSive3.png',
      imgSize: { width: 155, height: 130 },
    },
  ];

  return (
    <div className="h-full w-full py-3 relative">
      <div className="">
        <Image
          src="/images/HOME/bgRightComPreHenSive.png"
          alt="Background"
          width={729}
          height={769}
          className="absolute right-0"
          layout="intrinsic"
        />
      </div>
      <div className="text-white mx-auto w-11/12">
        <p className="text-center font-bold text-5xl text-white px-2 py-20">
          Comprehensive solution for State Management model or Enterprise model
          and Association model
        </p>
        <div className="py-10">
          <Box sx={{ flexGrow: 1, width: '100%', mx: 'auto' }}>
            <Grid container spacing={10}>
              {items.map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Item
                    sx={{
                      height: '500px',
                    }}
                  >
                    <div className="absolute top-[-65px] right-0 flex justify-center">
                      <Image
                        src={item.imageSrc} // Corrected: use item.imageSrc
                        alt="Icon"
                        width={item.imgSize.width} // Corrected: item.imgSize.width
                        height={item.imgSize.height} // Corrected: item.imgSize.height
                        layout="intrinsic"
                      />
                    </div>
                    <div className="w-10/12 text-left py-20">
                      <div className="text-white text-4xl font-bold leading-10">
                        {item.title}
                      </div>
                      <div className="text-white text-xl py-10 leading-8">
                        {item.description}
                      </div>
                    </div>
                    <div className="absolute bottom-16 left-16">
                      <Button className="bg-gradient-to-r from-[#9df75a] to-[#02ffac] shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-green-100 hover:scale-105 rounded-3xl text-black whitespace-nowrap py-4 px-10">
                        Learn more
                      </Button>
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

export default Comprehensive;
