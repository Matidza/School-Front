import React , {useEffect, useState}from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [schools, setSchools] = useState([])
    const [total, setTotal] = useState(0)
    //const [pagination, setPagination] = useState(null)
    
    useEffect(() => {
        getData()
    }, [])

    let getData = async (query = "") => {
        let response = await axios.get(`http://127.0.0.1:8000/schools?query=${query}`)
        console.log('RESPONSE:', response)
        setSchools(response.data)
        setTotal(response.data.total)
        //setPagination(response.data.pagination)
    }

    let searchData = (e) => {
    e.preventDefault()
    let query = e.target.query.value
    getData(query)
  }

  return (
    <div main--container>
        <h1>
            Search {total} 28,579 schools in the M.M.M School API developed by &nbsp; 
            <a href="https://zwivhuyamukwevho.netlify.app/">
                Zwivhuya
            </a>
        </h1>
        <br/>
        <div className="form__wrapper">
          <form onSubmit={searchData} id="search_form">
            <input type="text" name="query" placeholder='Search for school...' />
            <input type="submit" value="Search" className="btn__primary"/>
          </form>
        </div>
        <br/><br/>
        
        <div className='advocate__list'>
            {schools.map((school, index) => (
                <div className="advocate__preview__wrapper" key={index}>
                    <br/>
                    <div className="advocate__preview__header">
                        <Link to={`/school/${school.username}`}>
                            <img className="advocate__preview__image" 
                            src={school.emblem} alt="..."/>
                        </Link>
                        <div className="bio--priview">
                            <strong>{school.username}</strong>
                            <br/>
                            <div> 
                                <small className="bio--preview" >{school.telephone}</small>
                                <br/>
                                <small className="bio--preview">{school.schoolemail}</small>
                                <br/>
                                <small className="bio--preview">{school.schooladdress}</small>
                                <br/>
                                <small className="bio--preview">{school.provinc}</small>
                            </div>
                            
                        </div> 
                    </div>
                </div> 
            ))}
        </div>
    </div>
  )
}

export default HomePage