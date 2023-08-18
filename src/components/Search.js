import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import { getGistForUser, getPublicGists } from '../services/gistService'
import { useDispatch, useSelector } from "react-redux";
import { slice } from "../Redux/mainSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { prevUsername } = useSelector(state => state.slice);

  const [username, setUsername] = useState('')
  const handleChange = (e) => {

    if (!e.target.value) {
      dispatch(slice.actions.setSearchData([]))
      dispatch(slice.actions.setPrevUsername(''))
      dispatch(slice.actions.setError(false))
      dispatch(slice.actions.setNetworkError(false))
    }
    setUsername(e.target.value)
  }

  const handleSearch = (event) => {
    dispatch(slice.actions.setPrevUsername(username))
    if (event.key === 'Enter') {
      if (username && username !== prevUsername) {
        getGistForUser(username).then((res) => {
          console.log(res.data)
          if (res.data.length > 0) {
            dispatch(slice.actions.setNetworkError(false))
            dispatch(slice.actions.setSearchData(res.data))
            dispatch(slice.actions.setPrevUsername(username))
          }
          else {
            dispatch(slice.actions.setError(true))
          }
        })
          .catch(err => {
            dispatch(slice.actions.setNetworkError(true))
          })
      }
    }
  }

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input placeholder="Search Gists for the username" type="text" autoFocus value={username}
          onChange={handleChange}
          onKeyDown={handleSearch}
        />
      </InputBox>
    </Wrapper>

  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

export default Search
