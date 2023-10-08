import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
          <div className="container-lg">
            <div className="d-flex">
              <div  className="d-flex align-items-center">
                <button className={styles.button}>
                    <a href="#">
                        Try Now 
                        <span>
                          <img width="40" src="/power-svgrepo-com.svg" alt="" />
                        </span>
                    </a>
                </button>
              </div>
             
              <div className={styles.logoContainer}>
                  <div>
                    <img src="/logo.png" alt="" />
                  </div>
              </div>
            </div>
          </div>
      </header>
      <section className={styles.homepage1}>
          <div className="container-lg">
              <div className="row mb-4">
                <div className="col-lg-8">
                    <div className={styles.homepage1inner}>
                      <h1>A <span>new way</span>  to learn to <span>speak</span></h1>
                      <p>
                      This is a new way to communicate and get better at speaking. This is a new way to communicate and get better at speaking. This is a new way to communicate and get better at speaking. This is a new way to communicate and get better at speaking. This is a new way to communicate and get better at speaking.
                      </p>
                    </div>
                </div>
                <div className="col-lg-4">
                  <div className={styles.hompage1tiles}>
                      <div className={styles.hompage1tile}>
                          <div className={styles.hompage1tileImg}>
                            <img src="/hometick.png" alt="" />
                          </div>
                          <div className={styles.hompage1tiletxt}>
                            <span>Accredited</span> by Speech Therapists
                          </div>
                      </div>
                      <div className={styles.hompage1tile}>
                          <div className={styles.hompage1tileImg}>
                            <img src="/homedollar.png" alt="" />
                          </div>
                          <div className={styles.hompage1tiletxt}>
                            <span>Free </span> of charge
                          </div>
                      </div>
                      <div className={styles.hompage1tile}>
                          <div className={styles.hompage1tileImg}>
                            <img src="/hometime.png" alt="" />
                          </div>
                          <div className={styles.hompage1tiletxt}>
                            <span> &lt;30 sec </span> for results
                          </div>
                      </div>
                  </div>


                </div>
              </div>
              <div className={styles.sectionFooter}>
                <div className={styles.socialicons}>
                    <ul>
                      <li><a href="#"><img src="/discord.png" alt="" /></a></li>
                      <li><a href="#"><img src="/message.png" alt="" /></a></li>
                      <li><a href="#"><img src="/twitter.png" alt="" /></a></li>
                    </ul>
                </div>
                <div className={styles.arrowContainer}>
                  <div className={styles.arrow}>
                    <img src="/arrow.png" alt="" />
                  </div>
                </div>
              </div>
              
          </div>
      </section>
      <section className={styles.homepage2}>
          <div className="container-lg">
              <div className="row mb-4">
                <div className="col-lg-12">
                   <h2>The Problem</h2>
                   <p className={styles.home2mainp}>6-8 million people in the US have speech impairment</p>
                </div>
                <div className="col-lg-12">
                <div className={styles.hompage2tiles}>
                      <div className={styles.hompage2tile}>
                          <div className={styles.hompage2tileImg}>
                            <img src="/setting.png" alt="" />
                          </div>
                          <div className={styles.hompage2tiletxt}>
                            <h3>Little Resources</h3>
                            <p>Little to no <strong> online help apps</strong> for speech</p>
                          </div>
                      </div>
                      <div className={styles.hompage2tile}>
                          <div className={styles.hompage2tileImg}>
                            <img src="/home2dollar.png" alt="" />
                          </div>
                          <div className={styles.hompage2tiletxt}>
                            <h3>Expensive</h3>
                            <p>Speech apps cost up to  with little impact VS. speech therapists cost <strong> $30/mo</strong>  <strong> for speech</strong> </p>
                          </div>
                      </div>
                      <div className={styles.hompage2tile}>
                          <div className={styles.hompage2tileImg}>
                            <img src="/microscope.png" alt="" />
                          </div>
                          <div className={styles.hompage2tiletxt}>
                          <h3>Little Research</h3>
                            <p>Speech impairments largely  <strong>under-researched</strong></p>
                          
                          </div>
                      </div>
                  </div>
                  


                </div>
              </div>
              <div className={styles.sectionFooter}>
                <div className={styles.socialicons}>
                    <ul>
                      <li><a href="#"><img src="/discord.png" alt="" /></a></li>
                      <li><a href="#"><img src="/message.png" alt="" /></a></li>
                      <li><a href="#"><img src="/twitter.png" alt="" /></a></li>
                    </ul>
                </div>
                <div className={styles.arrowContainer}>
                  <div className={styles.arrow}>
                    <img src="/arrow.png" alt="" />
                  </div>
                </div>
              </div>
              
          </div>
      </section>
      <section className={styles.homepage2 + ' ' + styles.homepage3}>
          <div className="container-lg">
              <div className="row mb-4">
                <div className="col-lg-12">
                   <h2> <span>Unlike any </span> other speaking tool</h2>
                   <p className={styles.home2mainp}> <span>SpeakEZ</span> is the first and  <span>only browser</span> supported AI app that effectively tracks stutters and other speech disfluences. It’s your <span> personal speech therapist</span></p>
                </div>
                <div className="col-lg-12">
                <div className={styles.hompage2tiles + ' mb-2'}>
                      <div className={styles.hompage2tile}>
                          
                          <div className={styles.hompage2tiletxt}>
                            <h3>9+</h3>
                            <p>Browsers</p>
                          </div>
                      </div>
                      <div className={styles.hompage2tile}>
                          
                          <div className={styles.hompage2tiletxt}>
                            <h3>0.1<span>sec</span></h3>
                            <p>Latency</p>
                          </div>
                      </div>
                      <div className={styles.hompage2tile}>
                          
                          <div className={styles.hompage2tiletxt}>
                          <h3>$0</h3>
                            <p>Price</p>
                          
                          </div>
                      </div>
                  </div>
                  <div className={styles.hompage2tiles}>
                      <div className={styles.hompage2tile}>
                          
                          <div className={styles.hompage2tiletxt}>
                            <h3>5</h3>
                            <p>Stutter Types Identification</p>
                          </div>
                      </div>
                      <div className={styles.hompage2tile}>
                          
                          <div className={styles.hompage2tiletxt}>
                            <h3>100<span>%</span></h3>
                            <p>Real-Time</p>
                          </div>
                      </div>
                      <div className={styles.hompage2tile}>
                          
                          <div className={styles.hompage2tiletxt}>
                          <h3>95<span>%</span></h3>
                            <p>Hard-Onset</p>
                          
                          </div>
                      </div>
                  </div>


                </div>
              </div>
              <div className={styles.sectionFooter}>
                <div className={styles.socialicons}>
                    <ul>
                      <li><a href="#"><img src="/discord.png" alt="" /></a></li>
                      <li><a href="#"><img src="/message.png" alt="" /></a></li>
                      <li><a href="#"><img src="/twitter.png" alt="" /></a></li>
                    </ul>
                </div>
                <div className={styles.arrowContainer}>
                  <div className={styles.arrow}>
                    <img src="/arrow.png" alt="" />
                  </div>
                </div>
              </div>
              
          </div>
      </section>
      <section className={styles.homepage4}>
          <div className="container-lg">
             <div className="row">
               <div className="col-lg-4">
                  <div className={styles.records}>
                    <ul>
                      <li>Availability</li>
                      <li>Latency</li>
                      <li>Price</li>
                      <li>Stutters</li>
                      <li>Hard-Onset</li>
                    </ul>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className={styles.records}>
                    <ul>
                      <li>Availability</li>
                      <li>Latency</li>
                      <li>Price</li>
                      <li>Stutters</li>
                      <li>Hard-Onset</li>
                    </ul>
                  </div>
               </div>
               <div className="col-lg-4">
               <div className={styles.records}>
                    <ul>
                      <li>Availability</li>
                      <li>Latency</li>
                      <li>Price</li>
                      <li>Stutters</li>
                      <li>Hard-Onset</li>
                    </ul>
                  </div>
               </div>

             </div>
              
          </div>
      </section>
    </>
    
  );
}
