import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <input id="fName" />
    <Card
      name="Pokimane"
      img="https://media-assets-03.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-136225-pokimane-2--default--1080.jpg"
      tel="+123 333 444"
      email="p@pokimane.com"
    />
  </div>,
  document.getElementById("root")
);
