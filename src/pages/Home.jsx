import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import Webd from '../components/contents/Webd'
import Website from '../components/contents/Website'
import Gsap from '../components/contents/Gsap'
import Protfolio from '../components/contents/Protfolio'
import Youtube from '../components/contents/Youtube'

const Home = () => {
    return (
        <Main title="유튜브" description = "메인페이지입니다.">
            <Today />
            <Developer />
            <Webd />
            <Website />
            <Gsap />
            <Protfolio />
            <Youtube />
        </Main>
    )
}

export default Home
