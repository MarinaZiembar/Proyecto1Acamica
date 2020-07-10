

class FilterInfo extends React.Component{

    state={
        filtros:[
            {id:1, value:" "},
            {id:2, value:" "},
            {id:3, value:"default1"},
            {id:4, value:"default2"},
            {id:5, value:"default3"}
        ]

    };

    render(){
        const { filtros } = this.state;
        return(
            <div className='filterinfo'>
                <p>Estadía de <strong>{id 2- id 1} noches</strong></p>
                <p>Desde <strong> {id 1} </strong> hasta <strong> {id 2} </strong></p>
            </div>
        )
    };
};

export default FilterInfo;