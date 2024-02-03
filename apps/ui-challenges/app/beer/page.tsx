"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Splash } from "./components/splash";
import { Welcome } from "./components/welcome";

export default function BeerPage() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setSplash(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {splash ? (
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        >
          <Splash />
        </motion.div>
      ) : (
        <Welcome />
      )}
    </AnimatePresence>
  );
}
