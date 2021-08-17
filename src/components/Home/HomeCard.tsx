import React from 'react';

interface HomeCardProps {
    desc: string;
    img: string;
    name: string;
    onClick: (name: string) => number;
    onDelete?: (name: string) => number;
}

const HomeCard: React.FC<HomeCardProps> = ({ desc, img, name, onClick, onDelete }, HomeCardProps) => {
  return <div />;
}

export default HomeCard;