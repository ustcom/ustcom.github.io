<script>
    import {path} from 'ramda';
    import {animationable} from "../mixins/animationable";

    export default {
        mixins: [animationable],
        name: "news",
        data() {
          return {
              opacity: 1,
              animation: [
                  {
                      time: {
                          from: 0,
                          duration: 20
                      },
                      properties: {
                          opacity: {
                              from: 1,
                              to: 0
                          }
                      }
                  }
              ]
          }
        },
        computed: {
          style() {
              return {
                  opacity: this.opacity
              }
          }
        },
        render(h) {
            let i = 1;
            let startAnimation = 0;
            this.$slots.default.forEach(newsItem => {
                const props = path(['componentOptions', 'propsData'], newsItem);
                if (!props) return;
                newsItem.componentOptions.propsData.number = i++;
                newsItem.componentOptions.propsData.startAnimation = startAnimation;
                startAnimation += 5;
            });
            const header = h('div', {'class': 'news-header'}, 'Новости');

            const childrens = [header].concat(this.$slots.default);
            return h('div', {
                'class': 'news-wrapper',
                style: this.style
            }, childrens);
        }
    }
</script>

<style scoped>
    .news-wrapper {
        position: absolute;
        right: 0;
        text-align: right;
        top: 50%;
        transform: translateY(-50%);
    }

    .news-header {
        width: 150px;
        font-size: 35px;
        display: inline-block;
        border-bottom: 1px darkgrey solid;
        text-align: right;
    }
</style>