import { IExperience } from './Experience';
import { IImage } from './Image';
import { ITechnologyLevel } from './TechnologyLevel';
import { IProjectSimple } from './Project';

export interface IConsultant {
    cv: string;
    description: string;
    experience: IExperience[];
    firstname: string;
    fullname: string;
    image: IImage;
    jobtitle: string;
    lastname: string;
    linkedin: string;
    slug: string;
    tags: number[];
    teaser: string;
    technologyLevels: ITechnologyLevel[];
    projects: IProjectSimple[];
}

export interface IConsultantSimple {
    fullname: string;
    image: IImage;
    jobtitle: string;
    slug: string;
}