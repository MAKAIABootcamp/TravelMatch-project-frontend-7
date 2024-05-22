import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetDestinos } from "../../redux/destinos/destinosActions";
import "../Blog/blog.scss"

function Blog() {
  const dispatch = useDispatch()

  const { destinos } = useSelector(store => store.destinos);

  useEffect(() => {
    dispatch(actionGetDestinos())
  }, [dispatch]);


  return (
    <>

      <section className="section_blog">
        <h2 className='title'>Blog de viaje</h2>
        {/* --------------------- */}
        <section>
          {
            destinos.length ? destinos.map(item => <span key={item.id}>{item.nombre}</span>) : null
          }
        </section>
        {/* ---------------------- */}
        <div className="container">
          <div className="container_blog">
            <p className="text">¡Jardín, Antioquia es un lugar encantador para visitar en Colombia! Este pueblo pintoresco está ubicado en el suroeste de Antioquia, en una región montañosa que ofrece paisajes impresionantes, una rica historia cultural y una atmósfera tranquila y acogedora. </p>
            <div>
              <span className="text">Aquí tienes algunas cosas que podrías disfrutar al visitar Jardín:</span>
              <div class="grid">
                <div class="card">
                  <span class="icon">
                    <svg enable-background="new 0 0 32 32" id="Editable-line" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="  M27,29H5V17H3.235c-1.138,0-1.669-1.419-0.812-2.168L14.131,3.745c1.048-0.993,2.689-0.993,3.737,0l11.707,11.087  C30.433,15.58,29.902,17,28.763,17H27V29z" fill="none" id="XMLID_1_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" /><path d="  M20,29h-8v-6c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4V29z" fill="none" id="XMLID_2_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" /></svg>
                  </span>
                  <h4>Arquitectura colonial</h4>
                  <p>
                    El centro histórico de Jardín está lleno de coloridas casas coloniales con balcones de madera y techos de tejas. Pasear por sus calles empedradas es como dar un paso atrás en el tiempo.
                  </p>

                </div>
                <div class="card">
                  <span class="icon">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="Layer 21" id="Layer_21"><path d="M59,61V51h1a1,1,0,0,0,1-1V46a1,1,0,0,0-1-1H36V41h4a1,1,0,0,0,.71-.29L44.41,37H46a1,1,0,0,0,1-1V32a1,1,0,0,0-1-1H35V27h2a1,1,0,0,0,.71-.29L41.41,23H43a1,1,0,0,0,1-1V18a1,1,0,0,0-1-1H36.89A4.79,4.79,0,0,0,37,16a5,5,0,0,0-4-4.9V9.5a6.5,6.5,0,0,1,13,0V24h2V9.5a8.5,8.5,0,0,0-16-4,8.5,8.5,0,0,0-16,4V24h2V9.5a6.5,6.5,0,0,1,13,0v1.6A5,5,0,0,0,27,16a4.79,4.79,0,0,0,.11,1H21a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h1.59l3.7,3.71A1,1,0,0,0,27,27h2v4H18a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h1.59l3.7,3.71A1,1,0,0,0,24,41h4v4H4a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H5V61H1v2H63V61ZM29,16a3,3,0,0,1,6,0,3.06,3.06,0,0,1-.19,1H29.19A3.06,3.06,0,0,1,29,16Zm-7,3H42v2H22Zm3.41,4H38.59l-2,2H27.41ZM31,27h2v4H31ZM19,33H45v2H19Zm3.41,4H41.59l-2,2H24.41ZM30,41h4v4H30ZM5,47H59v2H5Zm2,4H57V61H7Z" /><rect height="2" width="2" x="46" y="26" /><rect height="4" width="2" x="16" y="26" /></g></svg>
                  </span>
                  <h4>Plaza principal</h4>
                  <p>
                    La Plaza Principal de Jardín es el corazón del pueblo, rodeada de hermosas construcciones coloniales. Es un lugar perfecto para sentarse, relajarse y disfrutar de la atmósfera tranquila del pueblo.
                  </p>
                </div>
                <div class="card">
                  <span class="icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z"
                      />
                      <path
                        d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z"
                      />
                      <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
                      <path
                        d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z"
                      />
                    </svg>
                  </span>
                  <h4>Basílica Menor de la Inmaculada Concepción</h4>
                  <p>
                    Esta impresionante iglesia de estilo neogótico es una visita obligada en Jardín. Su imponente arquitectura y sus vitrales coloridos son impresionantes.
                  </p>
                </div>
                <div class="card">
                  <span class="icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z"
                      />
                      <path
                        d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z"
                      />
                      <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
                      <path
                        d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z"
                      />
                    </svg>
                  </span>
                  <h4>Teleférico de Jardín</h4>
                  <p>
                    Para disfrutar de vistas panorámicas de Jardín y sus alrededores, puedes tomar el teleférico que te lleva hasta la cima de una montaña cercana. Desde allí, tendrás una vista espectacular de la región.
                  </p>
                </div>

                <div class="card">
                  <span class="icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z"
                      />
                      <path
                        d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z"
                      />
                      <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
                      <path
                        d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z"
                      />
                    </svg>
                  </span>
                  <h4>Cascadas y naturaleza</h4>
                  <p>
                    Los alrededores de Jardín están llenos de cascadas impresionantes y hermosos paisajes naturales. Puedes hacer caminatas por senderos que te llevan a cascadas como la de El Salto o La Cueva del Esplendor.
                  </p>
                </div>
                <div class="card">
                  <span class="icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z"
                      />
                      <path
                        d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z"
                      />
                      <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
                      <path
                        d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z"
                      />
                    </svg>
                  </span>
                  <h4>Café y gastronomía</h4>
                  <p>
                    Jardín es conocido por su excelente café, así que asegúrate de probar una taza mientras estás allí. También puedes disfrutar de la deliciosa comida antioqueña en los restaurantes locales.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default Blog