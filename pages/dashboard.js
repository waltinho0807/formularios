import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards'

export default function Dashboard() {
  return (
    <>
      <Menu/>
      <div class="d-flex">
       
      <Sidebar/>
      <Cards/>
        
    </div>
     
     
    </>
  );
}
