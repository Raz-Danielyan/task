import React, { Dispatch, SetStateAction } from 'react';
import { ApiPath } from '../../App';
import { getCommand } from '../../store/ducs/Cats/contracts/CatsStructure';
import './sideBarStyle.scss';


interface SideBarProps {
  item: getCommand[] | []
  change: Dispatch<SetStateAction<ApiPath>>,
  value:ApiPath
}

const SideBar: React.FC<SideBarProps> = ({item,change,value}: SideBarProps): React.ReactElement => {
  const handleClcikMenu = (id:string):any=>{
    change((prev:ApiPath) => ({
      ...prev,
      id:id,
      type:true
    }));
  }
  return item.length >0 ? (
    <div className="SideBar">
      <div className='SideBarStiky'>
      {item.map(item =>(
        <button onClick={()=>handleClcikMenu(item.id)} key={item.id}><span>{item.name[0].toUpperCase()}</span> <h1>{item.name}</h1></button>
      ))}
      </div>
    </div>
  ):(
    <h1>Loading...</h1>
  );
}

export default SideBar;
