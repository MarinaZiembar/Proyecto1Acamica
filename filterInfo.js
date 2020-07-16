

const FilterInfo = props =>{

    const{fentrada, fsalida}=props

    var fechaentrada = new Date(fentrada);
    var dd = String(fechaentrada.getDate()+1).padStart(2, '0');
    var mm = String(fechaentrada.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = fechaentrada.getFullYear();

    var fechasalida = new Date(fsalida);
    var d = String(fechasalida.getDate()+1).padStart(2, '0');
    var m = String(fechasalida.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yy = fechasalida.getFullYear();

        return(
            <div>

               {(!fentrada||!fsalida) ?
               ("") :
               (<div className="filterinfo animate__animated animate__slideInRight">
                   <p>Hoteles disponibles <br></br>desde el <strong> {dd + '/' + mm + '/' + yyyy} </strong> hasta <strong> {d + '/' + m + '/' + yy} </strong></p>
                </div>)}
                
            </div>
        )
};

export default FilterInfo;