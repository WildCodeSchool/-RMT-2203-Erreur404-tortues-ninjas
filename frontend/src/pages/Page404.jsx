import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Page404.css";

function Page404() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }, []);

  return (
    <div className="over404">
      <header>
        <h1 className="glitch" data-text="404">
          404
        </h1>
        <h2>Ici pas de pizza,Pas de film,retour à l&apos;accueil.</h2>
      </header>
    </div>
  );
}

export default Page404;
