import JobCard from '../components/JobCard'
import SearchBox from '../components/SearchBox'
import TopNavbar from '../components/TopNavbar'
import React from 'react'

const Home = () => {
    return (
        <>
            <TopNavbar />
            <SearchBox />
            <JobCard />
        </>
    )
}

export default Home
