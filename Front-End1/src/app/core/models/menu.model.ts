export interface Menu {
    name: string
    routerLink: string
    routerLinkActive: string
    matIcon: string
    childMenus: Menu[] | any
    isActived: boolean
    isExpanded: boolean
}