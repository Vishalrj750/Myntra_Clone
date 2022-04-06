import React from "react";
import styled from 'styled-components';

const TshirtWrapper = styled.div`
width: 100vw;
heigh: 100vh;
background-color: red;
margin-top: 15vh;
`

function Tshirts() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        fetch(`http://localhost:3001/items`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.log(err))

    }, [])

    // console.log(`data - ${ data }`)

    

    return(
        <TshirtWrapper>
            <div>
                <h1>T Shirt Component</h1>
            </div>
        </TshirtWrapper>
    )
}

export { Tshirts }