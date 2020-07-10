import { ITechnologySimple } from "./Technology";
import { IImage } from './Image';
import { IProjectSimple } from "./Project";

export interface IService {
    name: string;
    slug: string;
    image: IImage;
    projects: IProjectSimple[];
    technologies: ITechnologySimple[];
}

export interface IServiceSimple {
    name: string;
    slug: string;
    image: IImage;
}