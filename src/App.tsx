import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cats from './components/Cats';
import FooterButton from './components/FooterButton';
import SideBar from './components/SideBar';
import { GetCategories } from './services/api/Cats';
import { FetchCats, FetchCatsCattegory } from './store/ducs/Cats/actions';
import { getCommand } from './store/ducs/Cats/contracts/CatsStructure';
import { selectCats } from './store/ducs/Cats/selectors';

export interface ApiPath{
  page: number,
  id:string,
  type:boolean
}

function App() {
  const {items}= useSelector(selectCats);
  const [Categorin,setCategorin] = React.useState<getCommand[] | []>([]);
  const [params,setParams] = React.useState<ApiPath>({
    page: 1,
    id:'1',
    type:false
  });
  const dispatch = useDispatch();
  useEffect(()=>{
    GetCategories.fetchCategoris().then(item=>setCategorin(item));
  },[]);
  useEffect(()=>{
    const href = `limit=10&page=${params.page}&category_ids=${params.id}`;
    if(params.type===true){
      dispatch(FetchCatsCattegory(href));
      setParams(prev=>({...prev, type:false}));
    }
    else{
      dispatch(FetchCats(href));
    }
  },[params,dispatch]);
  return (
    <div className="App">
      <SideBar item={Categorin} change={setParams} value={params} />
      <div className='content-wrapper'>
      <Cats item={items}/>
      <FooterButton change={setParams} value={params}/>
      </div>
    </div>
  );
}

export default App;
