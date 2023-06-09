import React, { useEffect, useState } from 'react';
import styles from './Whotofollow.module.css';
import item from '../../../../DATA.json'



function Whotofollow() {

    const[data,setData]=useState([]);
    const[randomitem,setRandomitem]=useState([]);


    const getRandomItem=()=>{
        const shuffleData = data.sort(()=>0.5-Math.random());
        const selecteditem=shuffleData.slice(0,4);
        setRandomitem(selecteditem);
    };

    useEffect(()=>{
        setData(item);
        getRandomItem();
    },[data]);




  return (
    <>
    <div className={styles.followcontainer}>
        <h2 style={{margin:"5% "}}>Who to follow</h2>

       {
            randomitem.map((item)=>(
                <div className={styles.Profile} key={item.id}>
                    <img className={styles.profileimg} src={item.user_image}/>
                    <h4  >
                        <p className={styles.name}>{item.user_name}</p>
                        <p style={{margin:'8px 8px', fontSize:"12px"}}>{item.user_country}</p>   
                    </h4> 
                    <button className={styles.followbtn}>Follow</button>
                </div>
            ))
       }
    </div>
    

    </>
    
  )
}

export default Whotofollow