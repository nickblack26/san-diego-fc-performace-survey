'use server';
import { revalidatePath } from 'next/cache';
import { pool } from './pg';

export type User = {
	id: number;
	email: string;
};

export type SurveyRow = {
	id: number;
	submission_datetime: Date;
	user_id: number;
	player: string;
	performance_rating: number;
	culture_rating: number;
};

export type SurveyRowUpdate = {
	submission_datetime?: string;
	user_id?: number;
	player?: string;
	performance_rating?: number;
	culture_rating?: number;
};

export type SurveyRowInsert = {
	user_id?: number;
	player?: string;
	performance_rating?: number;
	culture_rating?: number;
};

export const updateSurveryValueRow = async (id: number, update: SurveyRowUpdate) => {
	const entries = Object.entries(update);
	const sqlStatements = entries.map(([key, value]) => `${key} = ${value}`);

	await pool.query(`UPDATE public.survey_values SET ${sqlStatements.toString()} WHERE id = ${id};`);
	revalidatePath('/');
};

export const createSurveyValueRow = async (insertNewValue: SurveyRowInsert) => {
	const values = Object.values(insertNewValue).map((v) => (typeof v === 'string' ? `'${v}'` : v));

	const statement = `INSERT INTO public.survey_values (user_id, player) VALUES (${values.join(', ').toString()});`;

	await pool.query(statement);
};

export const createSurveryValueRows = async (insertValues: SurveyRowInsert[]) => {
	return await Promise.all(insertValues.map((insertValue) => createSurveyValueRow(insertValue)));
};

export const deleteSurveryValueRow = async (id: number) => {
	await pool.query(`DELETE FROM public.survey_values WHERE id = ${id};`);
	revalidatePath('/');
};

export const getSurveryValues = async (date: string) => {
	await pool.query(`SELECT * from public.survey_values WHERE submission_datetime > ${date};`);
	revalidatePath('/');
};
