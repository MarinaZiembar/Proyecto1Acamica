
const Price = props => {

    let array=[1,2,3,4];
    let filtro= array.filter(num => num <= props.cost); 

    return(
        <div>
            {filtro.map(sign => (<img src='../images/price.png' alt='price'/>))}
        </div>
    )
}

export default Price;