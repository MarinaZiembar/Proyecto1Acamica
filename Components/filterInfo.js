import Filters from './filters.js'

class FilterInfo extends React.Component{

    render(){
        return(
            <div className='filterinfo'>
                <p>Estadía de <strong> id 2 - id 1 noches</strong></p>
                <p>Desde <strong> id 1 </strong> hasta <strong> id 2 </strong></p>
            </div>
        )
    };
};

export default FilterInfo;