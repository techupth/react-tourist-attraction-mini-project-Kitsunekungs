import React from "react";

function Infos({ title, url, description, tag, photos }) {
  return (
    <div
      className="result"
      style={{
        display: "flex",
        flexDirection: "row",

        padding: "1%",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <ul>
        <li>
          <img
            src={photos[0]}
            style={{ width: "30%", borderRadius: "8px", marginRight: "32px" }}
          />
          <div>
            <h2
              onClick={() => {
                window.open(url);
              }}
            >
              {title}
            </h2>
            <div>{description?.slice(0, 100)}</div>
            <a href={url} target="_blank">
              อ่านต่อ
            </a>
            <div>{tag}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Infos;
