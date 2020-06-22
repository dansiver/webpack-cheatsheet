// Importing model to show, that it goes to the final bundle
import Post from "@models/Post";
import "@/styles/styles.css";
import myImg from "@/assets/me";
import json from "@/assets/json";
import xml from "@/assets/data.xml";
import csv from "@/assets/data.csv";

const post = new Post('My new awesome title', myImg);

console.log('Post to string: ', post.toString());

console.log('JSON', json);
console.log('XML', xml);
console.log('CSV', csv);