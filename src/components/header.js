import React from 'react';
import {withRouter} from 'react-router-dom'
import { Icon, Row, Divider} from 'antd';
import logo from '../neonrenderlogo.png';
import {Link} from "react-router-dom";

const MenuI=(props)=>
    <div style={{padding:'4px 24px',color:'white'}}>
        {props.children}
    </div>


class Header extends React.Component {

    render() {
        return(
        <div>
        <Row type={'flex'} justify={'space-between'} style={{backgroundColor:'transparent',padding:'.25em '}}>
            <Link to='/' style={{color:'white'}}>
            <img src={logo} style={{height:'3em',padding:'.5em .5em .5em .5em'}}/>
            <span style={{fontWeight:'500'}}>neonrender</span>
            </Link>

            <div
                selectedKeys={[this.props.location.pathname]}
                mode="horizontal"
                theme={'dark'}
                ac
                style={{border:'none',display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>

                <MenuI key="/blog">
                    <Link to='/blog' style={{color:'white'}}>

                        Blog
                    </Link>
                </MenuI>

                <MenuI key="/about">
                    <Link to='/about' style={{color:'white'}}>

                        About
                    </Link>
                </MenuI>

                <MenuI key="/portfolio">
                    <Link to='/portfolio' style={{color:'white'}}>

                        Gallery
                    </Link>
                </MenuI>

                <MenuI key="/contact">
                    <Link to='/contact' style={{color:'white'}}>

                        Contact
                    </Link>
                </MenuI>

            </div>

        </Row>
        </div>
        );

    }

}

export default withRouter(Header);