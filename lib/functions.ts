'use server';
import { revalidatePath } from 'next/cache';
import { pool } from './pg';

export type SurveyRow = {
	id: number;
	submission_datetime: string;
	user_name: string;
	player: string;
	performance_rating: number;
	culture_rating: number;
};

export type SurveyRowUpdate = {
	submission_datetime?: string;
	user_name?: string;
	player?: string;
	performance_rating?: number;
	culture_rating?: number;
};

export type SurveyRowInsert = {
	submission_datetime: string;
	user_name?: string;
	player?: string;
	performance_rating?: number;
	culture_rating?: number;
};

export const updateSurveryValueRow = async (id: number, update: SurveyRowUpdate) => {
	const entries = Object.entries(update);
	const sqlStatements = entries.map(([key, value]) => `${key} = ${value}`);

	await pool.query(`UPDATE public.survery_values SET ${sqlStatements.toString()} WHERE id = ${id};`);
	revalidatePath('/');
};

export const createSurveyValueRow = async (insertNewValue: SurveyRowInsert) => {
	const values = Object.values(insertNewValue).map((v) => (typeof v === 'string' ? `'${v}'` : v));

	const statement = `INSERT INTO public.survery_values VALUES (${values.join(', ').toString()});`;

	console.log(statement);

	await pool.query(statement);

	revalidatePath('/');
};

export const deleteSurveryValueRow = async (id: number) => {
	await pool.query(`DELETE FROM public.survery_values WHERE id = ${id};`);
	revalidatePath('/');
};

export const getSurveryValues = async (date: string) => {
	await pool.query(`SELECT * from public.survery_values WHERE submission_datetime > ${date};`);
	revalidatePath('/');
};
