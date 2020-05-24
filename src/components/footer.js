import React from 'react';
import {Row} from "antd";

class Footer extends React.Component{

    render(){
        return(
            <Row type={'flex'} justify={'center'} style={{padding:'.5em 0 .5em 0'}}>
                © neonrender studios
            </Row>
        );
    }
}

export default Footer;