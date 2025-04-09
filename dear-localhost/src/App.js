import AddPostForm from "./components/AddPostForm";
import PostList from "./components/PostList";
import { fetchUsers } from "./features/users/userSlice";
import { store } from "./app/store";
store.dispatch(fetchUsers());

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostList />
    </main>
  );
}

export default App;
