import './Backdrop.scss';

// Fixed atmosphere layer: grid, two drifting light pools, and a fine grain.
// Purely decorative, so it is hidden from assistive tech.
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__grid" />
      <div className="backdrop__par">
        <div className="backdrop__glow backdrop__glow--a" />
        <div className="backdrop__glow backdrop__glow--b" />
      </div>
      <div className="backdrop__grain" />
    </div>
  );
}
