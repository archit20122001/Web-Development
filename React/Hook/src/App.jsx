import { useToggle } from './hooks/useToggle';

function App() {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  return (
    <div style={{ background: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000', padding: '20px' }}>
      <h1>Custom Hook Example</h1>

      <button onClick={toggleDarkMode}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>

      <hr />

      <button onClick={toggleModal}>
        {isModalOpen ? 'Close Modal' : 'Open Modal'}
      </button>

      {isModalOpen && (
        <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
          <p>This is the modal content!</p>
        </div>
      )}
    </div>
  );
}

export default App;