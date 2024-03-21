import React from 'react'
import { portfolio } from '../../data'
import ProjectItem from '../../components/ProjectItem'
import "./project.css"
const Project = () => {
  return (
    <section className="project section">
      <h2 className="section_title">My <span>Projects</span></h2>

      <div className="project_container container grid">
        {portfolio.map((item) => {
          return <ProjectItem key={item.id} {...item} />

        })}
      </div>
    </section>
  )
}

export default Project