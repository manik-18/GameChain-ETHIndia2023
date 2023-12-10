import express from 'express';
import lighthouse from '@lighthouse-web3/sdk';
import fetch from 'node-fetch';
import { initializeApp } from "firebase/app";
import { collection, doc, setDoc,getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import {ethers} from 'ethers';
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import dotenv from 'dotenv';

dotenv.config(); 

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const PK = process.env.PK;
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);
const router = express.Router();

const sendNotification =  async (gametitle, gamemessage) => {
const user = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });



// Send notification, provided userAlice has a channel
const response = await user.channel.send(["*"], {
  notification: {
    title: gametitle,
    body: gamemessage,
  },
});

}


const apiKey = process.env.LIGHT_HOUSE;

// Add game
router.post('/addgame', async (req, res) => {
  try {
    const text = JSON.stringify(req.body);
    const response = await lighthouse.uploadText(text, apiKey, req.body.title);

    await setDoc(doc(db, "games", req.body.title), {
      Hash: response.data.Hash
    });

    sendNotification(req.body.title, req.body.desc);
    return res.json({ response });
  } catch (error) {
    console.error('Error adding game:', error);
    return res.status(500).json({ error: 'Error adding game.' });
  }
});














// Fetch game using cid
router.post('/fetchgame', async (req, res) => {
  const cid = req.body.hash;

  try {
    const response = await fetch(`https://gateway.lighthouse.storage/ipfs/${cid}`);
    if (response.ok) {
      const data = await response.json(); // Parse response as JSON
      return res.json({ data });
    } else {
      console.error('Failed to fetch the file. Network response was not ok.');
      return res.status(500).json({ error: 'Failed to fetch the file.' });
    }
  } catch (error) {
    console.error('Failed to save the file:', error);
    return res.status(500).json({ error: 'Failed to fetch the file.' });
  }
});





router.get('/fetchallgames', async (req, res) => {
  try {
  
    const querySnapshot = await getDocs(collection(db, "games"));
    const allGameData = [];
    const promises = querySnapshot.docs.map(async (doc) => {
      const gameData = doc.data();
      const cid = gameData.Hash;
  
      const response = await fetch(`https://gateway.lighthouse.storage/ipfs/${cid}`);
      if (response.ok) {
        const data = await response.json();
        allGameData.push({ data });
      } else {
        console.error(`Failed to fetch the file for CID ${cid}. Network response was not ok.`);
      }
    });
  
    // Wait for all promises to resolve
    await Promise.all(promises);
  
    
    return res.json({ allGameData });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed to fetch game data.' });
  }
});


export default router;
