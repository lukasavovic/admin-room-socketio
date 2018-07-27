# Blog Admin Room - with socket io

> Blog Admin Room , Project for SAE Institute
> By Aleksandra Kocic and Luka Savovic

Users can see all the news on the Homepage. User can also add new Blog post.
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# start socket io server at port 4133
nodemon index.js

#if you want to populate database before using, you should go to http://localhost:3001/populate
database name should be userdb, and collection name should be blogPosts
