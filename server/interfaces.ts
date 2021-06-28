/*export interface User {
    name: string;
    height: string;
    mass: string;
    gender: string;
    homeworld: HomeWorld;
}*/

export interface ReturnData {
    count: number;
    next: string;
    previous: string;
    results: [Users];
}

export interface HomeWorld {
    name: string;
}

export interface Users{
    name: string;
    height: string;
    mass: string;
    gender:string;
    homeworld: string;
}


