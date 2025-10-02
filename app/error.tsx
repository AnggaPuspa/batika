"use client";
import React from "react";



export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ padding: 32, textAlign: "center" }}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset} style={{ marginTop: 16 }}>
        Try again
      </button>
    </div>
  );
}