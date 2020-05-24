import React from 'react';
import {Card,Icon} from "antd";

class ContactPage extends React.Component{

    render() {
        return(
            <div style={{padding:8}}>
                <Card>
                    <Card>
                        <Icon type={'mail'} style={{fontSize:18}}/>&nbsp;&nbsp;&nbsp;
                        <strong>neonrender@gmail.com</strong>
                    </Card>
                </Card>
            </div>
        );
    }

}

export default ContactPage;