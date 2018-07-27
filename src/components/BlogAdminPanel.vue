<template>
  <div class="container">
      <div v-if="!newsLoaded">
          <img src="https://goo.gl/ECtc8c" alt="" id="loading">
      </div>
      <div class="container news" v-if="newsLoaded">
            <h1>News list</h1>
            <div class="col-2">
                <router-link to="/add" class="btn btn-primary">Add new article</router-link>
            </div>
            <div class="container articles">
                <p class="header">Title</p>
                <p class="header">Category</p>
                <p class="header">Author</p>
            </div>
            <div class="container articles" v-for="article in news" :key="article.id">
                <p class="article">{{article.title}}</p>
                <p class="article">{{article.category}}</p>
                <p class="article">{{article.author}}</p>
                <hr>
            </div>
      </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
export default {
    data() {
        return {
            newsLoaded: false,
            news: [
                    
            ],
            socket : io('localhost:3001')
        }
    },
    methods: {
    },
    mounted() {
        this.socket.emit('sendNews');
        this.socket.on('sendNews', (data) => {
            setTimeout(()=>{
                this.newsLoaded = true;
            }, 1000);
            console.log(data);
            this.news = data.articles;
        });
    },
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
}

#loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.articles {
    justify-content: center;
    display: grid;
    margin-top: 30px;
    grid-template-columns: 1fr 1fr 1fr;
}
.articles p {
    display: block;
}
.header {
    display: block;
    font-weight: bolder;
    color: dimgray;
    width: 99%;
    padding: 7px 10px;
    border-radius: 11px;
    background-color: lightgray;
}
h1 {
    text-align: center;
    margin-top: 20px;
    font-weight: 800;
    color: #5112b7;
}
hr{
    margin: 10px;
    grid-column: 1 / 4;
}
.article {
    padding-left: 15px;
    padding-bottom: 0;
    margin: 0;
    align-self: center;
}
button a {
    color: #fff;
}
button:hover > a {
    text-decoration: none;
    color: darkgray;
}
</style>