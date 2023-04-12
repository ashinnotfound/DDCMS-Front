import './App.css';
import { Divider, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import HomeHeader from './components/header/HomeHeader';
import CommonFooter from './components/footer/CommonFooter';
import TopCompany from './components/slide/TopCompany';
import TopProduct from './components/slide/TopProduct';
import TopTags from './components/slide/TopTags';
import SearchBanner from './components/banner/SearchBanner';
import LoginUser from './components/header/LoginUser';
import NotLoginUser from './components/header/NotLoginUser';

const { Content } = Layout;

function App() {
	const userOperation = localStorage.getItem('userName') !== null?<LoginUser/>:<NotLoginUser/>
	return (
		<div className='body'>
			<HomeHeader userOperation={userOperation}> </HomeHeader>
			<div className="site-layout">
				<SearchBanner/>
				<Divider style={{ margin: '6px 0 10px 0' }} />
				<div className="content">
					<div className="main-content">
						<Outlet />
					</div>
					<div className="slide-content">
						<TopCompany />
						<TopProduct />
						<TopTags />
					</div>
				</div>
			</div>
			<CommonFooter></CommonFooter>
		</div>
	);
}

export default App;
