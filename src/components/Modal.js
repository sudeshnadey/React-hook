import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import "./Modal.css";

const Modal = () => {
  const {
    data,
    selectedData,
    setSelectedData,
    search,
    setSearch,
    handleUnselectData,
    handleSearch
  } = useContext(DataContext);

  const [showModal, setShowModal] = useState(false);

  const filteredData = data.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <button className="btn1" onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-header">
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search available columns"
              />
              <span onClick={() => setShowModal(false)} className="close">
                &times;
              </span>
            </div>
            <div className="modal-body">
              <div className="modal-columns">
                <div className="available-columns">
                  <h3>Available Columns</h3>
                  <ul>
                    {filteredData.map((d) => (
                      <li key={d.id}>
                        {d.name} - {d.username} - {d.phone}
                      </li>
                    ))}
                  </ul>
                </div>
              
              </div>
            </div>
           
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;