import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CarouselComp from './CarouselComp'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  body: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '0 30px'
  },
  animatedItem: {
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`
  },
  animatedItemExiting: {
    animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0,
    transform: 'translateY(-200%)'
  },
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-200%)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },
  '@keyframes myEffectExit': {
    '0%': {
      opacity: 1,
      transform: 'translateY(0)'
    },
    '100%': {
      opacity: 0,
      transform: 'translateY(-200%)'
    }
  }
}))

const Home = () => {
  const classes = useStyles()
  const [exit, setExit] = React.useState(false)

  return (
    <div
      className={clsx(classes.animatedItem, {
        [classes.animatedItemExiting]: exit
      })}
    >
      <center>
        <Grid>
          <Box
            className={classes.body}
            alignItems="flex-start"
            justifyContent="center"
            flexWrap="wrap"
            flexDirection="row"
          >
            <CarouselComp />
            <Typography variant="h3">Welcome to Pin It!</Typography>
            <Typography variant="overline">
              It's the reader for all your offline needs.
            </Typography>
            <Button onClick={() => setExit(true)}>
              CLICK TO FIND OUT MORE
            </Button>
          </Box>
        </Grid>
      </center>
      {/*
      { exit && <Button onClick={() => setExit(false)}>Click to enter</Button>} */}
    </div>
  )
}

export default Home
