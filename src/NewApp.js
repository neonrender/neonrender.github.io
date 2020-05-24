import React from 'react';
import {Switch, HashRouter, Route} from "react-router-dom";
import Mountain from './SVG/mountain3.svg'
import {ReactComponent as MountainR} from "./SVG/mountain3.svg";
import Cloud1 from './SVG/clouds.svg'
import {createUseStyles} from 'react-jss'

import Cursor from './cursor.png'
import moment from 'moment'
import * as d3 from 'd3'

import HighHill from './SVG/highhill.svg'
import Hill from './SVG/hill.svg'
import Tree from './SVG/tree2.svg'
import Bush from './SVG/bush2.svg'
import Header from "./components/header";
import ArtstationPage from "./pages/artstation";
import {Layout} from "antd";

const Clouds=()=>(
    <div style={{
        width:'100%',

    }}>

    <img src={Cloud1}
         className={'cloud1'}

    />

        <img src={Cloud1}
             className={'cloud12'}

        />

        <img src={Cloud1}
             className={'cloud2'}

        />

    </div>
)

class NewApp extends React.Component{

    state={
        blur:0,
        mouseX:0,
        mouseY: 0
    }

    blurLimit=20;
    totalItems=4;

    componentDidMount() {

        let currentHour=moment().hour()

        // currentHour=1
        currentHour-=6
        currentHour=currentHour>12?12:currentHour<0?0:currentHour

        let divideFactor=6;

        let mountainShade=document.getElementsByClassName('cls-1')

        for(let shade of mountainShade){
                // shade.style.fill=d3.interpolateRgb('#fff','#Ffddcc')(Math.abs(
                //     divideFactor-currentHour
                // )/divideFactor);
            }
    }


    render(){
        
        let currentHour=moment().hour()
        // currentHour=1

        currentHour-=6
        currentHour=currentHour>12?12:currentHour<0?0:currentHour

        let divideFactor=6;
        // currentHour=2

        const useStyles=createUseStyles({
            'cls-1':{
                fill:'red'
            }
        })

        
        return(
            <HashRouter>

                    <div style={{
                position:'absolute',
                width:'100%',
                height:'100%',
                overflow:'hidden',

                backgroundImage:`
                linear-gradient(60deg,
                 ${d3.interpolateRgb('#3A86FF','#001F54')(Math.abs(
                    divideFactor-currentHour
                )/divideFactor)
                }
                 -10%,
                 ${d3.interpolateRgb('#ffffff99','#00000006')(Math.abs(
                    divideFactor-currentHour
                )/divideFactor)
                    }
                    70%
                 ),
                linear-gradient(
                
                ${d3.interpolateRgb('#3A86FF','#001F54')(Math.abs(
                    divideFactor-currentHour
                )/divideFactor)}
                -10%
                ,
                ${d3.interpolateRgb('#3A86FF','#FB5607')(Math.abs(
                     divideFactor-currentHour
                )/divideFactor)}
                20% 40%
                ,
                
                white 80%
                
                )`,
                cursor: `url(${Cursor}),auto`
            }}
                 onMouseMove={(e)=>{
                     this.setState({
                         mouseX:e.screenX*20/(window.screen.availWidth),
                         mouseY:e.screenY*20/(window.screen.availHeight)
                     })
                 }}
                 onTouchMove={(e)=>{
                     let newBlur=this.state.blur+e.deltaY/100;
                     this.setState({
                         blur:(newBlur<0)?0:(newBlur>this.blurLimit)?this.blurLimit:newBlur
                     })
                 }}
            onWheel={(e)=>{
                let newBlur=this.state.blur+e.deltaY/100;
                this.setState({
                    blur:(newBlur<0)?0:(newBlur>this.blurLimit)?this.blurLimit:newBlur
                })
            }}
            >

                <div style={{position:'absolute',width:'100%',
                    overflow:'hidden',
                    filter:`blur(${this.state.blur}px)`,
                    bottom:'35%',
                    transform:`scale(${1.3-(this.state.blur/this.blurLimit)*0.2},${1.3-this.state.blur*0.2/this.blurLimit})`
                }}>
                    {/*<div style={{

                        backgroundColor:'#7180AC',
                        height:80,
                        width:'100%',
                        marginBottom:-2,
                    }}>
                    </div>*/}
                    <MountainR
                        style={{
                            // filter: `contrast(50%) sepia(100%) hue-rotate(-50deg) brightness(200%)`
                        }}
                    />
                    {/*<ReactSVG src={Mountain}

                         width={'100%'}
                    />*/}
                    <div
                        style={{
                            position:'absolute',
                            width:'100%',
                            top:'0%',
                            left:'25%',
                            color:'black',
                            fontWeight:'500'
                        }}
                    >
                        neonrender
                    </div>
                </div>

                <div style={{position:'absolute',width:'100%',height:'100%',zIndex:1,
                    objectFit:'cover',
                    filter:`blur(${Math.abs(this.blurLimit/this.totalItems-this.state.blur)}px)`,
                    bottom:'10%',
                    transform:`scale(${1.3-(this.state.blur/this.blurLimit)*0.2},${1.3-this.state.blur*0.2/this.blurLimit})`
                }}>
                <img src={Hill}
                width={'70%'}
                     style={{
                         position:'absolute',
                         bottom:'10%'
                     }}

                />
                </div>
                <div style={{position:'absolute',width:'70%',
                    left:'0%',
                    bottom:'0%',
                    height:'20%',
                    borderRadius:'0% 50% 50% 0%',
                    overflow:'hidden',
                    filter:`blur(${Math.abs(2*this.blurLimit/this.totalItems-this.state.blur)}px)`,
                    backgroundImage:`linear-gradient(
                    90deg,
                        ${'#3A86FF'},
                        #eef
                    )`,
                    transform:`scale(${1.6-this.state.blur*0.5/this.blurLimit},${1.5-this.state.blur*0.5/this.blurLimit})`
                }}>

                </div>
                <div style={{position:'absolute',width:'100%',zIndex:2,
                    bottom:'5%',
                    right:'10%',
                    overflow:'hidden',
                    display:'flex',
                    justifyContent:'flex-end',
                    filter:`blur(${Math.abs(3*this.blurLimit/this.totalItems-this.state.blur)}px)`,

                    transform:`scale(${1.6-this.state.blur*0.5/this.blurLimit},${1.5-this.state.blur*0.5/this.blurLimit})`
                }}>
                    <img src={Tree}
                    width={'20%'}
                    />
                </div>
                {/*<div style={{position:'absolute',width:'100%',
                    bottom:-10,
                    overflow:'hidden',
                    height:'100%',
                    filter:`blur(${Math.abs(4*this.blurLimit/this.totalItems-this.state.blur)}px)`,

                    transform:`scale(${1.5-this.state.blur*0.5/this.blurLimit},${1.5-this.state.blur*0.5/this.blurLimit})`
                }}>
                    <img src={Bush}
                         width={'50%'}
                         style={{
                             position:'absolute',
                             bottom:0
                         }}

                    />

                    <img src={Bush}
                         style={{
                             position:'absolute',
                             right:-2,
                             bottom:0
                         }}
                         width={'52%'}

                    />
                    <div style={{
                        position:'absolute',
                        bottom:4,
                        width:'100%'
                    }}>
                    <Header/>
                    </div>
                </div>*/}
            </div>
            </HashRouter>
        );
    }
}

export default NewApp;