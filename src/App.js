import Alcohol from './components/Alcohol/Alcohol';
import Finder from './components/Finder/Finder';
import Dropdown from './components/Dropdown/Dropdown';

export default function App() {
  return (
    <div>
      <Dropdown />
      <Finder />
      <ul>
        <Alcohol />
      </ul>
    </div>
  );
}
