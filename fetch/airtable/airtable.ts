import Airtable from "airtable";

// Get credentials
const apiKey = process.env.AIRTABLE_KEY;

export const base = new Airtable({ apiKey: 'keyfyWSMuZYjkKfTN'}).base('app3O70OHNZNDTCxV');