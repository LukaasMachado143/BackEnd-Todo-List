import fastify, { FastifyInstance } from "fastify";
import { taskRoutes } from "./routes/TaskRoutes";
import firebase from "firebase-admin";
const server: FastifyInstance = fastify();

server.register(taskRoutes, { prefix: "/task" });

const firebaseConfig = {
  apiKey: "AIzaSyCa7PtL7vBgsW2p06xdVBkkAoksOldaxzE",
  authDomain: "crud-todo-list-565c2.firebaseapp.com",
  projectId: "crud-todo-list-565c2",
  storageBucket: "crud-todo-list-565c2.appspot.com",
  messagingSenderId: "8325595713",
  appId: "1:8325595713:web:693d69dfefc4fe608f7cc0",
};

firebase.initializeApp(firebaseConfig);

server.listen({ port: 3000 }, () => {
  console.log("Server is running");
});
