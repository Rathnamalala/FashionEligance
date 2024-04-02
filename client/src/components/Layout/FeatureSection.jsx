import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import EcoIcon from '@material-ui/icons/Eco';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const FeatureCard = ({ title, description, icon }) => {
  const useStyles = makeStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '20px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      transition: 'box-shadow 0.3s ease-in-out',
      '&:hover': {
        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
      },
    },
    icon: {
      fontSize: '48px',
      marginBottom: '20px',
    },
  });

  const classes = useStyles();

  return (
    <div className="col">
      <Card className={classes.card}>
        {icon}
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="textSecondary">{description}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const FeaturesSection = () => {
  const featureData = [
    {
      title: "Trendy Fashion Picks",
      description: "Discover the latest trends in fashion with our curated collection.",
      icon: <LocalMallIcon />,
    },
    {
      title: "Sustainable Materials",
      description: "We prioritize eco-friendly and sustainable materials in our products.",
      icon: <EcoIcon />,
    },
    {
      title: "Comfortable Fit",
      description: "Experience comfort like never before with our perfectly tailored clothing.",
      icon: <AcUnitIcon />,
    },
    {
      title: "Quick Delivery",
      description: "Get your fashion fix delivered to your doorstep in no time.",
      icon: <ShoppingCartIcon />,
    },
    {
      title: "Exclusive Deals",
      description: "Unlock exclusive discounts and offers on premium fashion items.",
      icon: <FlashOnIcon />,
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-5">
      <div className="container-fluid">
        <Slider {...settings}>
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturesSection;
