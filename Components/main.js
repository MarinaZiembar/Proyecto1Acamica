import Filters from './filters.js'
import CardsList from './cardsList.js'

const Main = props =>{

        return (
            <div className="main">
                <Filters handleInputChange={props.handleInputChange} fentrada={props.fentrada} fsalida={props.fsalida} />
                <CardsList fentrada={props.fentrada} fsalida={props.fsalida} pais={props.pais} precio={props.precio} tamaño={props.tamaño} />
            </div>
        )
}

export default Main;