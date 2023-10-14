import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { selectUser } from "../features/userSlice";
import { auth, db } from '../Firebase';
import { Avatar, Button, List, ListItem, ListItemText, Paper } from '@mui/material';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useDispatch, useSelector } from 'react-redux';

function Connection() {
  const currentUser = useSelector(selectUser); // Get the current user from Redux
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users from Firestore
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        const userData = [];
        querySnapshot.forEach((doc) => {
          // Exclude the current user from the list
          if (doc.id !== currentUser.uid) {
            userData.push({
              id: doc.id,
              data: doc.data(),
            });
          }
        });
        setUsers(userData);
      })
      .catch((error) => {
        console.error("Error fetching users: ", error);
      });
  }, [currentUser]);


  const sendConnectionRequest = (userId) => {
    // Check if the current user has already sent a request to this user
    db.collection("connectionRequests")
      .where("fromUserId", "==", currentUser.uid)
      .where("toUserId", "==", userId)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          console.log("You've already sent a connection request to this user.");
          return;
        }
  
        // Create a new connection request document
        db.collection("connectionRequests")
          .add({
            fromUserId: currentUser.uid,
            toUserId: userId,
            status: "pending", // You can set the initial status as "pending"
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then(() => {
            console.log("Connection request sent successfully!");
          })
          .catch((error) => {
            console.error("Error sending connection request: ", error);
          });
      })
      .catch((error) => {
        console.error("Error checking existing requests: ", error);
      });
  };
   

  return (
    <div style={{ padding: "20px", backgroundColor: "#F6F7F3", height: "100vh" }}>
    <h1>Connect with Users</h1>
    <List>
      {users.map(({ id, data }) => (
        <Paper key={id} style={{ marginBottom: "10px" }}>
          <ListItem>
            <Avatar src={data.photoUrl || ""}>{data.name[0]}</Avatar>
            <ListItemText primary={data.name} secondary={data.email} />
            <Button
              onClick={() => sendConnectionRequest(id)}
              variant="outlined"
              size="small"
            >
              Connect
            </Button>
          </ListItem>
        </Paper>
      ))}
    </List>
  </div>
  );
}

export default Connection;
