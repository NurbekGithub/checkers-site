import { Box } from "@chakra-ui/layout";
import { useEffect, useRef } from "react";

export default function AboutPage() {
  const $iframe = useRef(null);
  function resize(e) {
    e.target.style.height = `${e.target.contentWindow.document.body.scrollHeight}px`;
  }
  useEffect(() => {
    $iframe.current.style.height = $iframe.current.contentWindow.document.body.scrollHeight + "px";
  }, [])
  return (
    <Box d="flex">
      <iframe width="100%" ref={$iframe} onLoad={resize} frameBorder="0" scrolling="no" src="/html/Дойбы ойыны туралы.html"/>
    </Box>
  );
}
