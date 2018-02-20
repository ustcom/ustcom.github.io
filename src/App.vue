<template>
    <div class="container h-100">
        <Scene
           :duration="120"
        >
            <Logo/>
            <Greeting/>
            <SkipButtons/>
            <WhyWe/>
            <AdvantageGroup>
                <Advantage :start="20" :number="1" header="Гибкость" :desc="advantage1Description"/>
                <Advantage :start="25" :number="2" header="Скорость" :desc="advantage2Description"/>
                <Advantage :start="30" :number="3" header="Понимание" :desc="advantage3Description"/>
            </AdvantageGroup>
        </Scene>
        <a class="mouse-scroll" href="#">
          <span class="mouse">
            <span class="mouse-movement">
            </span>
          </span>
            <span class="mouse-message fadeIn">scroll</span>
        </a>
    </div>
</template>

<script>
    import Scene from './components/Scene';
    import Greeting from './components/Greeting';
    import WhyWe from './components/WhyWe';
    import SkipButtons from './components/SkipButtons';
    import AdvantageGroup from './components/AdvantagesGroup';
    import Advantage from './components/Advantage';
    import Logo from './components/Logo';

    export default {
        name: 'app',
        components: {
            Scene,
            Greeting,
            WhyWe,
            SkipButtons,
            AdvantageGroup,
            Advantage,
            Logo
        },
        data() {
            return {
                advantage1Description: 'Мы стараемся во всем быть гибкими, подстраиваясь под клиента. Ведем обсуждения, составляем гибкий план.',
                advantage2Description: 'Быстрый сервис, как пуля резкий. Быстрее, чем ваша бабушка в метро',
                advantage3Description: 'Мы понимаем своих клиентов, также как они понимают нас. Шутка.'
            }
        }
    }
</script>

<style>
    @import '~bootstrap/dist/css/bootstrap.css';
    @import url('https://fonts.googleapis.com/css?family=Oswald');

    body, html {
        font-family: 'Oswald', sans-serif;
        width: 100%;
        height: 100%;
    }

    // Animations
    body {
        background: black;
        text-align: center;
    }

    @-webkit-keyframes scroll-ani {
        0% {
            opacity: 1;
            top: 29%;
        }
        15% {
            opacity: 1;
            top: 50%;
        }
        50% {
            opacity: 0;
            top: 50%;
        }
        100% {
            opacity: 0;
            top: 29%;
        }
    }

    @-moz-keyframes scroll-ani {
        0% {
            opacity: 1;
            top: 29%;
        }
        15% {
            opacity: 1;
            top: 50%;
        }
        50% {
            opacity: 0;
            top: 50%;
        }
        100% {
            opacity: 0;
            top: 29%;
        }
    }

    @keyframes scroll-ani {
        0% {
            opacity: 1;
            top: 29%;
        }
        15% {
            opacity: 1;
            top: 50%;
        }
        50% {
            opacity: 0;
            top: 50%;
        }
        100% {
            opacity: 0;
            top: 29%;
        }
    }

    .mouse-scroll {
        position: fixed;
        bottom: 25px;
        left: calc(50% - 25px);
        display: inline-block;
        line-height: 18px;
        font-size: 13px;
        font-weight: normal;
        color: #7F8C8D;
        color: #FFF;
        font-family: "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
        letter-spacing: 2px;
        text-decoration: none;
        overflow: hidden;
    }

    .mouse-scroll .mouse {
        position: relative;
        display: block;
        width: 46px;
        height: 73px;
        margin: 0 auto 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border: 3px solid grey;
        border-radius: 23px;
    }

    .mouse-scroll .mouse .mouse-movement {
        position: absolute;
        display: block;
        top: 29%;
        left: 50%;
        width: 8px;
        height: 8px;
        margin: -4px 0 0 -4px;
        background: grey;
        border-radius: 50%;
        animation: scroll-ani 2s linear infinite;
    }

    .mouse-scroll .mouse-message {
        float: left;
        margin: -200px 0 0 7px;
        padding: 0;
        animation: scroll-ani 2s linear infinite;
    }

    .mouse-scroll:hover .mouse-message {
        margin-top: 0;
    }

</style>
