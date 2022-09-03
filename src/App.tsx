import React, { useState, useRef, useCallback } from "react";
import { Container } from "react-bootstrap";

import Header from "./components/Header/Header";
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import PostList from "./components/PostList/PostList";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import usePostsFetch from "./hooks/usePostsFetch";
import Error from "./components/Error/Error";

function App() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState('')
  const {
    posts,
    nextPageId,
    loading,
    hasNextPage,
    error
  } = usePostsFetch(query, page)

  const observer = useRef<IntersectionObserver>()
  const lastPostRef = useCallback((node: HTMLDivElement) => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasNextPage) {
        setPage(nextPageId);
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasNextPage, nextPageId])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value)
    setPage('')
  }

  return (
    <div className="App">
      <Header />
      <Container>
        <SearchBar handleSearch={handleSearch}/>
        <PostList posts={posts} lastPostRef={lastPostRef} />
      </Container>
      {loading && <LoadingSpinner />}
      {error && <Error />}
    </div>
  );
}

export default App;
