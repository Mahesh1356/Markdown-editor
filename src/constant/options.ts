import EditorSVG from '../../public/svg/editor.svg'
import PreviewSVG from '../../public/svg/file.svg'
import SplitterSVG from '../../public/svg/splitter.svg'

export enum EditorPreviewOption {
    Editor = 'editor',
    Preview = 'preview',
    Splitter = 'splitter'
}
export const EditorPreviewOptions = [
    {
        id: EditorPreviewOption.Editor,
        svg: EditorSVG
    },
    {
        id: EditorPreviewOption.Preview,
        svg: PreviewSVG
    },
    {
        id: EditorPreviewOption.Splitter,
        svg: SplitterSVG
    },
]