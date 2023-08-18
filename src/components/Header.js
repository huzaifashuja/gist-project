import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import Search from './Search';
import { useDispatch, useSelector } from "react-redux";
import { getGistForUser, getPublicGists } from '../services/gistService'
import { slice } from "../Redux/mainSlice";
import GistList from './GistList'

function Header() {
  const [data, setData] = useState([])
  const { searchData, networkError } = useSelector(state => state.slice);
  const dispatch = useDispatch();


  useEffect(() => {
    getPublicGists().then((res) => {
      setData(res.data)
    }).catch((err) => {
      dispatch(slice.actions.setNetworkError(true))
    })
  }, [])

  return (
    <>
      <Wrapper>
        <Octicon name="mark-github" mega />
        <Search />
      </Wrapper>
      {!networkError ?
        <GistList data={searchData.length > 1 ? searchData : data} /> : <h1 style={{ textAlign: "center" }}>404 Not Found</h1>}
    </>
  )
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export default Header
