<template>
  <div class="container wrapper">
        <h1>Add new Article</h1>
       <router-link to="/" class="btn btn-primary back">Back to Homepage</router-link>
       <div class="container">
           <form action="/" method="POST" @submit.prevent="addArticle" id="form">
            <div class="form-group">
                <label for="title">Enter Title</label>
                <input type="text" class="form-control" id="title" placeholder="Type title here" v-model="newTitle">
            </div>
            <div class="form-group">
                <label for="category">Select Category</label>
                <select v-model="newCategory">
                    <option 
                    name="category" 
                    id="category"  
                    v-for="category in categories"
                    :key="category.id" :value="category.value">{{category.name}}</option>                   
                </select>
            </div>
            <div class="form-group">
                <label for="author">Enter Author</label>
                <input type="text" class="form-control" id="author" placeholder="Type author here" v-model="newAutor">
            </div>
            <button type="submit" class="btn btn-outline-primary" >Submit</button>
        </form>
       </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
    data() {
        return {
            newTitle: '',
            categories: [
                {id:0, name: 'Category', value: ''},
                {id:1, name: 'Politics', value: 'Politics'},
                {id:2, name: 'Sport', value: 'Sport'},
                {id:3, name: 'Education', value: 'Education'},  
                {id:4, name: 'World', value: 'World'},
            ],
            newCategory: '',
            newAutor: '',
            socket : io('localhost:3001')
        }
    },
    methods: {
        addArticle(e) {
            if(this.newTitle != '' && this.newCategory != ''){
                var newArticle = {};
                newArticle.title = this.newTitle;
                newArticle.category = this.newCategory;
                if(this.newAutor != ''){
                    newArticle.author = this.newAutor;
                } else {
                    newArticle.author = "Author unknown"
                }
                this.socket.emit('addNewArticle', newArticle);
                this.$router.push({path:"/"});
            }
        },
    },
    mounted() {
        
    },
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
}
.wrapper {
    margin-top: 25px;
}
.back {
    margin-left: 25px;
}
form {
    margin: 60px auto;
}
</style>