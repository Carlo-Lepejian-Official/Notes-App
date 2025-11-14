import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RateLimited from "../components/RateLimited";
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard.jsx";

function HomePage() {
  const [rateLimited, setRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        setNotes(res.data);
        console.log(res.data);
        setRateLimited(false);
      } catch (error) {
        if (error.response?.status == 429) {
          setRateLimited(true);
        } else {
          toast.error("Failed to fetch notes...");
          console.error("Couldn't fetch notes: ", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />

      {rateLimited && <RateLimited />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">Loading...</div>
        )}

        {notes.length > 0 && !rateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
