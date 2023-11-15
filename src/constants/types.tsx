export interface IRule {
    firstTime?: boolean;
    id: number,
    header: string,
    text: string,
    status: string,
    prevStatus?:string,
    shown: boolean,
    validation: Function,
    qr?: string,
    capcha?: string,
    jigsawPuzzle?: string,
    panorama?: boolean,
}