import { Card, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import styles from '../styles/RightGrid.module.css'

const Quotes = [
  {
    author:"Victor Hugo",
    quote:"De quelque mot profond tout homme est le disciple"
  },
  {
    author:"Honoré De Balzac",
    quote:"La vie ne va pas sans de grands oublis !"
  },
  {
    author:"Hannibal",
    quote:"Nous trouverons un chemin... ou nous en créerons un."
  },
  {
    author:"Roi de Babylone",
    quote:"Cela aussi passera"
  },
]

const QuotesCard = ()=>{
  const [activeQ,setActiveQ]= useState(0)
  useEffect(()=>{
    let current = 0;
    const cycleReviews =() =>{
      if(current ===3 ){
        current = 0
      }else{
        current +=1
      }
      setActiveQ(current)
    };
    const intervalId = setInterval(()=>{
      cycleReviews();
    },10000);
    return() => clearInterval(intervalId)
  },[])

  return(
    <div>
      {Quotes.map((theQuote,index)=>{
        const {author,quote}= theQuote;
        const count = index + 1;
        if(index==activeQ){
          return(
            <div>
              <Card bordered shadow={true} hoverable clickable css={{width:'30.5vw', height:'20vh'}}>
                <Text h2 style={{fontWeight:'normal',textAlign:'center',textDecorationLine:'underline', fontSize:19 }}>{author}</Text>
                <Text style={{ marginTop:'7%',fontWeight:'normal',textAlign:'center',fontSize:20 }}>"{quote}"</Text>
              </Card>
            </div>
          )
        }
      })

    }
    </div>
  )
}
export default QuotesCard;
