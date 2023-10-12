import {App, ILuteNode, IObject, IOperation, IPosition, IProtyleOption} from "./../siyuan";

// REF: https://github.com/siyuan-note/siyuan/blob/dev/app/src/types/protyle.d.ts
export interface IProtyle {
    app: App;
    transactionTime: number;
    id: string;
    block: {
        id?: string;
        scroll?: boolean;
        parentID?: string;
        parent2ID?: string;
        rootID?: string;
        showAll?: boolean;
        mode?: number;
        blockCount?: number;
        action?: string[];
    };
    disabled: boolean;
    selectElement?: HTMLElement;
    ws?: any;
    notebookId?: string;
    path?: string;
    model?: any;
    updated: boolean;
    element: HTMLElement;
    scroll?: any;
    gutter?: any;
    breadcrumb?: {
        id: string;
        element: HTMLElement;
    };
    title?: {
        editElement: HTMLElement;
        element: HTMLElement;
    };
    background?: {
        element: HTMLElement;
        ial: Record<string, string>;
        iconElement: HTMLElement;
        imgElement: HTMLElement;
        tagsElement: HTMLElement;
        transparentData: string;
    };
    contentElement?: HTMLElement;
    options: any;
    lute?: Lute;
    toolbar?: any;
    preview?: any;
    hint?: any;
    upload?: any;
    undo?: any;
    wysiwyg?: any;
}

export class Protyle {

    public protyle: IProtyle;

    constructor(app: App, element: HTMLElement, options?: IProtyleOption)

    isUploading(): boolean

    destroy(): void

    resize(): void

    reload(focus: boolean): void

    /**
     * @param {boolean} [isBlock=false]
     * @param {boolean} [useProtyleRange=false]
     */
    insert(html: string, isBlock?: boolean, useProtyleRange?: boolean): void

    transaction(doOperations: IOperation[], undoOperations?: IOperation[]): void;
}

export class Toolbar {
    public element: HTMLElement;
    public subElement: HTMLElement;
    public subElementCloseCB: () => void;
    public range: Range;

    constructor(protyle: IProtyle)

    public render(protyle: IProtyle, range: Range, event?: KeyboardEvent)

    public showContent(protyle: IProtyle, range: Range, nodeElement: Element)

    public showWidget(protyle: IProtyle, nodeElement: HTMLElement, range: Range)

    public showTpl(protyle: IProtyle, nodeElement: HTMLElement, range: Range)

    public showCodeLanguage(protyle: IProtyle, languageElement: HTMLElement)

    public showRender(protyle: IProtyle, renderElement: Element, updateElements?: Element[], oldHTML?: string)

    public setInlineMark(protyle: IProtyle, type: string, action: "range" | "toolbar", textObj?: {
        color?: string,
        type: string
    })

    public getCurrentType(range: Range): string[]

    public showAssets(protyle: IProtyle, position: IPosition, avCB?: (url: string) => void)
}

export class Lute {
    public static WalkStop: number;
    public static WalkSkipChildren: number;
    public static WalkContinue: number;
    public static Version: string;
    public static Caret: string;

    public static New(): Lute;

    public static EChartsMindmapStr(text: string): string;

    public static NewNodeID(): string;

    public static Sanitize(html: string): string;

    public static EscapeHTMLStr(str: string): string;

    public static UnEscapeHTMLStr(str: string): string;

    public static GetHeadingID(node: ILuteNode): string;

    public static BlockDOM2Content(html: string): string;

    private constructor();

    public BlockDOM2Content(text: string): string;

    public BlockDOM2EscapeMarkerContent(text: string): string;

    public SetTextMark(enable: boolean): void;

    public SetHeadingID(enable: boolean): void;

    public SetProtyleMarkNetImg(enable: boolean): void;

    public SetSpellcheck(enable: boolean): void;

    public SetFileAnnotationRef(enable: boolean): void;

    public SetSetext(enable: boolean): void;

    public SetYamlFrontMatter(enable: boolean): void;

    public SetChineseParagraphBeginningSpace(enable: boolean): void;

    public SetRenderListStyle(enable: boolean): void;

    public SetImgPathAllowSpace(enable: boolean): void;

    public SetKramdownIAL(enable: boolean): void;

    public BlockDOM2Md(html: string): string;

    public BlockDOM2StdMd(html: string): string;

    public SetGitConflict(enable: boolean): void;

    public SetSuperBlock(enable: boolean): void;

    public SetTag(enable: boolean): void;

    public SetMark(enable: boolean): void;

    public SetSub(enable: boolean): void;

    public SetSup(enable: boolean): void;

    public SetBlockRef(enable: boolean): void;

    public SetSanitize(enable: boolean): void;

    public SetHeadingAnchor(enable: boolean): void;

    public SetImageLazyLoading(imagePath: string): void;

    public SetInlineMathAllowDigitAfterOpenMarker(enable: boolean): void;

    public SetToC(enable: boolean): void;

    public SetIndentCodeBlock(enable: boolean): void;

    public SetParagraphBeginningSpace(enable: boolean): void;

    public SetFootnotes(enable: boolean): void;

    public SetLinkRef(enalbe: boolean): void;

    public SetEmojiSite(emojiSite: string): void;

    public PutEmojis(emojis: IObject): void;

    public SpinBlockDOM(html: string): string;

    public Md2BlockDOM(html: string): string;

    public SetProtyleWYSIWYG(wysiwyg: boolean): void;

    public MarkdownStr(name: string, md: string): string;

    public IsValidLinkDest(text: string): boolean;

    public BlockDOM2InlineBlockDOM(html: string): string;

    public BlockDOM2HTML(html: string): string;
}
