// Importing model to show, that it goes to the final bundle
import Post from "./Post";
import "./styles/styles.css";
import myImg from "./assets/me.png";
import json from "./assets/json.json";
 
const post = new Post('My new awesome title', myImg);

console.log('Post to string: ', post.toString());

console.log('JSON', json);