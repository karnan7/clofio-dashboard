import './App.css';
import Card from './components/Card/Card';
import Sidebar from './components/Sidebar/Sidebar';
import Table from './components/Table/Tables'

function App() {
  return (
    <div className="container">
      <div className='left-section'>
        <Sidebar/>
      </div>
      <div className='right-section'>
        <header>
          <h1>Hi, Jennie Moss</h1>
          <span>Last scanned on March 20th, 2023 11:30 PM IST</span>
        </header>
        <div className='card-section'>
          <Card type="white"/>
          <Card type="blue"/>
          <Card type="green"/>
        </div>
        <div className='table-section'>
          <Table type='buckets'/>
          <Table type='approval'/>
          <Table type='member'/>
        </div>
      </div>
    </div>
  );
}

export default App;
