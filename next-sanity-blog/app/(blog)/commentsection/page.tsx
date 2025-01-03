"use client"
import React, { useState, useEffect } from "react";

export default function CommentSection() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<{ username: string; comment: string; time: string }[]>([]);

  // Load comments from localStorage on initial render
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    setComments(savedComments);
  }, []);

  // Save comments to localStorage whenever comments change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !comment) {
      alert("Please enter both username and comment");
      return;
    }

    const newComment = { username, comment, time: new Date().toLocaleString() };
    setComments([...comments, newComment]);
    setUsername("");
    setComment("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-gray-50 rounded-lg shadow">
      <h1 className="text-xl font-bold mb-4 text-center">Comment Section</h1>

      {/* Form */}
      <form onSubmit={handleAddComment} className="mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="comment">
            Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your comment"
            rows= {4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Post Comment
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((cmt, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow border"
            >
              <p className="font-semibold text-blue-600">{cmt.username}</p>
              <p className="text-gray-700 mt-1">{cmt.comment}</p>
              <span className="text-sm text-gray-500">{cmt.time}</span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
}
