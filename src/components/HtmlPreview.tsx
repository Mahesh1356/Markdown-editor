
type HtmlPreviewProps = {
  content: string;
};

const HtmlPreview = (props: HtmlPreviewProps) => {
  const { content } = props;

  return (
    <div className="w-full h-[35rem] overflow-auto p-4 rounded-br-lg">
      <div className="p-5">{String(content)}</div>
    </div>
  );
};

export default HtmlPreview;
