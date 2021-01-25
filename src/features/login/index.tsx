import { makeStyles } from "@material-ui/core/styles";
import firebase from 'firebase';
import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
    root: {
        height: "100%",
        width: "100%",
        padding: 32
    }
});

const LoginForm = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        let firebaseConfig = {
            apiKey: "AIzaSyCtShx5YU3kUfMIWzPMPDH1uDxnRX55UWw",
            authDomain: "learning-298902.firebaseapp.com",
            projectId: "learning-298902"
        };

        firebase.initializeApp(firebaseConfig)

        firebase.auth()
            .signInWithEmailAndPassword('valmirgmj@gmail.com', 'admin123')
            .then(async (response) => {
                setContent(await response.user.getIdToken());
            })
            .catch(error => {
                setContent(error.message);
            });

        setContent('XXX');
    }, []);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {content}
        </div>
    );
};

export default LoginForm;
