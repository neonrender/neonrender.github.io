import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import {Card, Row, Col, Avatar} from "antd";
import logo from '../neonrenderlogo.png';

class HomePage extends React.Component{

    render() {
        return(
            <div style={{padding:8}}>
            <Card>
                <div style={{textAlign:'center',width:'100%'}}>No posts yet...</div>
            </Card>
            </div>
        );
    }

}

export default HomePage;