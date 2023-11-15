"use client"
import React, { useState } from 'react';
import styles from './login.module.css';

function Login(){
    return <div className={styles.loginCardContainer}>
        <div className={styles.loginContentWrapper}>
            <h2 className={styles.loginTitle}>Login</h2>
            <input type="email" placeholder="Enter Email..." className={styles.loginInput}/>
            <input type="password" placeholder="Enter Password..." className={styles.loginInput}/>
            <button type="submit" style={{backgroundColor:"green", color:"white", height:"50px", padding:"10px", border:"none", width:"100px", borderRadius:"10px", cursor:"pointer"}}>Submit</button>
            <p>You don't have an account? <a className={styles.signUpSpan} href='/signup'>Sign Up</a></p>
        </div>

    </div>
}
export default Login;