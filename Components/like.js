import like from '../images/corat.png';
import dislike from '../images/coraf.png';

class Like extends React.Component{
    state = {
        heart:false,
    };

    handleLike = () => {
        if (this.state.heart === false) {
          return this.setState({ heart: true })
        } else {
          return this.setState({ heart: false })
        }
      };

    render(){
        return(
            <div>
                {this.state.heart === false ? 
                (<img className="heart" onClick={this.handleLike} src={dislike} alt="coraf"/>) : (<img className="heart" onClick={this.handleLike} src={like} alt="corat"/>)}
            </div> 
        )
    }
};

export default Like;