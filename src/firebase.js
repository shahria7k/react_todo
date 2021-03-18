import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBYG59Mq9SQohKh6QbMd1JlQWUnuddip0w",
	authDomain: "sudo-todo.firebaseapp.com",
	databaseURL: "https://sudo-todo.firebaseio.com",
	projectId: "sudo-todo",
	storageBucket: "sudo-todo.appspot.com",
	messagingSenderId: "431717513554",
	appId: "1:431717513554:web:ef62b297635361da36a28b",
	measurementId: "G-R40Z67XSWF",
});
const DB = firebaseApp.firestore();
export default DB;
