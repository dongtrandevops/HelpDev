export interface WebsiteDTO {
    id: number;
    name: string;
    url: string;
    img: string;
    order: number | null;
    requestHeaderCookie: string;
    isSelected: boolean
}