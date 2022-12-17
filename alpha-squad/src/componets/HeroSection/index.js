import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import Video2 from '../../videos/video(2).mp4'
import Video1 from '../../videos/video(1).mp4'
import { Button } from '../ButtonElement'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,

} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video1} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Alpha-Squad Security</HeroH1>
        <HeroP>
          Sign Up for a new account today and get in touch with us!
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup' 
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary={true}
          dark={true}>
            Get started {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
          
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection