import { EditorPreviewOption, EditorPreviewOptions } from "../constant/options";
import HtmlSVG from "../../public/svg/editor.svg";
import axios from "axios";
type PaneSelectorOptions = {
  selected: EditorPreviewOption;
  onSelect: (value: EditorPreviewOption) => void;
  content: string;
  setHtml: React.Dispatch<React.SetStateAction<string>>;
};
const PaneSelector = (props: PaneSelectorOptions) => {
  const { selected, onSelect, content, setHtml } = props;
  const download = async () => {
    try {
      const response: {data: string} = await axios.post(
        "http://localhost:8080/md/to-html",
        { content }
      );
      setHtml(response.data);
    } catch (error) {
      setHtml("Something went wrong");
    }
  };
  const HtmlPreviewer = () => (
    <img
      onClick={() => {
        download();
        onSelect(EditorPreviewOption.Html)
      }}
      className={`cursor-pointer p-1 rounded-sm`}
      height={"20px"}
      src={HtmlSVG}
    />
  );
  return (
    <div className="w-full h-[3rem] flex items-center justify-end rounded-t-lg bg-slate-50">
      <div className="flex gap-2 p-2">
        {EditorPreviewOptions.map((i) => {
          return i.id === EditorPreviewOption.Html ? (
            <HtmlPreviewer />
          ) : (
            <img
              onClick={() => {
                onSelect(i.id);
              }}
              className={`cursor-pointer p-1 rounded-sm ${
                selected === i.id ? "bg-slate-200" : ""
              }`}
              height={"20px"}
              src={i.svg}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PaneSelector;
