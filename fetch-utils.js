const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function getBabies(selectedSign) {
    if (selectedSign){
        //need to await client (supabase) bc it is an async
        let { data, error } = await client
            .from('beanie_babies')
            .select('*')
            .eq('astroSign', selectedSign)
            .limit(100); //to make only 100 show??
        
        return data;
    }

    let { data, error } = await client
        .from('beanie_babies')
        .select('*')
        .limit(100); 
    return data;
}

export async function getSigns()
{let { data, error } = await client
    .from('beanie_baby_astro_signs')
    .select('*');
    
return data;
}


// export async functions that fetch data