import React, { Dispatch, SetStateAction } from 'react';
import { ApiPath } from '../../App';
import './FotterButtonComponents.scss'

interface FotterProps {
  change: Dispatch<SetStateAction<ApiPath>>,
  value:ApiPath
}

const FooterButton: React.FC<FotterProps> = ({change,value}: FotterProps): React.ReactElement => { 
  const handleAddPhoto = ()=>{
    change((prev:ApiPath) => ({
      ...prev,
      page: prev.page++}));
  };
  return (
    <button onClick={()=>handleAddPhoto()} className='footer-button'>Send More</button>
  );
}

export default FooterButton;
//limit=10&page=1