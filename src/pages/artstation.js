import React from 'react'

class ArtstationPage extends React.Component{

    state={}

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        window.fetch('https://www.artstation.com/csrf_token.json',
            {// *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                cache: 'no-cache',
                headers: {
                    'accept': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            }
        ).then(
            (resp)=>{
                console.log(resp.body)
            }
        )
    }


    render(){
        return(
            <div>
            here
            </div>
        )
    }

}

export default ArtstationPage