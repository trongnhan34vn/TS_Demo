import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import List from './components/List';
import Footer from './components/Footer';
import Modal from './components/Modal';
import EditModal from './components/EditModal';

function App() {
  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <Header />
                <Toolbar />
              </div>
            </div>
            <List />
          <Footer />
          </div>
        </div>
      </div>
      {/* Edit Modal HTML */}
      <Modal />
      {/* Edit Modal HTML */}
      <EditModal />
      {/* Delete Modal HTML */}
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Delete Employee</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete these Records?</p>
                <p className="text-warning">
                  <small>This action cannot be undone.</small>
                </p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="Cancel"
                />
                <input
                  type="submit"
                  className="btn btn-danger"
                  defaultValue="Delete"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
