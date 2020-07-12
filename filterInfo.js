

const FilterInfo = props =>{

    var fentrada = new Date(props.fentrada);
    var dd = String(fentrada.getDate()+1).padStart(2, '0');
    var mm = String(fentrada.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = fentrada.getFullYear();

    var fsalida = new Date(props.fsalida);
    var d = String(fsalida.getDate()+1).padStart(2, '0');
    var m = String(fsalida.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yy = fsalida.getFullYear();


        return(
            <div>
               {(!props.fentrada||!props.fsalida) ? "" : (<div className="filterinfo"><p>Estadía de <strong>{d-dd} noches</strong><br></br>Desde el <strong> {dd + '/' + mm + '/' + yyyy} </strong> hasta <strong> {d + '/' + m + '/' + yy} </strong></p></div>)}
            </div>
        )
};

export default FilterInfo;