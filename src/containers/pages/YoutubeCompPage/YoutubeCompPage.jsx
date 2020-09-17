import React, { Component, Fragment } from 'react'
import YoutubeComp from '../../../components/YoutubeComp/YoutubeComp'
import {connect} from 'react-redux'

class YoutubeCompPage extends Component {
    render() {
        return(
            <Fragment>
                    <h3>Youtube {this.props.order}</h3>
                    <hr />
                    <YoutubeComp 
                    title="Berternak Lele" 
                    desc="1x ditonton, 12 hari yang lalu" 
                    minute="7:12"/>
                <YoutubeComp 
                    title="Berternak Cupang" 
                    desc="50x ditonton, 7 hari yang lalu" 
                    minute="3:10"/>
                <YoutubeComp 
                    title="Berternak Kangkuru" 
                    desc="928x ditonton, 20 hari yang lalu" 
                    minute="4:42"/>
                <YoutubeComp />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(YoutubeCompPage);