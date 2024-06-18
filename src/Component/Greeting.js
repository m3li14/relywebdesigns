import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Greeting() {

    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();

        if (hour >= 5 && hour < 12) {
            setGreeting('Good morning');
        } else if (hour >= 12 && hour < 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good evening');
        }
    }, []);


    return (
        <>
            <span className='custom-font font-bold'>{greeting}</span>
        </>
    )
}
