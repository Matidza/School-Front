import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const SchoolPage = () => {
  const { username } = useParams();
  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://admission-school-details.up.railway.app/school/${username}`);
        setSchool(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching school data:", err);
        setError("Unable to load school data.");
        setLoading(false);
      }
    };
    getData();
  }, [username]);

  if (loading) return <p>Loading school details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {school && (
        <div className="school__details__wrapper">
          <img className="school__image" src={school.emblem} alt={`${school.username} emblem`} />
          <strong>{school.username}</strong>
          <p>{school.telephone}</p>
          <p>{school.schoolemail}</p>
          <p>{school.schooladdress}</p>
          <p>{school.provinc}</p>
        </div>

       
      )}
    </>
  );
};

export default SchoolPage;
