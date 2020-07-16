
import FilterInfo from './filterInfo.js'


const Header = props =>{

    const{fentrada, fsalida}=props

        return(
            <div className='top'>
            <div className='header animate__animated animate__slideInDown'>
                <img src='./images/logo.png' alt='logo'/>
            </div>
            <FilterInfo fentrada={fentrada} fsalida={fsalida} />
            </div>   
        )
};

export default Header;