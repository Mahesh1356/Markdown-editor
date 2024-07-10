type EditorInputProps = {
  content: string;
  onContentChange: React.Dispatch<React.SetStateAction<string>>;
};

const Editor = (props: EditorInputProps) => {
  const { content, onContentChange } = props;
  return (
    <textarea
      id="editor"
      className="border-0 w-full h-[35rem] border-r border-slate-200 focus:outline-none resize-none p-4 rounded-bl-lg placeholder:italic placeholder:text-base placeholder:tracking-wider"
      placeholder="Start typing..."
      value={content}
      onChange={(e) => onContentChange(e.target.value)}
    ></textarea>
  );
};

export default Editor;
