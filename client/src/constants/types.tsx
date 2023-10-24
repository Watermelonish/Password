export interface IRule {
    id: number,
    header: string,
    text: string,
    status: string,
    shown: boolean,
    validation: Function,
    qr?: string
}