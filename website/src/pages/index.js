import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

const Secure = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

const fake = (user, password) => user === "rnds" && password === "devenv";

export default function Home() {
  const [user, setUser] = useState(false);
  console.log(user);
  if (user) {
    return <Secure />;
  } else {
    return (
      <div>
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          id="usr"
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          id="pass"
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button
          onClick={() => {
            const user = document.getElementById("usr").value;
            const pass = document.getElementById("pass").value;
            if (fake(user, pass)) setUser(true);
            else setUser(false);
          }}
          type="submit"
        >
          Login
        </button>
      </div>
    );
  }
}

console.log("pages/index.js");
