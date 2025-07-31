import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { TextField, Button } from '@mui/material';

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    mercantil: '',
    location: '',
    products: '',
    instagram: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { mercantil, location, products, instagram } = formData;

    try {
      const { error } = await supabase.from('allies').insert({
        mercantil,
        location,
        products,
        instagram,
      });

      if (error) {
        console.error('Error inserting data:', error.message);
      } else {
        alert('Registro exitoso');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextField
        label="Registro Mercantil"
        name="mercantil"
        value={formData.mercantil}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Ubicación"
        name="location"
        value={formData.location}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Productos"
        name="products"
        value={formData.products}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Instagram"
        name="instagram"
        value={formData.instagram}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Registrarse
      </Button>
    </form>
  );
};

export default SignupForm;
