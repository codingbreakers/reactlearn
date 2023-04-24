import React from "react";
import "./Style.css";
// import { FontAwesomeIcon} from  '@fortawesome/react-fontawesome'
export default function Services() {
  return (
    <>
      <div class="container-fluid my-2 ">
        <section class="dark-grey-text text-center">
          <h3 class="text-center font-weight-bold mb-4 pb-2">OUR SERVICES</h3>
          <p class="text-center text-muted w-responsive mx-auto mb-5">
            We create best website for our clients and we also solve the query
            related to our services . We create both types of webiste responsive
            as well as static on the demand of clients We provid4e 12 hours
            service to our clients.
          </p>
          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="card1 card-image">
                <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 px-md-5 rounded">
                  <div>
                    <h6 class="text-info">
                      <strong>Backend Service</strong>
                    </h6>
                    <h3 class="py-3 font-weight-bold">
                      <strong>JAVA</strong>
                    </h3>
                    <p class="pb-3">
                      Our back-end developers also collaborate with front-end
                      developers to translate their functions to user-facing
                      content in the apps interface. Back-end developers often
                      work with managers, architects, designers, researchers, IT
                      security, and many more to bring web applications to life.
                    </p>
                    <a href="/">
                      <button class="btn btn-danger btn-rounded btn-md">
                        View project
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-4">
              <div class="card card-image">
                <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 px-md-5 rounded">
                  <div>
                    <h6 class="text-info">
                      <strong>Frontend Service</strong>
                    </h6>
                    <h3 class="py-3 font-weight-bold">
                      <strong>REACT JS</strong>
                    </h3>
                    <p class="pb-3">
                      We create all types of web pages for clients in react js
                      and alsoVisual interface, adaptive design settings, code
                      editor, React components, all possibilities of CSS. Use
                      pre-made React components or build your own. Unlimited
                      customisation possibilities, no-code tools of a classic
                      editor
                    </p>
                    <a href="/">
                      <button class="btn btn-success btn-rounded btn-md">
                        
                        View project
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
