export type LogoResponse = ImageInfo[];
export type ImageInfo = {
    size: {
        width: number;
        height: number;
    };
    type: string;
    mime: string;
    src: string;
};
export declare const getLogos: (url: string) => Promise<LogoResponse>;
