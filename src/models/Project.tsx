import { IConsultantSimple } from "./Consultant";
import { ITechnologySimple } from "./Technology";
import { IIndustrySimple } from "./Industri";
import { IClientSimple } from "./Client";

export interface IProject {
    name: string;
    slug: string;
    description: string;
    client: IClientSimple | null;
    industry: IIndustrySimple | null;
    technologies: ITechnologySimple[];
    consultants: IConsultantSimple[];
}

export interface IProjectSimple {
    name: string;
    slug: string;
    technologies: ITechnologySimple[];
}