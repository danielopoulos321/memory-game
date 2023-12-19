/* eslint-disable react/prop-types */
import '/src/styles/Modal.css';
export default function Modal({
  isDialogOpen,
  setDialogOpen,
  setShouldRestart,
}) {
  function handleRestart() {
    setDialogOpen(false);
    setShouldRestart(true);
  }
  return (
    <>
      {isDialogOpen && <div className="modal-overlay"></div>}
      <dialog open={isDialogOpen}>
        <h1>Game Over</h1>
        <button onClick={handleRestart}>Restart</button>
      </dialog>
    </>
  );
}
