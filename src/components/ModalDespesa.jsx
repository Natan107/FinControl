export default function ModalDespesa({
  show,
  handleClose,
}) {
  if (!show) return null;
  
  return (
    <>
      <div
        className="modal-backdrop fade show"
        onClick={handleClose}
      ></div>

      <div className="modal d-block">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">
                Nova Despesa
              </h5>

              <button
                className="btn-close"
                onClick={handleClose}
              />
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Descrição"
              />

              <input
                type="number"
                className="form-control mb-3"
                placeholder="Valor"
              />

              <input
                type="date"
                className="form-control"
              />
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Cancelar
              </button>

              <button className="btn btn-danger">
                Salvar
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}