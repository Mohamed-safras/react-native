import React, { useState } from "react";
import "./SubStr.css";
const SubStr = () => {
  const trancate = (string, n) => {
    return string.length > n ? string.substr(0, n) + "..." : string + "";
  };
  const Seemore = () => {
    return <p>hjfshsj</p>;
  };
  const [seemore, setSeeMore] = useState("");
  return (
    <div className="substr">
      <p className={`${trancate && "subs"}`}>
        {trancate(
          ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et
        inventore nostrum enim. Voluptates enim harum illo nam deleniti.
        Voluptatem sed fugit quod eaque natus reiciendis sequi repellendus
        voluptates ab quasi, distinctio quas ipsa, temporibus sapiente a commodi
        eveniet error. Exercitationem, optio voluptatibus corporis aliquam,
        quis, nobis dolorum dignissimos ex facilis id accusantium totam
        doloremque ea a doloribus. Necessitatibus accusantium consequatur
        molestias consectetur officia quae, quaerat voluptatibus quidem enim
        praesentium deserunt aliquid, maxime velit ducimus exercitationem
        aliquam ipsum, deleniti quod animi totam! Voluptatem corporis iure
        suscipit, autem aliquid pariatur officiis earum unde non laboriosam
        voluptas reiciendis sunt repudiandae incidunt dicta ab illo nemo dolore
        odit consectetur nisi inventore magni commodi magnam. Facere ex quos
        ipsam quasi, sit illo at reprehenderit eligendi. Cupiditate, nisi! Ipsa
        voluptatibus est quis minus accusantium corrupti dolorum debitis ratione
        quod eveniet accusamus numquam natus, quaerat deserunt eaque velit cum
        magnam nam eum rem explicabo harum nesciunt.`,
          100
        )}
        <span className="seemore" onClick={() => setSeeMore(Seemore())}>
          See more<h1>{seemore}</h1>
        </span>
      </p>
    </div>
  );
};

export default SubStr;
