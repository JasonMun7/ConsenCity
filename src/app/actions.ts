'use server'

import {supabaseBrowser} from '../lib/supabase/browser'
import {createClient} from '../lib/supabase/server'
interface PostType {
  id: number; 
  title: string;
  img_url: string;
  description: string;
  categories: string[]; 
}
const supabase = createClient()

export async function fetchData(): Promise<PostType[]>{
  const {data, error} = await supabase.from("Posts").select()
  if (error){
    throw error
  }
  return data
}