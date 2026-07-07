export function CircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(10,132,255,0.30),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(10,132,255,0.16),transparent_28%)]" />
      <div className="absolute -inset-20 opacity-40 [background-image:linear-gradient(rgba(10,132,255,0.20)_1px,transparent_1px),linear-gradient(90deg,rgba(10,132,255,0.20)_1px,transparent_1px)] [background-size:120px_120px] animate-circuit" />
      <div className="absolute inset-0 animate-pulseGlow bg-[linear-gradient(90deg,transparent,rgba(10,132,255,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.1),#050505_92%)]" />
    </div>
  );
}
