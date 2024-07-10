import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import EditorPreview from "./components/EditorPreview";
import PaneSelector from "./components/PaneSelector";
import { EditorPreviewOption } from "./constant/options";
import { DefaultMdString } from "./constant/default";

function App() {
  const [content, setContent] = useState(DefaultMdString);
  const [paneOption, setPaneOption] = useState(EditorPreviewOption.Splitter);

  const showEditor = [
    EditorPreviewOption.Editor,
    EditorPreviewOption.Splitter,
  ].includes(paneOption);
  const showPreview = [
    EditorPreviewOption.Preview,
    EditorPreviewOption.Splitter,
  ].includes(paneOption);
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-5/6 h-[40rem] border border-slate-600 rounded-lg shadow-md">
          <PaneSelector
            selected={paneOption}
            onSelect={(value: EditorPreviewOption) => {
              setPaneOption(value);
            }}
          />
          <div className="w-full h-max flex justify-center items-center">
            {showEditor && (
              <Editor content={content} onContentChange={setContent} />
            )}
            {showPreview && <EditorPreview content={content} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
