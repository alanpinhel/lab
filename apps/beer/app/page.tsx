"use client";

import { Splash } from "@/components/splash";
import { Welcome } from "@/components/welcome";
import { useEffect, useState } from "react";

export default function Home() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setSplash(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  return <>{splash ? <Splash /> : <Welcome />}</>;
}
