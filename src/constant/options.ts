import HtmlViewerSVG from '../../public/svg/editor.svg'
import PreviewSVG from '../../public/svg/file.svg'
import SplitterSVG from '../../public/svg/splitter.svg'

export enum EditorPreviewOption {
    Html = 'html',
    Preview = 'preview',
    Splitter = 'splitter'
}
export const EditorPreviewOptions = [
    
    {
        id: EditorPreviewOption.Preview,
        svg: PreviewSVG
    },
    {
        id: EditorPreviewOption.Splitter,
        svg: SplitterSVG
    },
    {
        id: EditorPreviewOption.Html,
        svg: HtmlViewerSVG
    },
]