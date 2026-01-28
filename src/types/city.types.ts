export interface City {
	country: string;
	lat: string;
	local_names?: { [key: string]: string };
	lon: number;
	name: string;
}