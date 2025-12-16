export interface MenuItem {
    name: string;
    desc: string;
    price: string;
    img: string;
}

export interface Pizza extends MenuItem {}

export interface NavItem {
    label: string;
    id: string;
}

export type MenuCategory = 'pizza' | 'pasta' | 'desserts';

export interface MenuTab {
    id: MenuCategory;
    label: string;
}