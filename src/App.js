import { Route, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import Post from './components/Post';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>Test React Blog</h1>
      </header>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/:postId" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
