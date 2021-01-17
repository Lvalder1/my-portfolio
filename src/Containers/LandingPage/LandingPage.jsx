import React, { Component } from "react";
import Project from "../../Components/Project"; 
import RPS from "../../Images/rps.png";

export default class LandingPage extends Component {
    render() {
        return (     
                    <>
        
                    <Project
                        heading="Rock, Paper, Scissors"
                        link="https://lvalder1.github.io/Rock-Paper-Scissors/"
                        imgSrc={RPS} 
                        imgAlt="Rock, Paper, Scissors"/>
                    </>
                    );
                }}
   
