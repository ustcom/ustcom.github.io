<template>
    <div class="news-item" :style="style">
        <div class="number"> {{ this.number }}.</div>
        <div class="news">
            <slot></slot>
            <div class="date">
                {{ this.date }}
            </div>
        </div>

    </div>
</template>

<script>
    import {animationable} from "../mixins/animationable";

    export default {
        name: "news-item",
        mixins: [animationable],
        data() {
          return {
              translateX: 0,
              animation: [
                  {
                      time: {
                          from: this.startAnimation,
                          duration: 10
                      },
                      properties: {
                          translateX: {
                              from: 0,
                              to: 300
                          },
                      }
                  }
              ]
          }
        },
        computed: {
          style() {
              return {
                  transform: `translate(${this.translateX}px, 0)`
              }
          }
        },
        props: {
            number: {
                type: Number
            },
            startAnimation: {
                type: Number
            },
            date: {
                type: String
            }
        },
    }
</script>

<style scoped>
    .news-item {
        display: flex;
        align-content: flex-end;
        width: 280px;
        margin-bottom: 15px;
        transition: .300s ease all;
    }

    .news-item:hover .number {
        background: black;
        color: white;
        cursor: pointer;
        transition: .300s ease all;
        border-radius: 3px;
    }

    .number {
        font-size: 56px;
        margin-top: -12px;
        margin-right: 10px;
        transition: .300s ease all;
        padding: 0 2px;
    }

    .date {
        color: darkgrey;
        font-size: 15px;
        ;
    }
    .news {
        text-align: left;
    }
</style>