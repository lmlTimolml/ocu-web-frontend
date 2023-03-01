import React from "react";
import dynamic from "next/dynamic";
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })

export default function ComponentFormTextfield({ disclaimer }) {
  return (
    <div className="flex flex-col">
      <div className="markdown"><ReactMarkdown>{disclaimer}</ReactMarkdown></div>
    </div>
  );
}
