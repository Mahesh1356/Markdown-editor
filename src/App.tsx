import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import EditorPreview from "./components/EditorPreview";
import PaneSelector from "./components/PaneSelector";
import { EditorPreviewOption } from "./constant/options";
import { DefaultMdString } from "./constant/default";
import HtmlPreview from "./components/HtmlPreview";

function App() {
  const [content, setContent] = useState(DefaultMdString);
  const [html, setHtml] = useState('');
  const [paneOption, setPaneOption] = useState(EditorPreviewOption.Splitter);

  const showEditor = [
    EditorPreviewOption.Html,
    EditorPreviewOption.Splitter,
  ].includes(paneOption);
  const showPreview = [
    EditorPreviewOption.Preview,
    EditorPreviewOption.Splitter,
  ].includes(paneOption);

  const showHtmlPreview = [EditorPreviewOption.Html].includes(paneOption)

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-5/6 h-[40rem] border border-slate-600 rounded-lg shadow-md">
          <PaneSelector
            selected={paneOption}
            onSelect={(value: EditorPreviewOption) => {
              setPaneOption(value);
            }}
            content={content}
            setHtml={setHtml}
          />
          <div className="w-full h-max flex justify-center items-center">
            {showEditor && (
              <Editor content={content} onContentChange={setContent} />
            )}
            {showPreview && <EditorPreview content={content} />}
            {showHtmlPreview && <HtmlPreview content={html} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
