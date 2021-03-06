import { TextField } from '@mui/material';
export default function Finder({ value, onChange }) {
  return (
    <label>
      <TextField
        autoComplete="off"
        id="outlined-search"
        label="Пошук"
        type="search"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
