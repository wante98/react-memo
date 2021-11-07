import Edit from './components/Edit'
import List from './components/List'
import './index.css'

const app = {
  color: 'red'
}
const Home = () => {
    return <div className='app'>
        <Edit />
        <List />
    </div> //return 會認為是js元件
}

    export default Home
