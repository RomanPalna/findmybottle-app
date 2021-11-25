import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import { toast } from 'react-toastify';
import './percentage.css';

export default function Percentage({ onSubmit }) {
  const [percente, setPercente] = useState(0);

  const handleChangePercente = e => {
    const { value } = e.currentTarget;
    setPercente(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(percente);
    toast.success(`Націнка встановлена на рівні ${percente} відсотків`);
  };

  return (
    <>
      <p>Поточна націнка становить: {percente} %</p>
      <form className="percentage" onSubmit={handleSubmit}>
        <TextField
          autoComplete="off"
          name="percente"
          type="number"
          onChange={handleChangePercente}
          value={percente}
        ></TextField>

        <Button type="submit">
          <AddTaskOutlinedIcon fontSize="large" />
        </Button>
      </form>
    </>
  );
}
