import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  return (
    <header>
      <Link className="" to="">
        <img src="" alt=""></img>
      </Link>
      <div>
        <Link className="" to="">
          Accueil
        </Link>
        <Link className="" to="">
          Séries
        </Link>
        <Link className="" to="">
          Films
        </Link>
        <Link className="" to="">
          Acteurs
        </Link>
        <div className>
          <Button>Connexion</Button>
          <Button>Créer votre compte</Button>
        </div>
      </div>
    </header>
  );
}
