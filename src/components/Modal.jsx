/* eslint-disable react/prop-types */
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
    <dialog open={isDialogOpen}>
      <h1>Game Over</h1>
      <button onClick={handleRestart}>Restart</button>
    </dialog>
  );
}
