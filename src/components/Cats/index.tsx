import React from 'react';
import { Cat as cat } from '../../store/ducs/Cats/contracts/CatsStructure';
import './CatsStyle.scss';

interface SideBarProps {
  item: cat[] | [],
}

const Cats: React.FC<SideBarProps> = ({item}: SideBarProps): React.ReactElement => {
  return (
    <div className="img-wrapper">
      {item.map(item=>(
        <img className='cats-img' key={item.id} id={item.id} src={item.url} alt='Cats'/>
      ))}
    </div>
  );
}

export default Cats;
