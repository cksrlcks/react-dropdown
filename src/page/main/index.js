import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import * as ScrollMagic from 'scrollmagic';
import { TimelineLite } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
//import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';
//asset
import hero_01 from '../../img/01.png';
import hero_02 from '../../img/02.png';

ScrollMagicPluginGsap(ScrollMagic, TimelineLite);

const Main = () => {
    const Hero01 = useRef();
    const Hero02 = useRef();

    const controller = new ScrollMagic.Controller({ addIndicators: true });

    useEffect(() => {
        const tween = new TimelineLite().from('#sec2-item h3', 1, { y: '100' });

        new ScrollMagic.Scene({
            triggerElement: '#sec2-item',
        })
            .setTween(tween)
            .setPin('#sec2-item')
            .addTo(controller);
    }, []);

    document.addEventListener('scroll', () => {
        if (Hero01.current && Hero02.current) {
            Hero01.current.style.width = 100 + window.pageYOffset / 10 + '%';
            Hero02.current.style.width = 100 + window.pageYOffset / 10 + '%';
        }
    });

    return (
        <>
            <MainBlock>
                <section className="sec1">
                    <div className="hero left">
                        <img src={hero_01} alt="" ref={Hero01} />
                    </div>
                    <div className="hero right">
                        <img src={hero_02} alt="" ref={Hero02} />
                    </div>
                </section>
                <section className="sec2">
                    <div id="sec2-item">
                        <h3>Lorem ipsum dolor sit</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, at. Corporis, rem. In officia praesentium, quam, deleniti iure doloremque dolor nesciunt ipsum architecto,
                            eos pariatur aliquid beatae impedit fugit voluptate.
                        </p>
                    </div>
                </section>
                <section className="sec3"></section>
            </MainBlock>
        </>
    );
};

export default Main;

const MainBlock = styled.div`
    .sec1 {
        height: 900px;
        display: flex;
        justify-content: space-between;
        .hero {
            width: calc(50% - 1px);
            height: 100%;
            overflow: hidden;
            position: relative;
            img {
                width: 100%;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%);
                transition: width ease-in-out;
            }
        }
        .left {
            background: var(--main_color_01);
        }
        .right {
            background: var(--main_color_02);
        }
    }
    .sec2 {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        padding: 20em 0;
        h3 {
            font-size: 20px;
            margin-bottom: 30px;
        }
        p {
            font-size: 18px;
            line-height: 1.5em;
            opacity: 0.5;
        }
    }
    .sec3 {
        height: 800px;
    }
`;
