<template>
    <div class="container h-100">
        <Scene
            :duration="120"
        >
            <Greeting/>
            <SkipButtons/>
            <WhyWe/>
        </Scene>
    </div>
</template>

<script>
    import Scene from './components/Scene';
    import Greeting from './components/Greeting';
    import WhyWe from './components/WhyWe';
    import SkipButtons from './components/SkipButtons';

    export default {
        name: 'app',
        components: {
            Scene,
            Greeting,
            WhyWe,
            SkipButtons
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
</style>
