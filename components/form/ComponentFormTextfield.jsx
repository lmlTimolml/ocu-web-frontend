import React from "react";
import dynamic from "next/dynamic";
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })

export default function ComponentFormTextfield({ disclaimer }) {
  return (
    <div className="flex flex-col">
      <p  className="text-sm markdown"><ReactMarkdown>{disclaimer}</ReactMarkdown></p>
    </div>
  );
}
