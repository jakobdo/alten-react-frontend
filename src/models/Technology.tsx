import { IConsultantSimple } from "./Consultant";
import { IProjectSimple } from "./Project";

export interface ITechnology {
    description: string;
    name: string;
    slug: string;
    consultants: IConsultantSimple[];
    projects: IProjectSimple[];
}

export interface ITechnologySimple {
    name: string;
    slug: string;
}