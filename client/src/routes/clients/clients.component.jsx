import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddClient from "../../components/client/add-client.component";
import ClientItem from "../../components/client/client-item.component";
import DeleteClient from "../../components/client/delete-component.component";
import EditClient from "../../components/client/edit-client.component";
import Preloader from "../../components/preloader/preloader.component";
import {
  createFetchClients,
  createSetClients,
  GET_CLIENTS,
} from "../../store/client/client.actions";
import { selectAllClients } from "../../store/client/client.selector";
import { alertMessage } from "../../utils/initial-state/initial-state";

const Clients = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_CLIENTS);
  useEffect(() => {
    if (data != null) {
      console.log("database: ", data.clients);
      dispatch(createSetClients(data.clients));
    }
  }, [dispatch, data]);

  const clients = useSelector(selectAllClients);
  if (loading) return <Preloader />;
  if (error) {
    console.log("error: ", error);
    alertMessage("error", "Something went wrong");

    return <Preloader />;
  }
  return (
    <>
      {!loading && !error && (
        <div className="body d-flex py-lg-3 py-md-2">
          <div className="container-xxl">
            <div className="row clearfix">
              <div className="col-md-12">
                <div className="card border-0 mb-4 no-bg">
                  <div className="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
                    <h3 className=" fw-bold flex-fill mb-0">Clients</h3>
                    <div className="col-auto d-flex">
                      <div className="dropdown ">
                        <button
                          className="btn btn-primary dropdown-toggle  "
                          type="button"
                          id="dropdownMenuButton2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Status
                        </button>
                        <ul
                          className="dropdown-menu  dropdown-menu-end"
                          aria-labelledby="dropdownMenuButton2"
                        >
                          <li>
                            <a className="dropdown-item" href="#!">
                              Company
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              AgilSoft Tech
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              Microsoft
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              Google
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              Pixelwibes
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              Deltasoft Tech
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              Design Tech
                            </a>
                          </li>
                        </ul>
                      </div>
                      <button
                        type="button"
                        className="btn btn-dark ms-1 "
                        data-bs-toggle="modal"
                        data-bs-target="#createproject"
                      >
                        <i className="icofont-plus-circle me-2 fs-6" />
                        Add Client
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row End */}
            <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">
              {clients.map((client) => (
                <ClientItem client={client} key={client.id} />
              ))}
            </div>
          </div>
        </div>
      )}
      <AddClient />
      <DeleteClient />
      <EditClient />
    </>
  );
};

export default Clients;
