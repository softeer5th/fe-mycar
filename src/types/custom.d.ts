type option = {
    name: string;
    img: string;
    cost?: number;
};

type color = {
    color: string;
    img: string;
    cost?: string;
    inValid?: boolean;
};

export type Toptions = {
    select: {
        options: option[];
    };
    default: {
        category: string;
        options: option[];
    }[];
};

export type Tcolors = {
    exterior: color[];
    interior: color[];
};
