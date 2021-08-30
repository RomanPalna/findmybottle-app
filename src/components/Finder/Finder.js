export default function Finder({ value, onChange }) {
  return (
    <label>
      Find bottles by name
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
}
