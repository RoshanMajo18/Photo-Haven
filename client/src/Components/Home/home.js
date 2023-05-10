import React,{useState,useEffect} from 'react'
import Posts from '../Posts/posts';
import Form from '../Form/form';
import {Container,Grow,Grid} from '@material-ui/core'
// import useStyles from './styles'
import { useDispatch } from "react-redux";
import {getPosts} from '../../actions/posts'

const Home = () => {
  // const classes=useStyles()
  const dispatch =useDispatch()
  const [currentId,setCurrentId]=useState(null)

  useEffect(()=>{
    dispatch(getPosts())
  },[currentId,dispatch])
  return (
    <Grow in>
          <Container>
            <Grid container  justify-content="space-between" alignItems='stretch' spacing={3}>
                <Grid items xs={12} sm={7} style={{ marginRight: '20px' }}>
                  <Posts setCurrentId={setCurrentId}/>
                </Grid>
                <Grid items xs={12} sm={4}>
                  <Form  currentId={currentId} setCurrentId={setCurrentId}/>
                </Grid>
            </Grid>
          </Container>
    </Grow>
  )
}

export default Home
