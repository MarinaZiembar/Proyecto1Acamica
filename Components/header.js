
import FilterInfo from './filterInfo.js'


class Header extends React.Component{
    render(){
        return(
            <div className='top'>
            <div class='header'>
                <img src='./images/logo.png' alt='logo'/>
            </div>
            <FilterInfo/>
            </div>   
        )
    };
};

export default Header;