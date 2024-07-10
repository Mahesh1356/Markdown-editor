import { EditorPreviewOption, EditorPreviewOptions } from "../constant/options";
type PaneSelectorOptions = {
  selected: EditorPreviewOption;
  onSelect: (value: EditorPreviewOption) => void;
};
const PaneSelector = (props: PaneSelectorOptions) => {
  const { selected, onSelect } = props;
  return (
    <div className="w-full h-[3rem] flex items-center justify-end rounded-t-lg bg-slate-50">
      <div className="flex gap-2 p-2">
        {EditorPreviewOptions.map((i) => {
          return (
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
