export interface IProductList {
    data: IProduct[];
    meta: Meta;
}

export interface IProduct {
    id:          number;
    name:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    slug:        string;
    href:        string;
    breadcrumbs: Breadcrumb[];
    images:      Image[];
    description: string;
    price:       number;
    count:       number;
    inCart:      boolean;
    category:    string;
    color:       string;
}

export interface Breadcrumb {
    id:   number;
    name: string;
    href: string;
}

export interface Image {
    src: string;
    alt: string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
