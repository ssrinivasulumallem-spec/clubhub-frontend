import { createContext, useContext, useEffect, useState } from "react";

const ClubsContext = createContext();

const defaultClubs = [
  {
    id: 1,
    name: "Coding Club",
    coordinator: "Rahul",
    members: 150,
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "Dance Club",
    coordinator: "Anjali",
    members: 95,
    color: "bg-pink-600",
  },
  {
    id: 3,
    name: "Photography Club",
    coordinator: "Kiran",
    members: 70,
    color: "bg-green-600",
  },
  {
    id: 4,
    name: "Music Club",
    coordinator: "Sneha",
    members: 120,
    color: "bg-purple-600",
  },
];

export function ClubsProvider({ children }) {
  const [clubs, setClubs] = useState(() => {
    const savedClubs = localStorage.getItem("clubs");

    return savedClubs ? JSON.parse(savedClubs) : defaultClubs;
  });

  useEffect(() => {
    localStorage.setItem("clubs", JSON.stringify(clubs));
  }, [clubs]);

  const addClub = (clubName) => {
    if (!clubName || clubName.trim() === "") return;

    const newClub = {
      id: Date.now(),
      name: clubName.trim(),
      coordinator: "Not Assigned",
      members: 0,
      color: "bg-indigo-600",
    };

    setClubs((prevClubs) => [...prevClubs, newClub]);
  };

  const deleteClub = (clubId) => {
    setClubs((prevClubs) =>
      prevClubs.filter((club) => club.id !== clubId)
    );
  };

  const assignCoordinator = (clubId, coordinatorName) => {
    setClubs((prevClubs) =>
      prevClubs.map((club) =>
        club.id === Number(clubId)
          ? { ...club, coordinator: coordinatorName }
          : club
      )
    );
  };

  const updateClubName = (clubId, newName) => {
    if (!newName || newName.trim() === "") return;

    setClubs((prevClubs) =>
      prevClubs.map((club) =>
        club.id === Number(clubId)
          ? { ...club, name: newName.trim() }
          : club
      )
    );
  };

  const addMemberToClub = (clubId) => {
    setClubs((prevClubs) =>
      prevClubs.map((club) =>
        club.id === Number(clubId)
          ? { ...club, members: club.members + 1 }
          : club
      )
    );
  };

  return (
    <ClubsContext.Provider
      value={{
        clubs,
        addClub,
        deleteClub,
        assignCoordinator,
        updateClubName,
        addMemberToClub,
      }}
    >
      {children}
    </ClubsContext.Provider>
  );
}

export function useClubs() {
  return useContext(ClubsContext);
}