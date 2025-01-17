
const { createClient } = require("@supabase/supabase-js");
const env = require("dotenv");

env.config();
const supabaseUrl = process.env.URL;
const supabaseKey = process.env.KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


const getUsers = async () => {
    try {
      const { data, error } = await supabase.from("users").select();
      if (error) throw error;
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  const createUser = async (userData) => {
    try {
      const { data, error } = await supabase.from("users").insert([userData]);
      if (error) throw error;
      return data[0]; 
    } catch (error) {
      throw error;
    }
  };
  
  const getUserByEmail = async (email) => {
    try {
      const { data, error } = await supabase.from("users").select().eq("email", email);
      if (error) throw error;
      return data[0]; // Return the user with the specified email
    } catch (error) {
      throw error;
    }
  };
  

module.exports = { createUser, getUserByEmail,getUsers };
