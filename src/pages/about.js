import React from 'react';
import {Card, Row, Col, Avatar, Divider} from "antd";
import logo from '../neonrenderlogo.png';
import {constantText} from "../values/text";

class AboutPage extends React.Component{

    render() {
        return(
            <div style={{padding:8}}>
                <Card>
                    <Row type={'flex'} justify={'center'}>
                        <Avatar size={128} icon={'user'} src={logo}/>

                    </Row>
                    <Divider/>
                    <Row type={'flex'} justify={'center'}>
                        <p style={{width:'50%',textAlign:'center'}}>
                        {constantText.about}
                        </p>
                    </Row>
                </Card>
            </div>
        );
    }

}

export default AboutPage;