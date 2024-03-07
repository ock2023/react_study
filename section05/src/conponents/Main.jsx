import React from "react";
import "../Main.css";

const Main = () => {
  const user = {
    name: "ock",
    isLogin: true,
  };

  return (
    <main>
      {user.isLogin ? (
        <div className="logout">로그아웃</div>
      ) : (
        <div>로그인</div>
      )}
    </main>
  );
};
export default Main;
