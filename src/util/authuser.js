import { useNavigate } from "react-router-dom";

const users = [
  {
    id: 1,
    email: "john@example.com",
    password: "password123",
    name: "John Doe",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aMNv1yD6kdacpVdHjWO5U56ZhYZiiWjWTw&s",
    bio: "Software Developer",
  },
  {
    id: 2,
    email: "jane@example.com",
    password: "securepass",
    name: "Jane Smith",
    profilePic: "https://example.com/jane.jpg",
    bio: "UX Designer",
  },
];

let currentUser = null;

export const loginUser = (email, password) => {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    currentUser = { ...user };
    delete currentUser.password;
    return true;
  }
  return false;
};
export const registerUser = (email, password, name, profilePic, bio) => {
  if (users.some((u) => u.email === email)) {
    return false;
  }
  const newUser = {
    id: users.length + 1,
    email,
    password,
    name,
    profilePic,
    bio,
  };
  users.push(newUser);
  return true;
};

export const getCurrentUser = () => {
  return currentUser;
};

export const logout = () => {
  currentUser = null;
  const navigate = useNavigate();
  navigate("/");
};

export const updateUserProfile = (updates) => {
  if (!currentUser) return false;

  const userIndex = users.findIndex((u) => u.id === currentUser.id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updates };
    currentUser = { ...users[userIndex] };
    delete currentUser.password;
    return true;
  }
  return false;
};

export const setAuthToken = (token) => {
  localStorage.setItem("authToken", token);
};

export const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const removeAuthToken = () => {
  localStorage.removeItem("authToken");
};
