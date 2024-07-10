import { useMemo, useState } from "react";
import "highlight.js/styles/panda-syntax-dark.min.css";
import { marked } from "../utils/markdown";

type EditorPreviewProps = {
  content: string;
};

const EditorPreview = (props: EditorPreviewProps) => {
  const { content } = props;
  const [preview, setPreview] = useState<string>("");

  useMemo(() => {
    setPreview(marked.parse(content).toString());
  }, [content]);

  return (
    <div className="w-full h-[35rem] overflow-auto p-4 rounded-br-lg">
      <div dangerouslySetInnerHTML={{ __html: preview }} className="p-5"></div>
    </div>
  );
};

export default EditorPreview;
