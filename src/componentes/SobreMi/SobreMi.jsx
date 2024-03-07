import "./sobreMi.css"

const SobreMi = () => {
  const educacion = [
    {
      como:"Experto en Ensamblaje, Mantenimiento y Reparación de PC's",
      institucion: 'Universidad Continental',
      tipo: 'Full Time',
      dedeHasta: 'Mar 2012 - Mar 2013'
    },
    {
      como:"Licenciatura en Ingeniería de Sistemas",
      institucion: 'Universidad Nacional de Centro del Perú',
      tipo: 'Full Time',
      dedeHasta: 'Ene 2020 - Act'
    },
    {
      como:"Desarrollo Web Full Stack",
      institucion: 'Academlo | School of Technology and Computer Science',
      tipo: 'Part Time',
      dedeHasta: 'Dic 2023 - Act'
    }
  ]
  return (
    <div className="sobreMi">
      <article className="sobreMi-biografia">
        <h2 className="sobreMi-titulo">Sobre mí</h2>
        <p className="sobreMi-texto">Soy estudiante de noveno semestre de
        Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú,
        con una fuerte pasión por la programación y el desarrollo de software. A mis 31 años, destaco por mi habilidad para trabajar en equipo, mi
        responsabilidad y puntualidad.</p>
        <p className="sobreMi-texto">Residente en Huancayo, Perú, me encanta
        enfrentar retos y estoy siempre dispuesto a aprender y adaptarme a las
        nuevas tendencias tecnológicas. Busco oportunidades para aplicar mis
        conocimientos en proyectos innovadores, contribuyendo con mi enfoque
        práctico y creativo en el campo de la informática.</p>
      </article>
      <article className="sobreMi-educacion">
        <h2 className="sobreMi-titulo">Educación</h2>
        {
          educacion.map((item, index) => (
            <article key={index} className="educacion-item">
              <div className="educacion-content">
                <div className="educacion-detalle">
                  <h3 className="educacion-titulo">{item.como}</h3>
                  <p className="educacion-institucion">{item.institucion}</p>
                </div>
                <div className="educacion-info">
                  <div className="tipo-contain">
                    <h3 className="educacion-tipo">{item.tipo}</h3>
                  </div>
                  <p className="educacion-periodo"><ion-icon name="calendar-clear-outline"></ion-icon>{item.dedeHasta}</p>
                </div>
              </div>
              <hr className="educacion-separador" />
            </article>
          ))
        }
      </article>
    </div>
  )
}
export default SobreMi