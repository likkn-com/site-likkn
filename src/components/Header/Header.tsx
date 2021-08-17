import React from 'react';
// rfc -> TypeScript

interface HeaderProps {
    titulo: string;
}

const Header: React.FC<HeaderProps> = ({ titulo }, HeaderProps) => {

  return (
      <div>
          {titulo}
      </div>
  );
}

export default Header;