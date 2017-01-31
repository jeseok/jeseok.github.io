import React from 'react'

export default function Contact({title, phone, email, socialLink}){
  const socialElm = socialLink ? <p> <a href={socialLink.url} target={'__blank'}> {socialLink.title} </a> </p> : <noscript />
  return(
    <div>
      <p> {title}</p>
      <p> {phone}</p>
      <p> {email}</p>
      {socialElm}
    </div>
  )
}
