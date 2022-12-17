import React from 'react'
import {
    InnerContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    SubTittle,
    BtnWrap,
    ImgWrap,
    Img,

} from './InfoElements'
import { Button } from '../ButtonElement'

const InfoSection = ({ lightBg, imgStart, topLine, lightText, darkText,
  headline,description, id, buttonLabel,alt,  img, primary, dark, dark2
 }) => {
  return (
    <>
    <InnerContainer lightBg={lightBg} id={id}>
       <InfoWrapper imgStart={imgStart}>
        <InfoRow>
            <Column1>
             <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <SubTittle darkText={darkText}>{description}</SubTittle>
                <BtnWrap>
                    <Button 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}

                    to='home'>{buttonLabel}</Button>
                </BtnWrap>
             </TextWrapper>
            </Column1>
            <Column2>
             <ImgWrap>
               <Img src={img} alt={alt}/>
             </ImgWrap>
            </Column2>
        </InfoRow>
       </InfoWrapper>
    </InnerContainer>

    </>
  )
}

export default InfoSection