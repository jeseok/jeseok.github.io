import React from 'react'
import styles from './Styles.scss'

// String.prototype.replaceAll = function(search, replace)
// {
//     //if replace is not sent, return original string otherwise it will
//     //replace search string with 'undefined'.
//     if (replace === undefined) {
//         return this.toString();
//     }
//
//     return this.replace(new RegExp('[' + search + ']', 'g'), replace);
// };
//
// function getTimeInLang(currentLang, input){
//   const kr = Array.apply(null, new Array(12)).map(function(x, index){
//
//     return index + 1;
//   });
//
//   const en = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept","Oct","Nov", "Dec"]
//   var dataToReplace = input
//   if (currentLang != "en"){
//     for(var i in en){
//       dataToReplace = input.replaceAll(en[i], kr[i])
//     }
//   }
//
//   return dataToReplace
// }

function ListItemWithLink({ item, currentLang}){
  const optional = item.etc ? item.etc : <noscript />
  return (
    <li className={styles.list}>
      <span className={styles.time}> {item.time}</span>
      <span> <a href={item.link} target="__blank" className={styles.title}> {item.title} </a> </span>
      <span> {optional} </span>
    </li>
  )
}

export default function TimeLineListView({title, items, currentLang}){
  return(
    <div>
      <p>{title}</p>
      <ul>
        {items.map((item, index)=>(
          <ListItemWithLink
            key={index}
            item={item}
            currentLang={currentLang}
          />
        ))}
      </ul>
    </div>
  )
}
