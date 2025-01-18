
const { createClient } = require("@supabase/supabase-js");
const env = require("dotenv");

env.config();
const supabaseUrl = process.env.URL;
const supabaseKey = process.env.KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


const getUsers = async () => {
  try {
   
    const { data, error } = await supabase.from('users').select();

    if (error) {
      console.error('Supabase Error:', error.message);
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw error;
  }
};

const createUser = async (userData) => {
  try {
    const { name, email, password } = userData;

    // Insert user data into the 'users' table
    const { data, error } = await supabase.from('users').insert([{ name, email, password }]);
    if (error) {
      console.error('Error inserting user:', error);
      throw error; // Rethrow error for controller to handle
    }
    return data; // Return the newly created user
  } catch (error) {
    console.error('Unhandled error in createUser:', error.message);
    throw error; // Ensure the promise is rejected so the controller knows about it
  }
};

const getUserByEmail = async (email) => {
  try {
    const { data, error } = await supabase.from("users").select().eq("email", email);
    if (error) throw error;
    return data[0];
  } catch (error) {
    throw error;
  }
};



module.exports = { createUser, getUserByEmail, getUsers };
