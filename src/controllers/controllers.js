const { Pool } = require('pg');
const { parse } = require('pg-connection-string');

const connectionString = 'postgres://kpifuhojsljdca:bed25d89e075326a840d11e65334ff09b870c7c7defc07f11034d5a98147d07c@ec2-3-215-57-87.compute-1.amazonaws.com:5432/das12c9ecql7t5'

const config = parse(connectionString);

config.ssl = {
    rejectUnauthorized: false
}

const pool = new Pool(config);

const welcome = async(req, res)=>{
    res.status(200).json({ 
        message: 'Bievenido a la mini API Pokémon'
    });
}

const getPkmn = async (req, res) =>{
    const response = await pool.query('SELECT * FROM public.pokemon;');
    res.status(200).json(response.rows);
}

const getTypes = async (req, res) =>{
    const response = await pool.query('SELECT * FROM public.elemental_types WHERE id <> 19;');
    res.status(200).json(response.rows);
}

module.exports = {
    welcome, 
    getPkmn,
    getTypes
}