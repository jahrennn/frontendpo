import './aboutimissyou.css'
import styled from 'styled-components';
import React from 'react';
const Image = styled.img`

`

const Image1 = styled.img`
height: 80%;
`
const Wrapper = styled.div`

//background-image: url("https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80");
`
const Info = styled.div`
  padding: 100px;
    text-align: center;
    background-image: url("https://res.cloudinary.com/dgb2lnz2i/image/upload/v1650369362/ty-feague-87V27nw0sS0-unsplash_v8mq0v.jpg");
    background-position-y: 45%;
    background-repeat: no-repeat;
    background-size: 2000px;
    color: #59302d;

    `
const Card = styled.div`
position: relative;
    left: 80%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 8px;
`
export default function AboutUs() {
 
  return (
    <div>
     
        <title>About Us</title>
      
      <h1>About Us</h1>
      Sole Athlete Company is a website-based online store that features and sell products specifically athletic shoes for teen to adult customers. The company provides an accessible and convenient store and offers an affordable price of a products.  We prioritize our customer service because Sole Athlete believes that their number one priority is their client.
 <br></br><br></br>
 The company made partnership with different manufactures, allowing the owners to draw on the resources and expertise of the co-partners. The business will get access to new items, expand our market reach, block competitors and get more clients. It is a cooperative relationship where both parties stand to gain financially.
 <br></br><br></br>
 In order to grow the sales and expand market reach, the company will advertise its online store and products to different platforms like LinkedIn, YouTube, Facebook, TikTok etc. Through creative advertisement, it will attract customer and reach the online store.
 <br></br><br></br>
 Sole Athlete’s goal is to make it easier for the customer to process their products, more available sizes and stocks, affordable price, new arrivals, premium quality and offers a good customer service.
      <Wrapper>
<div class="row">
  <div class="column">
    <div class="card">
    <Image src="https://res.cloudinary.com/dcuzuljwy/image/upload/v1658075291/DlVYs4eU0AA8iuE_v8lvxc.jpg"   width="100%" 
    />
      <div class="container">
        <h2 class="Name">Jahren Hans P. Dayag</h2>
        <p class="title">Programmer/Developer</p>
        <p class="desc">Hi! I'm Jahren Hans P. Dayag, one of the Programmers/Developers for this project. If you have any concern about our company or website, Kindly reach us out using the email button below. </p>
        <p class="desc">jahrendayag75@gmail.com</p>
        <form action="https://mail.google.com/mail/u/0/?#inbox?compose=CllgCJTNHzTSHFHlfDfHvSGqPKWGbmmDLwsNrXBRWDsrtSDzjQPCMgWFdnrTKvDTtFNlXtgDDXV" target="_blank">
        <p><button class="button">Email Us!</button></p>
        </form>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <Image1 src="https://res.cloudinary.com/dcuzuljwy/image/upload/v1658080545/asdasd_fo3rka.jpg"   width="100%" height="80%"
    />
      <div class="container">
        <h2 class="Name">Jerzen "JenJen" Espiritu</h2>
        <p class="title">Programmer/Developer</p>
        <p class="desc">Hi! I'm Jerzen Espiritu, one of the Programmers/Developers for this project. If you have any concern about our company or website, Kindly reach us out using the email button below. </p>
        <p class="desc">jenjeeeeenespiritu@gmail.com</p>
        <form action="https://mail.google.com/mail/u/0/?#inbox?compose=GTvVlcSMScXnbNNmXJqlHlNSGRFmsCzpFKktGlGnPqHCmKrdhfbRMcvxWqFtCDpzBvpXZpprzlwxJ" target="_blank">
        <p><button class="button" >Email Us!</button></p>
        </form>
      </div>
    </div>
  </div>
</div>
</Wrapper>
     
    </div>


  );
}
