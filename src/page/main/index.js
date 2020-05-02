import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import * as ScrollMagic from 'scrollmagic';
import { TimelineLite, Power3 } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';
//asset
import hero_01 from '../../img/01.png';
import hero_02 from '../../img/02.png';
import hero_03 from '../../img/03.png';
import sec4_bg from '../../img/bg.png';

ScrollMagicPluginGsap(ScrollMagic, TimelineLite);

const Main = () => {
    const Hero01 = useRef(null);
    const Hero02 = useRef(null);

    const controller = new ScrollMagic.Controller({ addIndicators: true });

    useEffect(() => {
        const tween_sec2 = new TimelineLite();
        tween_sec2.from('.sec2-item h3 span', 1, { y: 80, ease: Power3.easeOut, delay: 0.2 }).staggerFrom('.sec2-item p div span', 1, { y: 50, ease: Power3.easeOut }, 0.05, 0.7);

        new ScrollMagic.Scene({
            triggerElement: '.sec2',
            reverse: false,
        })
            .setTween(tween_sec2)
            .addTo(controller);

        const tween_sec2_hero = new TimelineLite();
        tween_sec2_hero.to('.sec2 .white-cover', 1.2, { x: '-100%', ease: Power3.easeOut }, 'Start').from('.sec2-hero .product-img img', 1.3, { scale: 1.6, ease: Power3.easeOut }, 0.2);
        tween_sec2_hero.from('.sec2-hero .card-inner h3', 1.2, { x: -60, ease: Power3.easeOut }, 'Start').from('.sec2-hero .card-inner p', 1.2, { x: -60, ease: Power3.easeOut }, 0.2);
        new ScrollMagic.Scene({
            triggerElement: '.sec2-hero',
            offset: -100,
            reverse: false,
        })
            .setTween(tween_sec2_hero)
            .addTo(controller);

        const tween_sec3 = new TimelineLite();

        tween_sec3
            .from('.sec3 .img-01', 1.2, { y: 1280, ease: Power3.easeOut }, 'Start')
            .from('.sec3 .img-01 img', 2, { scale: 1.6, ease: Power3.easeOut }, 0.2)
            .from('.sec3 .img-02', 1.2, { y: 1280, ease: Power3.easeOut }, 0.2)
            .from('.sec3 .img-02 img', 2, { scale: 1.6, ease: Power3.easeOut }, 0.2);
        tween_sec3
            .staggerFrom(['.sec3 .container h3 div span'], 1, { y: 44, ease: Power3.easeOut, delay: 0.8 }, 0.15, 'Start')
            .from('.sec3 .container p', 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4);

        new ScrollMagic.Scene({
            triggerElement: '.sec3',
            reverse: false,
        })
            .setTween(tween_sec3)
            .addTo(controller);

        const tween_sec4 = new TimelineLite();
        tween_sec4.to('.sec4 .white-cover', 1.2, { x: '-100%', ease: Power3.easeOut }).from('.sec4 img', 1.6, { scale: 1.4, ease: Power3.easeOut, delay: -1.5 });

        new ScrollMagic.Scene({
            triggerElement: '.sec4',
            reverse: false,
            offset: -20,
        })
            .setTween(tween_sec4)
            .addTo(controller);
    }, [controller]);

    document.addEventListener('scroll', () => {
        if (Hero01.current && Hero02.current) {
            Hero01.current.style.width = 100 + window.pageYOffset / 30 + '%';
            Hero02.current.style.width = 100 + window.pageYOffset / 30 + '%';
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
                    <div className="sec2-inner">
                        <div className="sec2-item">
                            <h3>
                                <span>glass water bottle</span>
                            </h3>
                            <p>
                                <div>
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                                </div>
                                <div>
                                    <span>Neque, at. Corporis, rem. In officia praesentium, quam, </span>
                                </div>
                                <div>
                                    <span>deleniti iure doloremque dolor nesciunt ipsum architecto,</span>
                                </div>
                                <div>
                                    <span>eos pariatur aliquid beatae impedit fugit voluptate.</span>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="sec2-hero">
                        <div className="left">
                            <div className="product-img">
                                <div className="white-cover"></div>
                                <img src={hero_03} alt="" />
                            </div>
                        </div>
                        <div className="right">
                            <div className="white-cover"></div>
                            <div className="card">
                                <div className="card-inner">
                                    <h3>
                                        <div>
                                            <span>Heads together,</span>
                                        </div>
                                        <div>
                                            <span>hands together.</span>
                                        </div>
                                    </h3>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sec3">
                    <div className="sec3-inner">
                        <div className="left">
                            <div className="container">
                                <h3>
                                    <div>
                                        <span>Heads together,</span>
                                    </div>
                                    <div>
                                        <span>hands together.</span>
                                    </div>
                                    <div>
                                        <span>Impossible is nothing.</span>
                                    </div>
                                </h3>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
                                    which don't look even slightly believable.
                                </p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="img-frame img-01">
                                <img src={hero_01} alt="" />
                            </div>
                            <div className="img-frame img-02">
                                <img src={hero_02} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="sec4">
                    <div className="sec4-inner">
                        <div className="white-cover"></div>
                        <div className="img-frame">
                            <img src={sec4_bg} alt="" />
                        </div>
                        <div className="container">
                            <h3>
                                <div>
                                    <span>Heads together,</span>
                                </div>
                                <div>
                                    <span>hands together.</span>
                                </div>
                            </h3>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
                                don't look even slightly believable.
                            </p>
                        </div>
                    </div>
                </div>
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
    }
    .sec2 {
        padding: 200px 0 200px;
        .sec2-inner {
            max-width: 960px;
            margin: 0 auto 200px;
            h3 {
                font-size: 56px;
                color: #363636;
                letter-spacing: 0;
                font-weight: 800;
                margin-bottom: 30px;
                height: 1.2em;
                overflow: hidden;
                span {
                    display: block;
                }
            }
            p {
                font-size: 24px;
                line-height: 1.6em;
                opacity: 0.5;
                div {
                    height: 1.6em;
                    overflow: hidden;

                    span {
                        display: block;
                    }
                }
            }
        }
        .sec2-hero {
            height: 800px;
            display: flex;
            .white-cover {
                position: absolute;
                z-index: 2;
                background: #fff;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
            }
            .left {
                width: 50%;
                height: 100%;
                position: relative;
                .product-img {
                    width: 60%;
                    height: 68%;
                    position: absolute;
                    left: 50%;
                    top: 50px;
                    transform: translate(-50%);
                    overflow: hidden;
                    img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        width: 100%;
                    }
                }
            }
            .right {
                width: 50%;
                height: 100%;
                overflow: hidden;
                position: relative;
                .card {
                    width: 100%;
                    height: 100%;
                    background: #dd4a61;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    .card-inner {
                        width: 60%;
                        h3 {
                            font-size: 50px;
                            margin-bottom: 30px;
                            div {
                                span {
                                    display: block;
                                }
                            }
                        }
                        p {
                            font-size: 24px;
                            opacity: 0.8;
                        }
                    }
                }
            }
        }
    }
    .sec3 {
        height: 800px;
        padding: 130px 0;
        .sec3-inner {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            .left {
                width: 50%;
                .container {
                    h3 {
                        font-size: 40px;
                        color: #363636;
                        letter-spacing: 0;
                        font-weight: 800;
                        margin-bottom: 30px;
                        line-height: 1.2em;
                        div {
                            overflow: hidden;
                            height: 1.2em;
                            span {
                                display: block;
                            }
                        }
                    }
                    p {
                        font-size: 20px;
                        line-height: 1.4em;
                        opacity: 0.7;
                        padding-right: 50px;
                    }
                }
            }
            .right {
                width: 50%;
                position: relative;
                height: 300px;
                .img-frame {
                    width: 400px;
                    height: 400px;
                    position: absolute;
                    overflow: hidden;
                    img {
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                    }
                }

                .img-01 {
                    width: 420px;
                    height: 420px;
                    bottom: -140px;
                    left: 50px;
                }
                .img-02 {
                    right: -200px;
                    top: -100px;
                }
            }
        }
    }
    .sec4 {
        height: 680px;
        margin-bottom: 100px;
        padding: 0 80px;
        .sec4-inner {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            .white-cover {
                position: absolute;
                z-index: 2;
                background: #fff;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
            }
            .img-frame {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
                height: 100%;
                img {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                }
            }
        }
    }
`;
