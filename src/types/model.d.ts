type Tmodel = {
    product: string;
    cost: number;
    category: string;
    img: string;
    options: Toption[];
};

type Toption = {
    name: string;
    img: string;
};

export default Tmodel;
