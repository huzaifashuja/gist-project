import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'
import Gist from './Gist'
import { slice } from "../Redux/mainSlice";
import Load from "./Load"

const GistList = ({ data }) => {
    const { error } = useSelector(state => state.slice);
    return (
        <>
            < Wrapper >
                {!error ?
                    data && data.length > 0 ?
                        data.map((item, i) =>
                            <Gist gist={item} key={i} />
                        ) : <Load />
                    : <h1 style={{ textAlign: "center" }}>No Record Found</h1>
                }
            </Wrapper > :

        </>
    )

}

const Wrapper = styled.div`
 width:50%;
 margin:auto;
`;

export default GistList;
