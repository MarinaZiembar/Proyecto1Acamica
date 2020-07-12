
import FilterInfo from './filterInfo.js'


const Header = props =>{
        return(
            <div className='top'>
            <div class='header'>
                <img src='./images/logo.png' alt='logo'/>
            </div>
            <FilterInfo fentrada={props.fentrada} fsalida={props.fsalida} />
            </div>   
        )
};

export default Header;