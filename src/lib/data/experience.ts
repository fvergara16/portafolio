import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'BICE VIDA Compañia de seguros',
		description: 'Desarrollo de proyectos y requerimientos.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Providencia, Santiago',
		period: { from: new Date(2014, 3, 2) },
		skills: getSkills('ts', 'js'),
		name: 'Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Desarrollo de proyectos y requerimientos.'
	},
	{
		slug: 'software-freelance',
		company: 'Trabajando.com',
		description: 'Desarrollo de proyectos y requerimientos.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Las Condes, Santiago',
		period: { from: new Date(2013, 4, 1), to: new Date(2014, 3, 1) },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Programador PHP',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Desarrollo de proyectos y requerimientos.'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js'),
		name: 'Junior Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	}
];

export const title = 'Experience';
