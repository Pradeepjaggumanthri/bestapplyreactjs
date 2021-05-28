import React ,{Component} from  'react';
import {connects} from 'react-redux'

class Fullloader extends Component {
    state = {  }
    render() { 

        const {loading} = this.props;

        if (!loading) return null;

        return (
            <div className="pageLoader">
                <img src={require("../images/loading.svg").default} alt=""/>
            </div>
          );
    }
}
 const mapStateToProps = state => ({loading:state.application.loading})

export default connects(mapStateToProps)(Fullloader);